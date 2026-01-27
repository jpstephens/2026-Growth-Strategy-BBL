import { NextResponse } from 'next/server';
import {
  searchCallsByDateRange,
  calculateDials,
  calculateConversations,
  getStartOfWeek,
} from '@/lib/hubspot';
import { TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const startOfWeek = getStartOfWeek();
    const calls = await searchCallsByDateRange(startOfWeek);

    const dials = calculateDials(calls);
    const conversations = calculateConversations(calls);

    return NextResponse.json({
      success: true,
      data: {
        dialsThisWeek: dials,
        dialsTarget: TARGETS.dialsPerWeek,
        dialsProgress: (dials / TARGETS.dialsPerWeek) * 100,
        conversationsThisWeek: conversations,
        conversationsTarget: TARGETS.conversationsPerWeek,
        conversationsProgress: (conversations / TARGETS.conversationsPerWeek) * 100,
        totalCallsThisWeek: calls.length,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('HubSpot calls API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch call data',
      },
      { status: 500 }
    );
  }
}
