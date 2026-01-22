import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import { dealStages, requiredProperties, lostDealReasons } from '../../data/pipelineConfig'

export default function Pipeline() {
  return (
    <Section title="HubSpot Pipeline Configuration">
      <Callout variant="info" title="Pipeline Purpose">
        Every prospect moves through defined stages. Each stage has clear entry criteria, exit actions, and time limits. Stage movement requires evidence logged in HubSpot—no phantom progress.
      </Callout>

      <Card title="Deal Stages">
        <p className="text-sm text-bb-dark-gray mb-md">
          Deals stuck past their max days trigger review in weekly sales meeting.
        </p>
        <Table
          headers={['Stage', 'Definition', 'Exit Criteria', 'Max Days']}
          rows={dealStages.map(s => [
            s.stage,
            s.definition,
            s.exitCriteria,
            s.maxDays ? `${s.maxDays} days` : 'Ongoing',
          ])}
        />
      </Card>

      <Card title="Required Contact Properties">
        <p className="text-sm text-bb-dark-gray mb-md">
          These fields ensure data consistency and enable effective pipeline management:
        </p>
        <Table
          headers={['Property', 'Type', 'Purpose']}
          rows={requiredProperties.map(p => [p.property, p.type, p.purpose])}
        />
      </Card>

      <Card title="Lost Deal Tracking">
        <p className="text-sm text-bb-dark-gray mb-md">
          When deals are lost, capture why. This informs strategy refinement:
        </p>
        <Table
          headers={['Lost Reason', 'What It Tells Us']}
          rows={lostDealReasons.map(r => [r.reason, r.whatItTells])}
        />
        <Callout variant="success" title="Why This Matters">
          Lost deal analysis reveals whether issues are pricing, positioning, targeting, or execution. This data drives weekly strategy discussions with Chris.
        </Callout>
      </Card>
    </Section>
  )
}
