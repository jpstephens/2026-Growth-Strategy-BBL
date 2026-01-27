'use client';

import { OpsMetrics, TARGETS } from '@/types/metrics';
import { GaugeChart } from './charts/GaugeChart';
import { StatCard } from './charts/StatCard';
import { KPICard } from './charts/KPICard';

interface OpsSectionProps {
  data: OpsMetrics | null;
  loading?: boolean;
  error?: string;
}

export function OpsSection({ data, loading, error }: OpsSectionProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-bb-slate-200 rounded w-48 animate-pulse" />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-40 bg-bb-slate-100 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bb-crimson-50 border border-bb-crimson-300 rounded-lg p-4">
        <h3 className="text-bb-crimson-900 font-semibold">Operations Data Error</h3>
        <p className="text-bb-crimson-800 text-sm">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-bb-slate-100 border border-bb-slate-300 rounded-lg p-4">
        <p className="text-bb-slate-700">No operations data available</p>
      </div>
    );
  }

  const quarter = Math.ceil((new Date().getMonth() + 1) / 3);
  const directCarrierTarget = quarter <= 2 ? TARGETS.directCarrierQ2 : TARGETS.directCarrierQ4;

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-bb-charcoal-900 font-display">Operations</h2>
          <p className="text-sm text-bb-slate-700">David & Vin</p>
        </div>
        <span className="text-sm text-bb-slate-700 bg-bb-slate-100 px-2 py-1 rounded font-medium">
          Updated {new Date(data.lastUpdated).toLocaleTimeString()}
        </span>
      </div>

      {/* Service Quality Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5">
          <h4 className="text-sm font-semibold text-bb-slate-800 text-center mb-2">On-Time Pickup</h4>
          <GaugeChart
            value={data.onTimePickup}
            target={TARGETS.onTimePickup}
            label=""
            format="percent"
            size="md"
          />
          <div className="text-center mt-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              data.onTimePickup >= TARGETS.onTimePickup
                ? 'bg-bb-forest-100 text-bb-forest-800'
                : 'bg-bb-crimson-100 text-bb-crimson-800'
            }`}>
              Target: {TARGETS.onTimePickup}%+
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5">
          <h4 className="text-sm font-semibold text-bb-slate-800 text-center mb-2">On-Time Delivery</h4>
          <GaugeChart
            value={data.onTimeDelivery}
            target={TARGETS.onTimeDelivery}
            label=""
            format="percent"
            size="md"
          />
          <div className="text-center mt-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              data.onTimeDelivery >= TARGETS.onTimeDelivery
                ? 'bg-bb-forest-100 text-bb-forest-800'
                : 'bg-bb-crimson-100 text-bb-crimson-800'
            }`}>
              Target: {TARGETS.onTimeDelivery}%+
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5">
          <h4 className="text-sm font-semibold text-bb-slate-800 text-center mb-2">Direct Carrier % (Q{quarter})</h4>
          <GaugeChart
            value={data.directCarrierPercent}
            target={directCarrierTarget}
            label=""
            format="percent"
            size="md"
          />
          <div className="text-center mt-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              data.directCarrierPercent >= directCarrierTarget
                ? 'bg-bb-forest-100 text-bb-forest-800'
                : 'bg-bb-amber-100 text-bb-amber-900'
            }`}>
              Target: {directCarrierTarget}%+
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KPICard
          label="Avg Margin/Load"
          value={data.avgMarginPerLoad}
          target={TARGETS.avgMarginPerLoad}
          format="currency"
          showSparkline={true}
        />
        <StatCard
          label="Loads This Month"
          value={data.loadsThisMonth}
          format="number"
          status="neutral"
        />
        <StatCard
          label="Repeat Carriers"
          value={`${data.repeatCarrierRate.toFixed(0)}%`}
          status={data.repeatCarrierRate >= 25 ? 'success' : data.repeatCarrierRate >= 15 ? 'warning' : 'neutral'}
          subtitle={`${data.repeatCarriers} of ${data.totalCarriersUsed} carriers`}
        />
        <StatCard
          label="Open Issues"
          value={data.openIssues}
          format="number"
          status={data.openIssues === 0 ? 'success' : data.openIssues <= 2 ? 'warning' : 'danger'}
          subtitle={data.openIssues === 0 ? 'All clear!' : 'Requires attention'}
        />
        <StatCard
          label="Service Score"
          value={((data.onTimePickup + data.onTimeDelivery) / 2).toFixed(1)}
          format="percent"
          status={
            (data.onTimePickup + data.onTimeDelivery) / 2 >= 95
              ? 'success'
              : (data.onTimePickup + data.onTimeDelivery) / 2 >= 90
              ? 'warning'
              : 'danger'
          }
          subtitle="Avg pickup + delivery"
        />
      </div>
    </div>
  );
}
