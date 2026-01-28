import Slide from '../layout/Slide'
import SlideGrid from '../layout/SlideGrid'
import StatCard from '../content/StatCard'
import { overallPerformance, januarySnapshot } from '../../data/currentState'

export default function Slide02_CurrentState() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Current State</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-2xl text-bb-slate-700 mb-2xl text-center">Real data from 819 loads. Solid foundation.</p>

        <SlideGrid columns={3} gap="lg">
          <StatCard
            label="Monthly Profit"
            value={`$${overallPerformance.currentMonthlyProfit.toLocaleString()}`}
            highlight
            size="2xl"
          />
          <StatCard
            label="Active Customers"
            value={januarySnapshot.activeCustomers}
            size="2xl"
          />
          <StatCard
            label="Monthly Run Rate"
            value={overallPerformance.currentMonthlyRunRate}
            unit="loads"
            size="2xl"
          />
        </SlideGrid>

        <SlideGrid columns={3} gap="lg">
          <StatCard
            label="Avg Margin/Load"
            value={`$${overallPerformance.avgMarginPerLoad}`}
            highlight
            size="xl"
          />
          <StatCard
            label="Margin %"
            value={`${overallPerformance.avgMarginPercentage}%`}
            size="xl"
          />
          <StatCard
            label="Total Loads (819)"
            value={`$${(overallPerformance.totalGrossMargin).toLocaleString()}`}
            unit="margin"
            size="xl"
          />
        </SlideGrid>
      </div>
    </Slide>
  )
}
