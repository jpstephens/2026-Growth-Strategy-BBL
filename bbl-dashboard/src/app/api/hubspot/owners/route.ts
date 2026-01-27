import { NextResponse } from 'next/server';
import { getOwners } from '@/lib/hubspot';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const owners = await getOwners();

    return NextResponse.json({
      success: true,
      data: owners.map(owner => ({
        id: owner.id,
        name: `${owner.firstName} ${owner.lastName}`.trim() || owner.email,
        email: owner.email,
      })),
    });
  } catch (error) {
    console.error('HubSpot owners API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch owners',
      },
      { status: 500 }
    );
  }
}
