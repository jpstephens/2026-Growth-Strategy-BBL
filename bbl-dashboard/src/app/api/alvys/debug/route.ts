import { NextResponse } from 'next/server';
import { searchLoads, getLoadsThisMonth } from '@/lib/alvys';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();
    const loads = await searchLoads(startDate, endDate);

    // Group loads by status
    const byStatus: Record<string, number> = {};
    const withCarrier: typeof loads = [];
    const withDifferentRates: typeof loads = [];

    for (const load of loads) {
      byStatus[load.Status] = (byStatus[load.Status] || 0) + 1;
      if (load.CarrierId || load.CarrierName) {
        withCarrier.push(load);
      }
      if (load.CustomerRate?.Amount !== load.Linehaul?.Amount) {
        withDifferentRates.push(load);
      }
    }

    // Return sample loads with carrier data
    const sampleWithCarrier = withCarrier.slice(0, 5).map(load => ({
      LoadNumber: load.LoadNumber,
      Status: load.Status,
      CustomerName: load.CustomerName,
      CustomerRate: load.CustomerRate,
      Linehaul: load.Linehaul,
      CarrierId: load.CarrierId,
      CarrierName: load.CarrierName,
      margin: (load.CustomerRate?.Amount || 0) - (load.Linehaul?.Amount || 0),
      allKeys: Object.keys(load),
    }));

    // Get raw first load to see all available fields
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawFirstLoad = loads.length > 0 ? (loads[0] as any) : null;

    // Return sample loads with different rates
    const sampleDifferentRates = withDifferentRates.slice(0, 5).map(load => ({
      LoadNumber: load.LoadNumber,
      Status: load.Status,
      CustomerRate: load.CustomerRate,
      Linehaul: load.Linehaul,
      margin: (load.CustomerRate?.Amount || 0) - (load.Linehaul?.Amount || 0),
    }));

    // Calculate totals
    const totalCustomerRate = loads.reduce((sum, load) => sum + (load.CustomerRate?.Amount || 0), 0);
    const totalLinehaul = loads.reduce((sum, load) => sum + (load.Linehaul?.Amount || 0), 0);

    return NextResponse.json({
      success: true,
      data: {
        totalLoads: loads.length,
        byStatus,
        loadsWithCarrier: withCarrier.length,
        loadsWithDifferentRates: withDifferentRates.length,
        sampleWithCarrier,
        sampleDifferentRates,
        rawFirstLoad,
        calculations: {
          totalCustomerRate,
          totalLinehaul,
          calculatedMargin: totalCustomerRate - totalLinehaul,
        },
        dateRange: { start: startDate.toISOString(), end: endDate.toISOString() },
      },
    });
  } catch (error) {
    console.error('Alvys debug error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
