import { NextResponse } from 'next/server';
import {
  searchLoads,
  calculateAverageMargin,
  calculateTotalMargin,
  calculateDirectCarrierPercent,
  getLoadsThisMonth,
} from '@/lib/alvys';
import { TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();
    const loads = await searchLoads(startDate, endDate);

    const avgMargin = calculateAverageMargin(loads);
    const totalMargin = calculateTotalMargin(loads);
    const directCarrierPercent = calculateDirectCarrierPercent(loads);

    // Determine current quarter for direct carrier target
    const now = new Date();
    const quarter = Math.ceil((now.getMonth() + 1) / 3);
    const directCarrierTarget = quarter <= 2 ? TARGETS.directCarrierQ2 : TARGETS.directCarrierQ4;

    return NextResponse.json({
      success: true,
      data: {
        avgMarginPerLoad: Math.round(avgMargin * 100) / 100,
        avgMarginTarget: TARGETS.avgMarginPerLoad,
        totalGrossMargin: Math.round(totalMargin * 100) / 100,
        grossMarginTarget: TARGETS.monthlyGrossMargin,
        grossMarginProgress: (totalMargin / TARGETS.monthlyGrossMargin) * 100,
        directCarrierPercent: Math.round(directCarrierPercent * 10) / 10,
        directCarrierTarget,
        meetsMarginTarget: avgMargin >= TARGETS.avgMarginPerLoad,
        meetsDirectCarrierTarget: directCarrierPercent >= directCarrierTarget,
        currentQuarter: `Q${quarter}`,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Alvys margins API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch margin data',
      },
      { status: 500 }
    );
  }
}
