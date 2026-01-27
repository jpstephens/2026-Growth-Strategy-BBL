import { NextResponse } from 'next/server';
import {
  searchLoads,
  getCustomerConcentration,
  getLoadsThisMonth,
} from '@/lib/alvys';
import { TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();
    const loads = await searchLoads(startDate, endDate);

    const concentration = getCustomerConcentration(loads);
    const topCustomers = concentration.slice(0, 10);
    const activeCustomers = concentration.length;

    // Check if any customer exceeds concentration limit
    const overConcentrated = concentration.filter(c => c.percent > TARGETS.maxCustomerConcentration);

    return NextResponse.json({
      success: true,
      data: {
        activeCustomers,
        activeCustomersTarget: TARGETS.activeCustomers,
        topCustomers,
        overConcentratedCustomers: overConcentrated,
        maxConcentration: concentration[0]?.percent || 0,
        maxConcentrationTarget: TARGETS.maxCustomerConcentration,
        meetsConcentrationTarget: overConcentrated.length === 0,
        totalRevenue: concentration.reduce((sum, c) => sum + c.revenue, 0),
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Alvys customers API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch customer data',
      },
      { status: 500 }
    );
  }
}
