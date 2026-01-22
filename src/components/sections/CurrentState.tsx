import Section from '../content/Section'
import Card from '../content/Card'
import MetricCard from '../content/MetricCard'
import Table from '../content/Table'
import Callout from '../content/Callout'
import { overallPerformance, januarySnapshot, topCustomers, highMarginLanes, destructiveLanes } from '../../data/currentState'

export default function CurrentState() {
  return (
    <Section title="Current State Analysis">
      <Callout variant="info" title="Data Foundation">
        <p>
          This section presents what we actually know from 880 loads of historical data in Alvys, covering May 2024 through January 2026. Every number here comes from real transactions.
        </p>
      </Callout>

      <Card title="Overall Performance">
        <p className="text-sm text-bb-dark-gray mb-md">Metric data from 774 loads with complete margin data:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mb-md">
          <MetricCard label="Total Gross Margin" value={`$${(overallPerformance.totalGrossMargin).toLocaleString()}`} />
          <MetricCard label="Loads Analyzed" value={overallPerformance.loadsAnalyzed} highlight />
          <MetricCard label="Average Margin/Load" value={`$${overallPerformance.avgMarginPerLoad}`} />
          <MetricCard label="Margin %age" value={`${overallPerformance.avgMarginPercentage}%`} />
          <MetricCard label="Current Monthly Run Rate" value={`${overallPerformance.currentMonthlyRunRate} loads`} />
          <MetricCard label="Est. Monthly Profit" value={`$${(overallPerformance.currentMonthlyProfit).toLocaleString()}`} highlight />
        </div>
        <p className="text-sm text-bb-dark-gray italic">
          These numbers represent a real business with real customers paying real money. The foundation is solid—we're not trying to prove the model works. We're trying to scale it.
        </p>
      </Card>

      <Card title="January 2026 Snapshot">
        <p className="text-sm text-bb-dark-gray mb-md">January represents our most recent complete month and shows the current operational baseline:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-md mb-md">
          <MetricCard label="Total Loads" value={januarySnapshot.totalLoads} highlight />
          <MetricCard label="Revenue" value={`$${(januarySnapshot.revenue).toLocaleString()}`} />
          <MetricCard label="Gross Margin" value={`$${(januarySnapshot.grossMargin).toLocaleString()}`} />
          <MetricCard label="Margin/Load" value={`$${januarySnapshot.marginPerLoad}`} />
          <MetricCard label="Active Customers" value={januarySnapshot.activeCustomers} />
        </div>
        <Callout variant="success" title="Positive Trend">
          January's higher margin per load ($238 vs. $208 average) suggests we're getting better at pricing or selecting loads. This is worth monitoring—can we sustain $230+ margins at scale?
        </Callout>
      </Card>

      <Card title="Customer Profitability Analysis">
        <p className="text-sm text-bb-dark-gray mb-md font-semibold">Top Performing External Customers (by margin/load)</p>
        <Table
          headers={['Customer', 'Loads', 'Total Margin', 'Avg Margin/Load', 'Assessment']}
          rows={topCustomers.map(c => [c.name, c.loads, `$${c.totalMargin.toLocaleString()}`, `$${c.avgMargin}`, c.assessment])}
        />
        <p className="text-sm text-bb-dark-gray mt-md mb-md">
          <strong>What makes a good customer?</strong> High margin per load ($200+), consistent volume, reasonable service requirements, and payment reliability. Vibra Screw is the template—find more like them.
        </p>
      </Card>

      <Card title="Accounts Removed or Under Review">
        <p className="text-sm text-bb-dark-gray mb-md">These accounts are no longer active or deprioritized:</p>
        <Table
          headers={['Customer', 'Historical Loads', 'Avg Margin', 'Status', 'Reason']}
          rows={[
            ['DH Companies', 21, '$355', 'TERMINATED', 'Litigation'],
            ['Dessin Haus', 9, '$359', 'TERMINATED', 'Litigation'],
            ['Aetna', 15, '$200', 'TERMINATED', 'Litigation'],
            ['BlackBridge Recycling', 37, '$87', 'INTERNAL', 'Deprioritize—margin too low'],
          ]}
        />
        <Callout variant="critical" title="Concentration Risk">
          With terminated accounts removed, customer concentration is acute. Clearway and Frontier Door represent a large share of margin. If either relationship weakens, we're in trouble. The 2026 strategy must aggressively prioritize diversification—no single customer should exceed 15% of margin by year end.
        </Callout>
      </Card>

      <Card title="High-Margin Lanes (Expand)">
        <p className="text-sm text-bb-dark-gray mb-md">These lanes show strong margins and represent growth opportunities:</p>
        <Table
          headers={['Lane', 'Loads', 'Avg Margin', 'Opportunity']}
          rows={highMarginLanes.map(l => [l.lane, l.loads, `$${l.avgMargin}`, l.opportunity])}
        />
      </Card>

      <Card title="Margin-Destroying Lanes (Avoid or Reprice)">
        <p className="text-sm text-bb-dark-gray mb-md">These lanes consistently underperform and should be repriced or avoided:</p>
        <Table
          headers={['Lane', 'Loads', 'Avg Margin', 'Action']}
          rows={destructiveLanes.map(l => [l.lane, l.loads, `$${l.avgMargin}`, l.action])}
        />
        <Callout variant="warning" title="Lane Rule">
          <strong>Do not book WA/OR → Vernon CA lanes</strong> unless the customer agrees to a rate increase of at least $250. These lanes destroy margin and should be avoided or repriced. When a customer asks for these lanes, quote $250+ higher than market.
        </Callout>
      </Card>
    </Section>
  )
}
