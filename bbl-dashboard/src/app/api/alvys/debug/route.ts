import { NextResponse } from 'next/server';
import { searchLoads, searchTripsByLoadNumbers, getLoadsThisMonth, calculateTotalMargin, calculateAverageMargin, calculateRepeatCarrierMetrics } from '@/lib/alvys';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();

    // Fetch loads first
    const loads = await searchLoads(startDate, endDate);

    // Fetch trips by load numbers - this is how carrier cost data is retrieved
    const loadNumbers = loads.map(l => l.LoadNumber).filter(Boolean);
    const trips = await searchTripsByLoadNumbers(loadNumbers);

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

    // Calculate totals
    const totalCustomerRate = loads.reduce((sum, load) => sum + (load.CustomerRate?.Amount || 0), 0);
    const totalCarrierCost = trips.reduce((sum, trip) => sum + (trip.Carrier?.Linehaul?.Amount || 0), 0);
    const calculatedMargin = calculateTotalMargin(loads, trips);
    const avgMargin = calculateAverageMargin(loads, trips);
    const carrierMetrics = calculateRepeatCarrierMetrics(trips);

    return NextResponse.json({
      success: true,
      data: {
        loads: {
          total: loads.length,
          byStatus: loadsByStatus,
        },
        trips: {
          total: trips.length,
          byStatus: tripsByStatus,
          withCarrier: tripsWithCarrier.length,
          sampleTrips,
        },
        carriers: {
          total: carrierMetrics.totalCarriers,
          repeat: carrierMetrics.repeatCarriers,
          repeatRate: carrierMetrics.repeatRate,
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
