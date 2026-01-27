import { InstantlyCampaign, InstantlyCampaignAnalytics, InstantlyOverview } from '@/types/metrics';

const INSTANTLY_API_BASE = 'https://api.instantly.ai/api/v2';

function getApiKey(): string {
  const key = process.env.INSTANTLY_API_KEY;
  if (!key) {
    throw new Error('INSTANTLY_API_KEY environment variable is not set');
  }
  return key;
}

async function instantlyFetch<T>(endpoint: string): Promise<T> {
  const url = `${INSTANTLY_API_BASE}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getApiKey()}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Instantly API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Get all campaigns (v2 API returns { items: Campaign[] })
export async function getCampaigns(): Promise<InstantlyCampaign[]> {
  const response = await instantlyFetch<{ items: InstantlyCampaign[] }>('/campaigns');
  return response.items || [];
}

// Get campaign analytics (v2 API)
export async function getCampaignAnalytics(campaignId: string): Promise<InstantlyCampaignAnalytics> {
  return instantlyFetch<InstantlyCampaignAnalytics>(`/campaigns/${campaignId}/analytics`);
}

// Get overall account analytics (v2 API - aggregate from all campaigns)
export async function getOverviewAnalytics(): Promise<InstantlyOverview> {
  const analytics = await instantlyFetch<InstantlyCampaignAnalytics[]>('/campaigns/analytics');

  // Aggregate all campaign analytics
  const totals = (analytics || []).reduce(
    (acc, campaign) => ({
      total_emails_sent: acc.total_emails_sent + (campaign.emails_sent || 0),
      total_opens: acc.total_opens + (campaign.unique_opens || 0),
      total_replies: acc.total_replies + (campaign.replies || 0),
      total_bounces: acc.total_bounces + (campaign.bounces || 0),
    }),
    { total_emails_sent: 0, total_opens: 0, total_replies: 0, total_bounces: 0 }
  );

  return totals;
}

// Get all campaign analytics
export async function getAllCampaignAnalytics(): Promise<InstantlyCampaignAnalytics[]> {
  const campaigns = await getCampaigns();
  const analyticsPromises = campaigns.map(campaign => getCampaignAnalytics(campaign.id));
  return Promise.all(analyticsPromises);
}

// Calculate email metrics
export function calculateEmailMetrics(analytics: InstantlyCampaignAnalytics[]) {
  const totals = analytics.reduce(
    (acc, campaign) => ({
      emailsSent: acc.emailsSent + campaign.emails_sent,
      opens: acc.opens + campaign.unique_opens,
      replies: acc.replies + campaign.replies,
      bounces: acc.bounces + campaign.bounces,
    }),
    { emailsSent: 0, opens: 0, replies: 0, bounces: 0 }
  );

  return {
    emailsSent: totals.emailsSent,
    openRate: totals.emailsSent > 0 ? (totals.opens / totals.emailsSent) * 100 : 0,
    replyRate: totals.emailsSent > 0 ? (totals.replies / totals.emailsSent) * 100 : 0,
    bounceRate: totals.emailsSent > 0 ? (totals.bounces / totals.emailsSent) * 100 : 0,
  };
}

// Campaign performance by vertical (based on campaign name)
export function getCampaignPerformanceByVertical(
  campaigns: InstantlyCampaign[],
  analytics: InstantlyCampaignAnalytics[]
): Record<string, { emailsSent: number; replyRate: number }> {
  const verticals: Record<string, { emailsSent: number; replies: number }> = {};

  for (const campaign of campaigns) {
    const campaignAnalytics = analytics.find(a => a.campaign_id === campaign.id);
    if (!campaignAnalytics) continue;

    // Determine vertical from campaign name
    let vertical = 'Other';
    const nameLower = campaign.name.toLowerCase();
    if (nameLower.includes('metal') || nameLower.includes('fabrication')) {
      vertical = 'Metal Fabrication';
    } else if (nameLower.includes('building') || nameLower.includes('products')) {
      vertical = 'Building Products';
    } else if (nameLower.includes('industrial') || nameLower.includes('equipment')) {
      vertical = 'Industrial Equipment';
    } else if (nameLower.includes('automotive') || nameLower.includes('jit')) {
      vertical = 'Automotive JIT';
    }

    if (!verticals[vertical]) {
      verticals[vertical] = { emailsSent: 0, replies: 0 };
    }
    verticals[vertical].emailsSent += campaignAnalytics.emails_sent;
    verticals[vertical].replies += campaignAnalytics.replies;
  }

  const result: Record<string, { emailsSent: number; replyRate: number }> = {};
  for (const [vertical, data] of Object.entries(verticals)) {
    result[vertical] = {
      emailsSent: data.emailsSent,
      replyRate: data.emailsSent > 0 ? (data.replies / data.emailsSent) * 100 : 0,
    };
  }

  return result;
}
