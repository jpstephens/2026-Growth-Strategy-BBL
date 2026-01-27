import { NextResponse } from 'next/server';
import { searchLoads, searchTrips, searchTripsByLoadNumbers, getLoadsThisMonth, calculateTotalMargin, calculateAverageMargin } from '@/lib/alvys';

// Direct API call to test different endpoints
async function testAlvysEndpoint(endpoint: string, body?: object) {
  const token = process.env.ALVYS_ACCESS_TOKEN_CACHE;
  const companyCode = process.env.ALVYS_COMPANY_CODE;

  // Get fresh token
  const authResponse = await fetch(`https://integrations.alvys.com/api/authentication/${companyCode}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.ALVYS_CLIENT_ID,
      client_secret: process.env.ALVYS_CLIENT_SECRET,
      grant_type: 'client_credentials',
    }),
  });
  const authData = await authResponse.json();

  const response = await fetch(`https://api.alvys.com/api/p/v1.0${endpoint}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Authorization': `Bearer ${authData.access_token}`,
      'CompanyCode': companyCode || '',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response.json();
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();

    // Fetch loads first
    const loads = await searchLoads(startDate, endDate);

    // Get load numbers for trip search
    const loadNumbers = loads.map(l => l.LoadNumber).filter(Boolean);

    // Only search trips by load numbers (date range doesn't work)
    let tripsByLoadNumbers: Awaited<ReturnType<typeof searchTripsByLoadNumbers>> = [];
    let tripError: string | null = null;
    try {
      tripsByLoadNumbers = await searchTripsByLoadNumbers(loadNumbers);
    } catch (e) {
      tripError = e instanceof Error ? e.message : String(e);
    }

    const tripsByDate: typeof tripsByLoadNumbers = [];

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

    // Try to get a single load by ID to see if it has more data
    let singleLoadById = null;
    let tripsForLoad = null;
    if (loads.length > 0) {
      try {
        // Try GET /loads?id={id}
        singleLoadById = await testAlvysEndpoint(`/loads?id=${loads[0].Id}`);
      } catch (e) {
        singleLoadById = { error: String(e) };
      }

      try {
        // Try searching trips by this load number
        tripsForLoad = await testAlvysEndpoint('/trips/search', {
          LoadNumbers: [loads[0].LoadNumber],
          PageSize: 10,
        });
      } catch (e) {
        tripsForLoad = { error: String(e) };
      }
    }

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
          tripError,
          loadNumbersSample: loadNumbers.slice(0, 5),
          loadNumbersCount: loadNumbers.length,
        },
        calculations: {
          totalCustomerRate,
          totalCarrierCost,
          totalMargin: calculatedMargin,
          avgMarginPerLoad: avgMargin,
        },
        dateRange: { start: startDate.toISOString(), end: endDate.toISOString() },
        // Test results for debugging
        apiTests: {
          singleLoadById,
          tripsForLoad,
        },
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
