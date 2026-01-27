import { NextRequest, NextResponse } from 'next/server';
import {
  searchCallsByDateRange,
  calculateDials,
  calculateConversations,
  getStartOfWeek,
  getStartOfDay,
} from '@/lib/hubspot';
import { TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ownerId = searchParams.get('ownerId') || undefined;

    const startOfWeek = getStartOfWeek();
    const startOfDay = getStartOfDay();

    // Get calls for the week and today
    const callsThisWeek = await searchCallsByDateRange(startOfWeek, undefined, ownerId);
    const callsToday = await searchCallsByDateRange(startOfDay, undefined, ownerId);

    const dialsThisWeek = calculateDials(callsThisWeek);
    const dialsToday = calculateDials(callsToday);
    const conversationsThisWeek = calculateConversations(callsThisWeek);

    return NextResponse.json({
      success: true,
      data: {
        dialsToday,
        dialsDailyTarget: TARGETS.dialsPerDay,
        dialsThisWeek,
        dialsTarget: TARGETS.dialsPerWeek,
        dialsProgress: (dialsThisWeek / TARGETS.dialsPerWeek) * 100,
        conversationsThisWeek,
        conversationsTarget: TARGETS.conversationsPerWeek,
        conversationsProgress: (conversationsThisWeek / TARGETS.conversationsPerWeek) * 100,
        totalCallsThisWeek: callsThisWeek.length,
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
