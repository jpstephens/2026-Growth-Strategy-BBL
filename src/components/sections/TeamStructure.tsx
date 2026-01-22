import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import { currentTeam, accountability, hiringStrategy, hireCosts, handoffProtocol } from '../../data/teamStructure'

export default function TeamStructure() {
  return (
    <Section title="The Team Structure">
      <Card title="Current Team and Responsibilities">
        <Table
          headers={['Person', 'Role', 'Primary Responsibilities', 'Location']}
          rows={currentTeam.map(m => [m.name, m.role, m.responsibilities, m.location])}
        />
      </Card>

      <Card title="Clear Accountability">
        <p className="text-sm text-bb-dark-gray mb-md">
          <strong>Each person owns specific outcomes.</strong> There's no shared accountability—one person is responsible, others support.
        </p>
        <Table
          headers={['Outcome', 'Owner', 'Support']}
          rows={accountability.map(a => [a.outcome, a.owner, a.support])}
        />
      </Card>

      <Card title="The Handoff Protocol">
        <p className="text-sm text-bb-dark-gray mb-md">
          When Patrick closes a new customer, the handoff to David must be clean:
        </p>
        <ol className="space-y-sm text-sm text-bb-dark-gray mb-md">
          {handoffProtocol.map(item => (
            <li key={item.step} className="flex gap-md">
              <span className="font-bold text-bb-black flex-shrink-0">{item.step}.</span>
              <div>
                <span className="font-medium text-bb-black">{item.action}</span>
                <p className="text-xs text-bb-dark-gray italic mt-xs">{item.reason}</p>
              </div>
            </li>
          ))}
        </ol>
        <Callout variant="info" title="Why This Matters for Margin">
          <ul className="space-y-xs text-sm text-bb-dark-gray">
            <li><strong>Margin Optimization:</strong> Patrick's time is expensive—every hour on ops is an hour not closing deals worth $15K+ in annual margin.</li>
            <li><strong>Clean Experience:</strong> Customer has ONE ops contact, not handoff confusion. They always know who to call.</li>
            <li><strong>Speed:</strong> David handles volume without waiting for Patrick's availability.</li>
            <li><strong>Fewer Touches:</strong> One person owns it = fewer gaps = better service = repeat business.</li>
          </ul>
        </Callout>
      </Card>

      <Card title="Can Patrick Alone Hit $100K?">
        <div className="mb-md p-md bg-error/5 rounded-md border border-error/20">
          <p className="text-sm text-bb-dark-gray font-semibold mb-sm">
            Short answer: <strong>No.</strong>
          </p>
          <p className="text-sm text-bb-dark-gray">
            One sales rep doing 200 dials/week with good list quality and solid pitch can close 4-6 new customers per month. Let's be optimistic and say 5 per month sustained.
          </p>
        </div>
        <Table
          headers={['Scenario', 'New Customers/Month', 'Months', 'Total Acquired', 'After 15% Churn']}
          rows={[
            ['Patrick alone @ 5/month', '5', '12', '60', '~51 active'],
            ['Target needed', '—', '—', '—', '65-70 active'],
          ]}
        />
        <p className="text-sm text-bb-dark-gray mt-md">
          Patrick alone gets us close but not there—and that assumes perfect execution with zero bad months. We need margin for error and we need to exceed the target to account for unknowns.
        </p>
      </Card>

      <Card title="Hiring Strategy: Performance-Triggered">
        <Callout variant="info" title="The Principle">
          <strong>Hire based on proven performance, not projected revenue.</strong> Patrick must prove the system works before we replicate it. Each hire is triggered by demonstrated results, not hope.
        </Callout>
        <div className="space-y-md">
          {hiringStrategy.map((hire, idx) => (
            <div key={idx} className="p-md bg-bb-light-gray rounded-md border border-bb-border">
              <h4 className="font-semibold text-bb-black mb-sm">{hire.position}</h4>
              <div className="text-sm text-bb-dark-gray space-y-xs">
                <p><strong>Trigger:</strong> {hire.triggerMetric}</p>
                <p><strong>Proves:</strong> {hire.whatItProves}</p>
                <p><strong>Timeline:</strong> {hire.expectedTimeline}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Cost of New Hires">
        <p className="text-sm text-bb-dark-gray mb-md">What each hire costs and what they need to generate to break even:</p>
        <Table
          headers={['Role', 'Base Salary', 'Commission', 'Total Cost/Month', 'Break-Even']}
          rows={hireCosts.map(h => [
            h.role,
            `$${h.baseSalary.toLocaleString()}`,
            h.commission ? `~$${h.commission.toLocaleString()}` : '—',
            `$${h.totalMonth.toLocaleString()}`,
            h.breakEvenCustomers > 10 ? `${h.breakEvenCustomers} loads/month` : `${h.breakEvenCustomers} customers/month`,
          ])}
        />
        <Callout variant="success" title="The Math">
          <p>
            A sales rep costs roughly $6,000/month fully loaded. They need to close 3 customers per month to break even (each customer worth ~$2,000 in first-month margin). Target is 4-5, making them profitable within 60 days of ramping.
          </p>
        </Callout>
      </Card>
    </Section>
  )
}
