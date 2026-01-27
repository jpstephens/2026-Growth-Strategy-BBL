import { NextResponse } from 'next/server';
import {
  getCampaigns,
  getAllCampaignAnalytics,
  calculateEmailMetrics,
  getCampaignPerformanceByVertical,
} from '@/lib/instantly';
import { TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const [campaigns, analytics] = await Promise.all([
      getCampaigns(),
      getAllCampaignAnalytics(),
    ]);

    const metrics = calculateEmailMetrics(analytics);
    const byVertical = getCampaignPerformanceByVertical(campaigns, analytics);

    return NextResponse.json({
      success: true,
      data: {
        campaigns: campaigns.map(c => ({
          id: c.id,
          name: c.name,
          status: c.status,
        })),
        emailsSent: metrics.emailsSent,
        openRate: Math.round(metrics.openRate * 10) / 10,
        replyRate: Math.round(metrics.replyRate * 100) / 100,
        replyRateTarget: TARGETS.emailReplyRate,
        bounceRate: Math.round(metrics.bounceRate * 10) / 10,
        byVertical,
        meetsTarget: metrics.replyRate >= TARGETS.emailReplyRate,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Instantly campaigns API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch campaign data',
      },
      { status: 500 }
    );
  }
}
