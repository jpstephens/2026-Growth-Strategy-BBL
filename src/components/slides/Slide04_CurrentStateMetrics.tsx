import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'
import { overallPerformance } from '../../data/currentState'

export default function Slide04_CurrentStateMetrics() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-sm">Current State: Metrics</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-600 mb-2xl text-center">880 loads analyzed. Real data from real transactions.</p>

        <MetricGrid
          metrics={[
            { label: 'Total Loads', value: overallPerformance.loadsAnalyzed, highlight: true, icon: '📦' },
            { label: 'Total Gross Margin', value: `$${(overallPerformance.totalGrossMargin / 1000).toFixed(1)}k`, highlight: false, icon: '💵' },
            { label: 'Avg Margin/Load', value: `$${overallPerformance.avgMarginPerLoad}`, highlight: true, icon: '📊' },
            { label: 'Margin %', value: `${overallPerformance.avgMarginPercentage}%`, highlight: false, icon: '📈' },
          ]}
          columns={2}
        />

        <Callout variant="info" title="What This Means">
          <p>
            We've analyzed 774 loads with complete margin data spanning May 2024 through January 2026. These metrics represent real, profitable operations with genuine customers paying real money. The 15.1% gross margin and $208 average margin per load demonstrate a viable unit economy.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
