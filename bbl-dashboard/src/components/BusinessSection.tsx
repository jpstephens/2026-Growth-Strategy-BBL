'use client';

import { BusinessMetrics } from '@/types/metrics';
import { AreaProgressChart } from './charts/AreaChart';
import { DonutChart } from './charts/DonutChart';
import { KPICard } from './charts/KPICard';
import { StatCard } from './charts/StatCard';

interface BusinessSectionProps {
  data: BusinessMetrics | null;
  loading?: boolean;
  error?: string;
}

export function BusinessSection({ data, loading, error }: BusinessSectionProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-bb-slate-200 rounded w-48 animate-pulse" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-48 bg-bb-slate-100 rounded-lg animate-pulse" />
          <div className="h-48 bg-bb-slate-100 rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-bb-crimson-50 border border-bb-crimson-300 rounded-lg p-4">
        <h3 className="text-bb-crimson-900 font-semibold">Business Data Error</h3>
        <p className="text-bb-crimson-800 text-sm">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-bb-slate-100 border border-bb-slate-300 rounded-lg p-4">
        <p className="text-bb-slate-700">No business data available</p>
      </div>
    );
  }

  const hasConcentrationIssue = data.customerConcentration.some(c => c.percent > data.maxConcentrationTarget);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-bb-charcoal-900 font-display">Business Health</h2>
          <p className="text-sm text-bb-slate-700">Jason</p>
        </div>
        <span className="text-sm text-bb-slate-700 bg-bb-slate-100 px-2 py-1 rounded font-medium">
          Updated {new Date(data.lastUpdated).toLocaleTimeString()}
        </span>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Gross Margin Trend */}
        <AreaProgressChart
          value={data.monthlyGrossMargin}
          target={data.monthlyGrossMarginTarget}
          label="Monthly Gross Margin"
          format="currency"
        />

        {/* Customer Concentration */}
        <DonutChart
          data={data.customerConcentration}
          maxConcentration={data.maxConcentrationTarget}
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KPICard
          label="Active Customers"
          value={data.activeCustomers}
          target={data.activeCustomersTarget}
          format="number"
        />
        <KPICard
          label="Avg Loads/Customer"
          value={data.avgLoadsPerCustomer}
          target={data.avgLoadsPerCustomerTarget}
          format="number"
        />
        <StatCard
          label="Top Customer"
          value={data.customerConcentration[0]?.customer || 'N/A'}
          subtitle={`${data.customerConcentration[0]?.percent.toFixed(1) || 0}% of revenue`}
          status={
            (data.customerConcentration[0]?.percent || 0) > data.maxConcentrationTarget
              ? 'danger'
              : 'neutral'
          }
        />
        <StatCard
          label="Concentration Risk"
          value={hasConcentrationIssue ? 'High' : 'Low'}
          subtitle={hasConcentrationIssue ? 'Customer(s) exceed 12%' : 'All customers below 12%'}
          status={hasConcentrationIssue ? 'danger' : 'success'}
        />
        <StatCard
          label="Churn Rate"
          value={data.churnRate}
          format="percent"
          subtitle={`Target: <${data.churnRateTarget}% annual`}
          status={
            data.churnRate <= data.churnRateTarget * 0.75
              ? 'success'
              : data.churnRate <= data.churnRateTarget
              ? 'warning'
              : 'danger'
          }
        />
      </div>

      {/* Top Customers Table */}
      {data.customerConcentration.length > 0 && (
        <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5">
          <h3 className="text-base font-semibold text-bb-charcoal-900 mb-4">Top Customers by Revenue</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-bb-slate-200">
                  <th className="pb-3 font-semibold text-bb-slate-700">Rank</th>
                  <th className="pb-3 font-semibold text-bb-slate-700">Customer</th>
                  <th className="pb-3 font-semibold text-bb-slate-700 text-right">Revenue</th>
                  <th className="pb-3 font-semibold text-bb-slate-700 text-right">% of Total</th>
                  <th className="pb-3 font-semibold text-bb-slate-700 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.customerConcentration.slice(0, 5).map((customer, index) => {
                  const isOverLimit = customer.percent > data.maxConcentrationTarget;
                  return (
                    <tr key={index} className="border-b border-bb-slate-100 hover:bg-bb-slate-50">
                      <td className="py-3 text-bb-slate-600 font-semibold">#{index + 1}</td>
                      <td className="py-3 text-bb-charcoal-900 font-medium">{customer.customer}</td>
                      <td className="py-3 text-right font-mono text-bb-slate-800">
                        ${customer.revenue.toLocaleString()}
                      </td>
                      <td className={`py-3 text-right font-mono font-semibold ${
                        isOverLimit ? 'text-bb-crimson-800' : 'text-bb-charcoal-900'
                      }`}>
                        {customer.percent.toFixed(1)}%
                      </td>
                      <td className="py-3 text-center">
                        {isOverLimit ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-bb-crimson-100 text-bb-crimson-800">
                            Over limit
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-bb-forest-100 text-bb-forest-800">
                            OK
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
