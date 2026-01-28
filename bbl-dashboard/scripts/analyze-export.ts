/**
 * Script to analyze the Excel export and compare with presentation
 */

import * as XLSX from 'xlsx';

const filePath = '/Users/jasonstephens/Documents/Inbox/export (28).xlsx';

console.log('\n=== Team Export Analysis - January 2026 ===\n');

try {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet) as any[];

  // Filter to January 2026 only
  const jan2026Loads = data.filter(row => {
    const pickup = row['Scheduled Pickup'];
    if (!pickup) return false;
    return pickup.toString().includes('01-') && pickup.toString().includes('-2026');
  });

  console.log(`Total loads in export: ${data.length}`);
  console.log(`January 2026 loads: ${jan2026Loads.length}\n`);

  // Calculate totals
  let totalRevenue = 0;
  let totalMargin = 0;
  const customerData: Record<string, { loads: number; revenue: number; margin: number }> = {};

  for (const row of jan2026Loads) {
    const revenue = parseFloat(row['Customer Revenue'] || 0);
    const margin = parseFloat(row['Gross Margin'] || 0);
    const customer = row['Customer'] || 'Unknown';

    totalRevenue += revenue;
    totalMargin += margin;

    if (!customerData[customer]) {
      customerData[customer] = { loads: 0, revenue: 0, margin: 0 };
    }
    customerData[customer].loads += 1;
    customerData[customer].revenue += revenue;
    customerData[customer].margin += margin;
  }

  const avgMarginPerLoad = jan2026Loads.length > 0 ? totalMargin / jan2026Loads.length : 0;
  const uniqueCustomers = Object.keys(customerData).length;

  console.log('=== TEAM EXPORT TOTALS ===\n');
  console.log(`Total Loads:      ${jan2026Loads.length}`);
  console.log(`Total Revenue:    $${totalRevenue.toLocaleString()}`);
  console.log(`Total Margin:     $${totalMargin.toLocaleString()}`);
  console.log(`Avg Margin/Load:  $${avgMarginPerLoad.toFixed(2)}`);
  console.log(`Active Customers: ${uniqueCustomers}`);

  console.log('\n=== COMPARISON ===\n');
  console.log('                    Presentation    Team Export    API Query');
  console.log('                    ------------    -----------    ---------');
  console.log(`Loads               75              ${jan2026Loads.length.toString().padEnd(14)} 61`);
  console.log(`Revenue             $127,705        $${totalRevenue.toLocaleString().padEnd(13)} $112,715`);
  console.log(`Gross Margin        $17,846         $${totalMargin.toLocaleString().padEnd(13)} $9,567`);
  console.log(`Margin/Load         $238            $${avgMarginPerLoad.toFixed(0).padEnd(13)} $157`);
  console.log(`Customers           7               ${uniqueCustomers.toString().padEnd(14)} 6`);

  console.log('\n=== CUSTOMER BREAKDOWN (Team Export) ===\n');

  const sortedCustomers = Object.entries(customerData)
    .sort((a, b) => b[1].loads - a[1].loads);

  for (const [customer, stats] of sortedCustomers) {
    const marginPerLoad = stats.loads > 0 ? stats.margin / stats.loads : 0;
    console.log(`${customer}:`);
    console.log(`  Loads: ${stats.loads}, Revenue: $${stats.revenue.toLocaleString()}, Margin: $${stats.margin.toLocaleString()} ($${marginPerLoad.toFixed(0)}/load)`);
  }

  // Check for loads with $0 margin or negative margin
  const zeroMarginLoads = jan2026Loads.filter(l => parseFloat(l['Gross Margin'] || 0) <= 0);
  if (zeroMarginLoads.length > 0) {
    console.log(`\n=== WARNING: ${zeroMarginLoads.length} loads with $0 or negative margin ===\n`);
    for (const load of zeroMarginLoads.slice(0, 5)) {
      console.log(`  Load #${load['Load #']}: ${load['Customer']} - Margin: $${load['Gross Margin']}, Revenue: $${load['Customer Revenue']}`);
    }
    if (zeroMarginLoads.length > 5) {
      console.log(`  ... and ${zeroMarginLoads.length - 5} more`);
    }
  }

  // Check for loads with Driver Rate = 0 (might be missing cost data)
  const zeroCostLoads = jan2026Loads.filter(l => parseFloat(l['Driver Rate'] || 0) === 0);
  console.log(`\n=== NOTE: ${zeroCostLoads.length} loads have Driver Rate = $0 ===`);
  console.log('This might indicate missing carrier cost data.\n');

} catch (error) {
  console.error('Error:', error);
}
