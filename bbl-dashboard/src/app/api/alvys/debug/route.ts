import { NextResponse } from 'next/server';
import { searchLoads, getLoadsThisMonth } from '@/lib/alvys';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();
    const loads = await searchLoads(startDate, endDate);

    // Return first 3 loads with full data to inspect structure
    const sampleLoads = loads.slice(0, 3).map(load => ({
      Id: load.Id,
      LoadNumber: load.LoadNumber,
      Status: load.Status,
      CustomerName: load.CustomerName,
      CustomerRate: load.CustomerRate,
      Linehaul: load.Linehaul,
      CarrierId: load.CarrierId,
      CarrierName: load.CarrierName,
      ScheduledPickupAt: load.ScheduledPickupAt,
      // Include all keys to see what's available
      allKeys: Object.keys(load),
    }));

    // Calculate what we're getting
    const totalCustomerRate = loads.reduce((sum, load) => sum + (load.CustomerRate?.Amount || 0), 0);
    const totalLinehaul = loads.reduce((sum, load) => sum + (load.Linehaul?.Amount || 0), 0);

    return NextResponse.json({
      success: true,
      data: {
        totalLoads: loads.length,
        sampleLoads,
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
