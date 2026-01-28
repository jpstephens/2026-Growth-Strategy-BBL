'use client';

import { SalesMetrics, PipelineStage } from '@/types/metrics';
import { KPICard } from './charts/KPICard';
import { FunnelChart } from './charts/FunnelChart';
import { GaugeChart } from './charts/GaugeChart';
import { StatCard } from './charts/StatCard';

// Default pipeline stages - always show all stages
const DEFAULT_PIPELINE_STAGES: PipelineStage[] = [
  { stageId: '1', stage: 'New Lead', count: 0, value: 0, maxDays: 2 },
  { stageId: '2', stage: 'Contacted', count: 0, value: 0, maxDays: 14 },
  { stageId: '3', stage: 'Engaged', count: 0, value: 0, maxDays: 7 },
  { stageId: '4', stage: 'Qualified', count: 0, value: 0, maxDays: 7 },
  { stageId: '5', stage: 'Quote Sent', count: 0, value: 0, maxDays: 14 },
  { stageId: '6', stage: 'Negotiating', count: 0, value: 0, maxDays: 14 },
  { stageId: '7', stage: 'First Load Booked', count: 0, value: 0, maxDays: 7 },
];

// Merge API data with default stages so empty stages still appear
function mergePipelineStages(apiStages: PipelineStage[]): PipelineStage[] {
  // Create a map of API data by stage name (more reliable than stageId)
  const apiDataByName = new Map<string, PipelineStage>();
  apiStages.forEach(stage => {
    // Match by partial name (e.g., "Contacted" matches "Contacted")
    const matchingDefault = DEFAULT_PIPELINE_STAGES.find(d =>
      stage.stage.toLowerCase().includes(d.stage.toLowerCase()) ||
      d.stage.toLowerCase().includes(stage.stage.toLowerCase())
    );
    if (matchingDefault) {
      apiDataByName.set(matchingDefault.stage, stage);
    }
  });

  // Return all default stages, but with counts/values from API where available
  return DEFAULT_PIPELINE_STAGES.map(defaultStage => {
    const apiData = apiDataByName.get(defaultStage.stage);
    if (apiData) {
      return {
        ...defaultStage,
        stageId: apiData.stageId,
        count: apiData.count,
        value: apiData.value,
      };
    }
    return defaultStage;
  });
}

interface SalesSectionProps {
  data: SalesMetrics | null;
  loading?: boolean;
  error?: string;
}

export function SalesSection({ data, loading, error }: SalesSectionProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-bb-slate-200 rounded w-48 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-bb-slate-100 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="h-64 bg-bb-slate-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bb-crimson-50 border border-bb-crimson-300 rounded-lg p-4">
        <h3 className="text-bb-crimson-900 font-semibold">Sales Data Error</h3>
        <p className="text-bb-crimson-800 text-sm">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-bb-slate-100 border border-bb-slate-300 rounded-lg p-4">
        <p className="text-bb-slate-700">No sales data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-bb-charcoal-900 font-display">Sales Activity</h2>
          <p className="text-sm text-bb-slate-700">Patrick & Chris</p>
        </div>
        <span className="text-sm text-bb-slate-700 bg-bb-slate-100 px-2 py-1 rounded font-medium">
          Updated {new Date(data.lastUpdated).toLocaleTimeString()}
        </span>
      </div>

      {/* Primary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard
          label="Dials Today"
          value={data.dialsToday}
          target={data.dialsDailyTarget}
          format="number"
        />
        <KPICard
          label="Dials This Week"
          value={data.dialsThisWeek}
          target={data.dialsWeeklyTarget}
          format="number"
        />
        <KPICard
          label="Conversations"
          value={data.conversationsThisWeek}
          target={data.conversationsTarget}
          format="number"
        />
        <KPICard
          label="New Customers (MTD)"
          value={data.newCustomersMTD}
          target={data.newCustomersTarget}
          format="number"
        />
        <KPICard
          label="Qualified Prospects"
          value={data.qualifiedProspects}
          target={data.qualifiedTarget}
          format="number"
        />
      </div>

      {/* Pipeline and Email Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* Pipeline Funnel - Takes 2 columns */}
        <div className="lg:col-span-2 flex">
          <FunnelChart
            stages={mergePipelineStages(data.pipelineByStage)}
          />
        </div>

        {/* Email Stats */}
        <div className="space-y-4">
          <StatCard
            label="Pipeline Value"
            value={data.pipelineValue}
            format="currency"
            status="neutral"
            subtitle="Total open opportunities"
          />
          <StatCard
            label="Emails Sent"
            value={data.emailsSent}
            format="number"
            status="neutral"
            subtitle="Via Instantly.ai campaigns"
          />
          <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-4">
            <div className="text-xs font-semibold text-bb-slate-700 uppercase tracking-wide mb-2">
              Email Reply Rate
            </div>
            <GaugeChart
              value={data.emailReplyRate}
              target={data.replyRateTarget}
              label=""
              format="percent"
              size="sm"
            />
            <div className="text-center mt-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                data.emailReplyRate >= data.replyRateTarget
                  ? 'bg-bb-forest-100 text-bb-forest-800'
                  : 'bg-bb-amber-100 text-bb-amber-900'
              }`}>
                Target: {data.replyRateTarget}%+
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-4">
            <div className="text-xs font-semibold text-bb-slate-700 uppercase tracking-wide mb-2">
              Quote-to-Close Rate
            </div>
            <GaugeChart
              value={data.quoteToCloseRate}
              target={data.quoteToCloseTarget}
              label=""
              format="percent"
              size="sm"
            />
            <div className="text-center mt-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                data.quoteToCloseRate >= data.quoteToCloseTarget
                  ? 'bg-bb-forest-100 text-bb-forest-800'
                  : 'bg-bb-amber-100 text-bb-amber-900'
              }`}>
                Target: {data.quoteToCloseTarget}%+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
