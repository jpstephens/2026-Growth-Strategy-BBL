import { NextResponse } from 'next/server';
import {
  searchLoads,
  calculateOnTimePickup,
  calculateOnTimeDelivery,
  getLoadsThisMonth,
} from '@/lib/alvys';
import { TARGETS } from '@/types/metrics';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { startDate, endDate } = getLoadsThisMonth();
    const loads = await searchLoads(startDate, endDate);

    const onTimePickup = calculateOnTimePickup(loads);
    const onTimeDelivery = calculateOnTimeDelivery(loads);

    return NextResponse.json({
      success: true,
      data: {
        loadsThisMonth: loads.length,
        onTimePickup: Math.round(onTimePickup * 10) / 10,
        onTimePickupTarget: TARGETS.onTimePickup,
        onTimeDelivery: Math.round(onTimeDelivery * 10) / 10,
        onTimeDeliveryTarget: TARGETS.onTimeDelivery,
        meetsPickupTarget: onTimePickup >= TARGETS.onTimePickup,
        meetsDeliveryTarget: onTimeDelivery >= TARGETS.onTimeDelivery,
        dateRange: {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        },
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Alvys loads API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch loads data',
      },
      { status: 500 }
    );
  }
}
