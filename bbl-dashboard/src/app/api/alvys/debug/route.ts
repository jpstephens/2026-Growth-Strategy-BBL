import { NextResponse } from 'next/server';
import { searchLoads, searchTrips, searchTripsByLoadNumbers, getLoadsThisMonth, calculateTotalMargin, calculateAverageMargin } from '@/lib/alvys';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();

    // Fetch loads first
    const loads = await searchLoads(startDate, endDate);

    // Try both trip search methods to see which works
    const loadNumbers = loads.map(l => l.LoadNumber);
    const [tripsByDate, tripsByLoadNumbers] = await Promise.all([
      searchTrips(startDate, endDate),
      searchTripsByLoadNumbers(loadNumbers),
    ]);

    // Use whichever method returned results
    const trips = tripsByLoadNumbers.length > 0 ? tripsByLoadNumbers : tripsByDate;

    // Group loads by status
    const loadsByStatus: Record<string, number> = {};
    for (const load of loads) {
      loadsByStatus[load.Status] = (loadsByStatus[load.Status] || 0) + 1;
    }

    // Group trips by status
    const tripsByStatus: Record<string, number> = {};
    const tripsWithCarrier = trips.filter(t => t.Carrier?.Id);
    for (const trip of trips) {
      tripsByStatus[trip.Status] = (tripsByStatus[trip.Status] || 0) + 1;
    }

    // Sample trips with carrier data
    const sampleTrips = tripsWithCarrier.slice(0, 5).map(trip => ({
      TripNumber: trip.TripNumber,
      LoadNumber: trip.LoadNumber,
      Status: trip.Status,
      CarrierId: trip.Carrier?.Id,
      CarrierLinehaul: trip.Carrier?.Linehaul,
      CarrierTotalPayable: trip.Carrier?.TotalPayable,
      TripValue: trip.TripValue,
    }));

    // Calculate totals from loads (revenue)
    const totalCustomerRate = loads.reduce((sum, load) => sum + (load.CustomerRate?.Amount || 0), 0);

    // Calculate totals from trips (cost)
    const totalCarrierCost = trips.reduce((sum, trip) => sum + (trip.Carrier?.Linehaul?.Amount || 0), 0);

    // Calculate margin using our function
    const calculatedMargin = calculateTotalMargin(loads, trips);
    const avgMargin = calculateAverageMargin(loads, trips);

    // Get complete raw first load to see ALL fields
    const rawFirstLoad = loads.length > 0 ? loads[0] : null;

    return NextResponse.json({
      success: true,
      data: {
        loads: {
          total: loads.length,
          byStatus: loadsByStatus,
          rawFirstLoad, // Complete raw load data
        },
        trips: {
          total: trips.length,
          byDateRange: tripsByDate.length,
          byLoadNumbers: tripsByLoadNumbers.length,
          byStatus: tripsByStatus,
          withCarrier: tripsWithCarrier.length,
          sampleTrips,
        },
        calculations: {
          totalCustomerRate,
          totalCarrierCost,
          totalMargin: calculatedMargin,
          avgMarginPerLoad: avgMargin,
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
