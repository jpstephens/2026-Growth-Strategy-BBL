import Section from '../content/Section'
import Card from '../content/Card'
import Callout from '../content/Callout'
import ResponsibilityMatrix from '../content/ResponsibilityMatrix'
import Table from '../content/Table'

export default function TheProblem() {
  return (
    <Section title="Why the Current Approach Won't Work">
      <Callout variant="critical" title="The Fundamental Problem">
        <p>
          BlackBridge does not have a sales problem. It does not have a market problem. It has a role clarity problem that makes sustained growth impossible.
        </p>
        <p className="mt-sm">
          <strong>Patrick is currently responsible for both sales AND operations.</strong> This is a structural impossibility.
        </p>
      </Callout>

      <Card title="The Incompatibility">
        <div className="space-y-md">
          <div>
            <h4 className="font-semibold text-bb-black mb-xs">Sales vs. Operations</h4>
            <p className="text-sm text-bb-dark-gray mb-sm">
              <strong className="text-bb-black">Operations</strong> is reactive—phones ring, problems happen, fires need putting out. It rewards responsiveness and firefighting.
            </p>
            <p className="text-sm text-bb-dark-gray">
              <strong className="text-bb-black">Sales</strong> is proactive—it requires protected time, mental focus, and consistency. It rewards persistence and follow-through.
            </p>
          </div>
          <div>
            <p className="text-sm text-bb-dark-gray italic">
              When both responsibilities live in one person, operations always wins. The ringing phone beats the prospect list every time.
            </p>
          </div>
        </div>
      </Card>

      <Card title="The Math That Proves It">
        <p className="text-sm text-bb-dark-gray mb-md">Patrick's current activity levels make sustained growth impossible:</p>
        <Table
          headers={['Metric', 'Current Value', 'Target Value']}
          rows={[
            ['Calls per day', '0-10', '40+'],
            ['Calls per week', '0-50', '200+'],
            ['Connect rate', '15-20%', 'Consistent'],
            ['Conversations per week', '0-10', '35-40'],
            ['Qualified prospects per month', '2-4', '8-10'],
            ['New customers per month', '1 (maybe)', '4-6'],
          ]}
        />
        <div className="mt-md p-md bg-error/5 rounded-md border border-error/20">
          <p className="text-sm text-bb-dark-gray">
            At 1 new customer per month, reaching 65+ active customers takes 5+ years. Even at 2 customers per month, we're looking at 3 years to reach target. This pace does not get us to $100K monthly profit by December 2026.
          </p>
          <p className="text-sm text-bb-dark-gray mt-sm font-semibold">
            This is not a motivation problem. This is not a skill problem. <strong>This is a math problem.</strong> The structure prevents success.
          </p>
        </div>
      </Card>

      <Card title="What Has to Change">
        <ol className="space-y-md text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">1.</span>
            <span>
              <strong>Patrick must be freed from operations entirely.</strong> David takes 100% of load execution, customer service, and carrier management for existing accounts. No exceptions during calling blocks.
            </span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">2.</span>
            <span>
              <strong>Sales activity must be measured and enforced.</strong> 200+ dials per week is the minimum. This is logged in HubSpot, reviewed daily by Chris, and non-negotiable.
            </span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">3.</span>
            <span>
              <strong>Cold email becomes a force multiplier.</strong> Instantly.ai warms prospects before Patrick calls, turning cold calls into warm conversations.
            </span>
          </li>
        </ol>
      </Card>

      <Card title="Responsibility Matrix: Who Handles What">
        <p className="text-sm text-bb-dark-gray mb-md">
          To eliminate confusion, here's exactly who handles what:
        </p>
        <ResponsibilityMatrix
          rows={[
            {
              situation: 'Customer calls about load status',
              primaryOwner: 'David',
              escalationPath: 'Vin if unresolved >2 hrs',
            },
            {
              situation: 'Carrier is late or no-shows',
              primaryOwner: 'David',
              escalationPath: 'Vin for rebooking decisions',
            },
            {
              situation: 'New prospect responds to email',
              primaryOwner: 'Patrick',
              escalationPath: 'Chris for deal support',
            },
            {
              situation: 'Customer wants rate quote (new prospect)',
              primaryOwner: 'Patrick',
              escalationPath: 'Chris if pricing dispute',
            },
            {
              situation: 'Customer wants rate quote (existing)',
              primaryOwner: 'David',
              escalationPath: 'Chris if pricing dispute',
            },
            {
              situation: 'Customer complaint about service',
              primaryOwner: 'David',
              escalationPath: 'Vin, then Chris if at risk',
            },
            {
              situation: 'Carrier needs payment',
              primaryOwner: 'David',
              escalationPath: 'Vin for approval',
            },
            {
              situation: 'Cargo damage or claim',
              primaryOwner: 'David',
              escalationPath: 'Vin, then Jason for major',
            },
          ]}
        />
        <Callout variant="info" title="The Rule">
          If it's about an existing load or customer operations: David owns it. If it's about winning new business: Patrick owns it. There is no middle ground during protected calling time.
        </Callout>
      </Card>
    </Section>
  )
}
