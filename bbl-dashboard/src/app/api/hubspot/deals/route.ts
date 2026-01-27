import { NextRequest, NextResponse } from 'next/server';
import {
  getAllDeals,
  getBBLPipeline,
  searchDealsClosedInRange,
  getStartOfMonth,
  getEndOfMonth,
} from '@/lib/hubspot';
import { PipelineStage, PIPELINE_STAGES, TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const ownerId = searchParams.get('ownerId') || undefined;

    const [allDeals, pipeline] = await Promise.all([
      getAllDeals(ownerId),
      getBBLPipeline(),
    ]);

    // Build stage map from pipeline config
    const stageMap = new Map<string, { label: string; order: number }>();
    if (pipeline) {
      for (const stage of pipeline.stages) {
        stageMap.set(stage.id, { label: stage.label, order: stage.displayOrder });
      }
    }

    // Group deals by stage
    const dealsByStage: Record<string, { count: number; value: number }> = {};
    let pipelineValue = 0;

    for (const deal of allDeals) {
      const stageId = deal.properties.dealstage;
      const amount = parseFloat(deal.properties.amount || '0');

      if (!dealsByStage[stageId]) {
        dealsByStage[stageId] = { count: 0, value: 0 };
      }
      dealsByStage[stageId].count++;
      dealsByStage[stageId].value += amount;

      // Add to pipeline value if not won or lost
      const stageInfo = stageMap.get(stageId);
      if (stageInfo && !stageInfo.label.toLowerCase().includes('won') && !stageInfo.label.toLowerCase().includes('lost')) {
        pipelineValue += amount;
      }
    }

    // Build pipeline stages array
    const pipelineByStage: PipelineStage[] = [];
    for (const [stageId, data] of Object.entries(dealsByStage)) {
      const stageInfo = stageMap.get(stageId);
      const stageDef = PIPELINE_STAGES.find(s => stageInfo?.label.includes(s.name));

      pipelineByStage.push({
        stageId,
        stage: stageInfo?.label || `Stage ${stageId}`,
        count: data.count,
        value: data.value,
        maxDays: stageDef?.maxDays ?? null,
      });
    }

    // Sort by display order
    pipelineByStage.sort((a, b) => {
      const orderA = stageMap.get(a.stageId)?.order ?? 999;
      const orderB = stageMap.get(b.stageId)?.order ?? 999;
      return orderA - orderB;
    });

    // Get new customers this month (deals closed as Won)
    const wonStage = pipeline?.stages.find(s => s.label.toLowerCase().includes('won'));
    let newCustomersMTD = 0;

    if (wonStage) {
      const startOfMonth = getStartOfMonth();
      const endOfMonth = getEndOfMonth();
      const wonDeals = await searchDealsClosedInRange(startOfMonth, endOfMonth, wonStage.id);
      newCustomersMTD = wonDeals.length;
    }

    // Count qualified prospects (stage 4+)
    const qualifiedStages = pipeline?.stages.filter(s => {
      const order = s.displayOrder;
      return order >= 3; // Assuming 0-indexed, qualified is stage 4 (index 3)
    }).map(s => s.id) || [];

    const qualifiedProspects = allDeals.filter(d => qualifiedStages.includes(d.properties.dealstage)).length;

    return NextResponse.json({
      success: true,
      data: {
        totalDeals: allDeals.length,
        pipelineValue,
        pipelineByStage,
        newCustomersMTD,
        newCustomersTarget: TARGETS.newCustomersPerMonth,
        qualifiedProspects,
        qualifiedTarget: TARGETS.qualifiedPerWeek,
        pipeline: pipeline ? { id: pipeline.id, name: pipeline.label } : null,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('HubSpot deals API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch deals data',
      },
      { status: 500 }
    );
  }
}
