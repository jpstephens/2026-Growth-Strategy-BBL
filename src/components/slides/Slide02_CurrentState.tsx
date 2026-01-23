import Slide from '../layout/Slide'
import SlideGrid from '../layout/SlideGrid'
import StatCard from '../content/StatCard'
import { overallPerformance, januarySnapshot } from '../../data/currentState'

export default function Slide02_CurrentState() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-2xl text-center">Current State</h2>
        <p className="text-2xl text-bb-dark-gray mb-2xl text-center">Real data from 880 loads. Solid foundation.</p>

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
            label="Total Loads (774)"
            value={`$${(overallPerformance.totalGrossMargin).toLocaleString()}`}
            unit="margin"
            size="xl"
          />
        </SlideGrid>
      </div>
    </Slide>
  )
}
