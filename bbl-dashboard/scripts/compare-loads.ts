/**
 * Script to compare load numbers between team export and API
 */

import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

// Load .env.local manually
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
for (const line of envContent.split('\n')) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    const value = valueParts.join('=');
    process.env[key] = value;
  }
}

const ALVYS_AUTH_BASE = 'https://integrations.alvys.com/api/authentication';
const ALVYS_API_BASE = 'https://api.alvys.com/api/p/v1.0';

async function getAccessToken(): Promise<string> {
  const clientId = process.env.ALVYS_CLIENT_ID;
  const clientSecret = process.env.ALVYS_CLIENT_SECRET;
  const companyCode = process.env.ALVYS_COMPANY_CODE;

  const authUrl = `${ALVYS_AUTH_BASE}/${companyCode}/token`;
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }),
  });

  const data = await response.json();
  return data.access_token;
}

async function alvysFetch<T>(token: string, endpoint: string, body?: object): Promise<T> {
  const companyCode = process.env.ALVYS_COMPANY_CODE!;
  const response = await fetch(`${ALVYS_API_BASE}${endpoint}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'CompanyCode': companyCode,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return response.json();
}

async function main() {
  console.log('\n=== Comparing Load Numbers: Team Export vs API ===\n');

  // 1. Get load numbers from team export
  const filePath = '/Users/jasonstephens/Documents/Inbox/export (28).xlsx';
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const exportData = XLSX.utils.sheet_to_json(sheet) as any[];

  const exportLoadNumbers = new Set(exportData.map(r => r['Load #']?.toString()));
  console.log(`Team Export: ${exportLoadNumbers.size} unique load numbers`);
  console.log(`Load numbers: ${Array.from(exportLoadNumbers).sort().join(', ')}\n`);

  // 2. Get load numbers from API
  const token = await getAccessToken();

  // Query by multiple statuses
  const statuses = ['Covered', 'Dispatched', 'Delivered', 'In Transit', 'At Pickup', 'At Delivery'];
  console.log(`API: Querying statuses: ${statuses.join(', ')}\n`);

  const allApiLoads: any[] = [];
  for (const status of statuses) {
    const response = await alvysFetch<{ Items: any[] }>(token, '/loads/search', {
      PageSize: 500,
      Status: [status],
    });
    const loads = response.Items || [];
    console.log(`  Status "${status}": ${loads.length} loads`);
    allApiLoads.push(...loads);
  }

  // Dedupe
  const uniqueApiLoads = Array.from(
    new Map(allApiLoads.map(load => [load.Id, load])).values()
  );
  console.log(`\nAPI Total (deduped): ${uniqueApiLoads.length} loads`);

  // Filter to January 2026
  const startDate = new Date('2026-01-01T00:00:00Z');
  const endDate = new Date('2026-01-31T23:59:59Z');

  const jan2026ApiLoads = uniqueApiLoads.filter(load => {
    if (!load.ScheduledPickupAt) return false;
    const loadDate = new Date(load.ScheduledPickupAt);
    return loadDate >= startDate && loadDate <= endDate;
  });

  const apiLoadNumbers = new Set(jan2026ApiLoads.map(l => l.LoadNumber?.toString()));
  console.log(`API January 2026: ${apiLoadNumbers.size} loads`);
  console.log(`Load numbers: ${Array.from(apiLoadNumbers).sort().join(', ')}\n`);

  // 3. Find differences
  const inExportNotApi = Array.from(exportLoadNumbers).filter(ln => !apiLoadNumbers.has(ln));
  const inApiNotExport = Array.from(apiLoadNumbers).filter(ln => !exportLoadNumbers.has(ln));

  console.log('=== DIFFERENCES ===\n');
  console.log(`In Export but NOT in API (${inExportNotApi.length}):`);
  if (inExportNotApi.length > 0) {
    console.log(`  ${inExportNotApi.sort().join(', ')}`);

    // Look up these loads in the export to see their details
    console.log('\n  Details of missing loads:');
    for (const loadNum of inExportNotApi) {
      const load = exportData.find(r => r['Load #']?.toString() === loadNum);
      if (load) {
        console.log(`    Load #${loadNum}: ${load['Customer']}, Status: ${load['Load Status']}, Pickup: ${load['Scheduled Pickup']}`);
      }
    }
  } else {
    console.log('  None');
  }

  console.log(`\nIn API but NOT in Export (${inApiNotExport.length}):`);
  if (inApiNotExport.length > 0) {
    console.log(`  ${inApiNotExport.sort().join(', ')}`);

    // Look up these loads in the API data
    console.log('\n  Details of extra loads:');
    for (const loadNum of inApiNotExport) {
      const load = jan2026ApiLoads.find(l => l.LoadNumber?.toString() === loadNum);
      if (load) {
        console.log(`    Load #${loadNum}: ${load.CustomerName}, Status: ${load.Status}, Pickup: ${load.ScheduledPickupAt}`);
      }
    }
  } else {
    console.log('  None');
  }

  // 4. Check what statuses the missing loads have in the full API response
  if (inExportNotApi.length > 0) {
    console.log('\n=== CHECKING MISSING LOADS IN FULL API ===\n');

    // Search for specific load numbers
    const missingLoadsResponse = await alvysFetch<{ Items: any[] }>(token, '/loads/search', {
      PageSize: 500,
      LoadNumbers: inExportNotApi.map(n => parseInt(n)),
    });

    const missingLoads = missingLoadsResponse.Items || [];
    console.log(`Found ${missingLoads.length} of ${inExportNotApi.length} missing loads in API`);

    for (const load of missingLoads) {
      console.log(`  Load #${load.LoadNumber}: Status="${load.Status}", Customer="${load.CustomerName}", Pickup="${load.ScheduledPickupAt}"`);
    }

    const stillMissing = inExportNotApi.filter(ln =>
      !missingLoads.find(l => l.LoadNumber?.toString() === ln)
    );
    if (stillMissing.length > 0) {
      console.log(`\n  Still not found in API: ${stillMissing.join(', ')}`);
    }
  }

}

main().catch(console.error);
