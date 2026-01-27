'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { SalesSection } from '@/components/SalesSection';
import { OpsSection } from '@/components/OpsSection';
import { BusinessSection } from '@/components/BusinessSection';
import { DashboardData } from '@/types/metrics';

type ViewRole = 'all' | 'sales' | 'ops' | 'business';

interface DashboardResponse {
  success: boolean;
  data: {
    sales: DashboardData['sales'] | null;
    ops: DashboardData['ops'] | null;
    business: DashboardData['business'] | null;
    lastUpdated: string;
  };
  errors?: string[];
  mock?: boolean;
}

async function fetchDashboardData(): Promise<DashboardResponse> {
  const response = await fetch('/api/dashboard');
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  return response.json();
}

export default function Dashboard() {
  const [viewRole, setViewRole] = useState<ViewRole>('all');

  const { data, isLoading, error, refetch, dataUpdatedAt } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    refetchInterval: 60 * 1000, // Refetch every minute
  });

  const roleViews: { value: ViewRole; label: string; owner: string }[] = [
    { value: 'all', label: 'All Metrics', owner: '' },
    { value: 'sales', label: 'Sales', owner: 'Patrick/Chris' },
    { value: 'ops', label: 'Operations', owner: 'David/Vin' },
    { value: 'business', label: 'Business Health', owner: 'Jason' },
  ];

  return (
    <div className="min-h-screen bg-bb-slate-50">
      {/* Header */}
      <header className="bg-bb-charcoal-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-display">BBL Dashboard</h1>
              <p className="text-sm text-bb-slate-300">BlackBridge Logistics</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Last Updated */}
              <div className="text-sm text-bb-slate-300">
                {dataUpdatedAt ? (
                  <>Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}</>
                ) : (
                  'Loading...'
                )}
              </div>
              {/* Refresh Button */}
              <button
                onClick={() => refetch()}
                disabled={isLoading}
                className="px-3 py-1.5 bg-bb-charcoal-700 hover:bg-bb-charcoal-600 rounded-md text-sm font-medium transition-colors disabled:opacity-50 text-white"
              >
                {isLoading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* View Selector */}
          <div className="mt-4 flex gap-2">
            {roleViews.map((role) => (
              <button
                key={role.value}
                onClick={() => setViewRole(role.value)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  viewRole === role.value
                    ? 'bg-bb-steel-500 text-white'
                    : 'bg-bb-charcoal-700 text-bb-slate-200 hover:bg-bb-charcoal-600'
                }`}
              >
                {role.label}
                {role.owner && (
                  <span className="ml-1 text-xs font-medium opacity-80">({role.owner})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mock Data Banner */}
        {data?.mock && (
          <div className="mb-6 bg-bb-steel-50 border border-bb-steel-300 rounded-lg p-4">
            <h3 className="text-bb-steel-900 font-semibold">Demo Mode - Using Mock Data</h3>
            <p className="text-bb-steel-800 text-sm mt-1">
              No API credentials configured. Showing sample data for preview purposes.
              <br />
              To connect real data, add your API keys to <code className="bg-bb-steel-100 px-1 rounded font-mono text-xs">.env.local</code>
            </p>
          </div>
        )}

        {/* Error Banner */}
        {data?.errors && data.errors.length > 0 && (
          <div className="mb-6 bg-bb-amber-50 border border-bb-amber-300 rounded-lg p-4">
            <h3 className="text-bb-amber-900 font-semibold">Some data sources returned errors</h3>
            <ul className="text-bb-amber-800 text-sm mt-1 list-disc list-inside">
              {data.errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Global Error */}
        {error && (
          <div className="mb-6 bg-bb-crimson-50 border border-bb-crimson-300 rounded-lg p-4">
            <h3 className="text-bb-crimson-900 font-semibold">Failed to load dashboard</h3>
            <p className="text-bb-crimson-800 text-sm">{error.message}</p>
            <button
              onClick={() => refetch()}
              className="mt-2 px-3 py-1 bg-bb-crimson-100 hover:bg-bb-crimson-200 text-bb-crimson-900 rounded text-sm font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {/* Dashboard Sections */}
        <div className="space-y-8">
          {/* Sales Section */}
          {(viewRole === 'all' || viewRole === 'sales') && (
            <SalesSection
              data={data?.data.sales || null}
              loading={isLoading && !data}
              error={data?.errors?.find(e => e.startsWith('Sales:'))}
            />
          )}

          {/* Operations Section */}
          {(viewRole === 'all' || viewRole === 'ops') && (
            <OpsSection
              data={data?.data.ops || null}
              loading={isLoading && !data}
              error={data?.errors?.find(e => e.startsWith('Ops:'))}
            />
          )}

          {/* Business Health Section */}
          {(viewRole === 'all' || viewRole === 'business') && (
            <BusinessSection
              data={data?.data.business || null}
              loading={isLoading && !data}
              error={data?.errors?.find(e => e.startsWith('Business:'))}
            />
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 py-4 border-t border-bb-slate-300 text-center text-sm text-bb-slate-700">
          <p>BBL Dashboard v1.0 | Data refreshes every 60 seconds</p>
          <p className="mt-1">
            HubSpot + Instantly.ai + Alvys Integration
          </p>
        </footer>
      </main>
    </div>
  );
}
