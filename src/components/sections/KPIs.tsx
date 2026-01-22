import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import { salesKPIs, operationsKPIs, businessKPIs, dashboardImplementation } from '../../data/kpis'

export default function KPIs() {
  return (
    <Section title="KPIs and Dashboard">
      <Callout variant="info" title="Dashboard Purpose">
        <p>
          The dashboard exists so every meeting starts with data, not opinions. When something is off-track, we see it immediately. When we're winning, we can celebrate with evidence. It drives accountability and enables faster, better decisions.
        </p>
      </Callout>

      <Card title="Sales KPIs">
        <p className="text-sm text-bb-dark-gray mb-md">
          These metrics drive weekly sales reviews and trigger adjustments to strategy or resources:
        </p>
        <Table
          headers={['Metric', 'Target', 'Frequency', 'How to Measure', 'Owner']}
          rows={salesKPIs.map(k => [k.metric, k.target.toString(), k.frequency, k.how, k.owner])}
        />
      </Card>

      <Card title="Operations KPIs">
        <p className="text-sm text-bb-dark-gray mb-md">
          These metrics track service quality, carrier network development, and operational capacity:
        </p>
        <Table
          headers={['Metric', 'Target', 'Frequency', 'How to Measure', 'Owner']}
          rows={operationsKPIs.map(k => [k.metric, k.target.toString(), k.frequency, k.how, k.owner])}
        />
      </Card>

      <Card title="Business KPIs">
        <p className="text-sm text-bb-dark-gray mb-md">
          These are the metrics that ultimately matter—revenue growth, profitability, and customer health:
        </p>
        <Table
          headers={['Metric', 'Target', 'Frequency', 'How to Measure', 'Owner']}
          rows={businessKPIs.map(k => [k.metric, k.target.toString(), k.frequency, k.how, k.owner])}
        />
      </Card>

      <Card title="Dashboard Implementation Options">
        <p className="text-sm text-bb-dark-gray mb-md">
          Choose the right tool based on complexity, budget, and maintenance capacity:
        </p>
        <Table
          headers={['Option', 'Cost', 'Pros', 'Cons']}
          rows={dashboardImplementation.map(d => [d.option, d.cost, d.pros, d.cons])}
        />
        <Callout variant="success" title="Recommendation">
          <p>
            Start with HubSpot dashboards for sales metrics + a Google Sheet for ops metrics. Consolidate into Databox or custom solution when the business justifies the investment.
          </p>
        </Callout>
      </Card>

      <Card title="Weekly Reporting Cadence">
        <div className="space-y-sm text-sm text-bb-dark-gray">
          <p><strong className="text-bb-black">Monday Morning:</strong> Chris pulls sales KPIs (dials, conversations, qualified deals, pipeline value)</p>
          <p><strong className="text-bb-black">Tuesday 9am:</strong> Sales Review meeting uses updated dashboard</p>
          <p><strong className="text-bb-black">Wednesday 10am:</strong> Vin/David pull ops KPIs (loads, on-time %, margin, issues)</p>
          <p><strong className="text-bb-black">Wednesday 2pm:</strong> Company Review meeting uses full dashboard</p>
          <p><strong className="text-bb-black">Friday EOD:</strong> Weekly email summary to ownership with % to target for all KPIs</p>
        </div>
      </Card>

      <Card title="Success Criteria for Dashboard">
        <ul className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Every metric updates automatically or with one manual step (no manual data entry across multiple systems)</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Dashboard loads in {'<'}5 seconds—no waiting</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Accessible to entire team on any device</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Shows data vs. target clearly (red/yellow/green status)</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Provides 30, 60, 90-day trends—not just current</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Enables filtering by person/team/time period</span>
          </li>
        </ul>
      </Card>
    </Section>
  )
}
