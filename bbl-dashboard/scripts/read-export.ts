/**
 * Script to read and analyze the Excel export
 */

import * as XLSX from 'xlsx';
import * as path from 'path';

const filePath = '/Users/jasonstephens/Documents/Inbox/export (28).xlsx';

console.log('\n=== Reading Excel Export ===\n');
console.log(`File: ${filePath}\n`);

try {
  const workbook = XLSX.readFile(filePath);

  console.log('Sheets found:', workbook.SheetNames);
  console.log('');

  for (const sheetName of workbook.SheetNames) {
    console.log(`\n=== Sheet: ${sheetName} ===\n`);

    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

    // Print headers
    if (data.length > 0) {
      console.log('Headers:', data[0]);
      console.log(`Total rows: ${data.length - 1}`);
      console.log('');

      // Print first 5 rows of data
      console.log('First 5 rows:');
      for (let i = 1; i <= Math.min(5, data.length - 1); i++) {
        console.log(`  Row ${i}:`, data[i]);
      }

      // Try to find and sum relevant columns
      const headers = data[0] as string[];

      // Look for common column names
      const revenueIdx = headers.findIndex(h =>
        h && (h.toString().toLowerCase().includes('revenue') ||
              h.toString().toLowerCase().includes('customer rate') ||
              h.toString().toLowerCase().includes('amount')));

      const marginIdx = headers.findIndex(h =>
        h && (h.toString().toLowerCase().includes('margin') ||
              h.toString().toLowerCase().includes('profit')));

      const costIdx = headers.findIndex(h =>
        h && (h.toString().toLowerCase().includes('cost') ||
              h.toString().toLowerCase().includes('carrier')));

      const customerIdx = headers.findIndex(h =>
        h && (h.toString().toLowerCase().includes('customer') ||
              h.toString().toLowerCase().includes('shipper')));

      const dateIdx = headers.findIndex(h =>
        h && (h.toString().toLowerCase().includes('date') ||
              h.toString().toLowerCase().includes('pickup')));

      console.log('\nColumn indices found:');
      console.log(`  Revenue/Rate column: ${revenueIdx >= 0 ? headers[revenueIdx] : 'not found'}`);
      console.log(`  Margin column: ${marginIdx >= 0 ? headers[marginIdx] : 'not found'}`);
      console.log(`  Cost column: ${costIdx >= 0 ? headers[costIdx] : 'not found'}`);
      console.log(`  Customer column: ${customerIdx >= 0 ? headers[customerIdx] : 'not found'}`);
      console.log(`  Date column: ${dateIdx >= 0 ? headers[dateIdx] : 'not found'}`);

      // Calculate totals if we found relevant columns
      if (data.length > 1) {
        let totalRevenue = 0;
        let totalMargin = 0;
        let totalCost = 0;
        const customers = new Set<string>();

        for (let i = 1; i < data.length; i++) {
          const row = data[i];
          if (revenueIdx >= 0 && row[revenueIdx]) {
            const val = parseFloat(row[revenueIdx].toString().replace(/[$,]/g, ''));
            if (!isNaN(val)) totalRevenue += val;
          }
          if (marginIdx >= 0 && row[marginIdx]) {
            const val = parseFloat(row[marginIdx].toString().replace(/[$,]/g, ''));
            if (!isNaN(val)) totalMargin += val;
          }
          if (costIdx >= 0 && row[costIdx]) {
            const val = parseFloat(row[costIdx].toString().replace(/[$,]/g, ''));
            if (!isNaN(val)) totalCost += val;
          }
          if (customerIdx >= 0 && row[customerIdx]) {
            customers.add(row[customerIdx].toString());
          }
        }

        console.log('\n=== CALCULATED TOTALS ===\n');
        console.log(`Total Loads: ${data.length - 1}`);
        if (revenueIdx >= 0) console.log(`Total Revenue: $${totalRevenue.toLocaleString()}`);
        if (costIdx >= 0) console.log(`Total Cost: $${totalCost.toLocaleString()}`);
        if (marginIdx >= 0) {
          console.log(`Total Margin: $${totalMargin.toLocaleString()}`);
          console.log(`Avg Margin/Load: $${(totalMargin / (data.length - 1)).toFixed(2)}`);
        } else if (revenueIdx >= 0 && costIdx >= 0) {
          const calcMargin = totalRevenue - totalCost;
          console.log(`Calculated Margin: $${calcMargin.toLocaleString()}`);
          console.log(`Avg Margin/Load: $${(calcMargin / (data.length - 1)).toFixed(2)}`);
        }
        if (customerIdx >= 0) console.log(`Unique Customers: ${customers.size}`);

        // Print all unique customers
        if (customers.size > 0 && customers.size <= 20) {
          console.log('\nCustomers:', Array.from(customers).join(', '));
        }
      }
    }
  }

  // Also output raw JSON for full visibility
  console.log('\n=== FULL DATA AS JSON ===\n');
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(firstSheet);
  console.log(JSON.stringify(jsonData, null, 2));

} catch (error) {
  console.error('Error reading file:', error);
}
