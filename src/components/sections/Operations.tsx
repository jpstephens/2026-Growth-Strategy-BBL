import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import ResponsibilityMatrix from '../content/ResponsibilityMatrix'
import { successMetrics, priorityFramework, handoffWhoBooks, escalationPaths, carrierTiers } from '../../data/operations'

export default function Operations() {
  return (
    <Section title="Operations System">
      <Card title="David's Role and Success Definition">
        <p className="text-sm text-bb-dark-gray mb-md">
          <strong>David is the operational backbone of BlackBridge.</strong> Every load, carrier relationship, and customer update flows through him. When David succeeds, customers say "we never have to worry about our freight."
        </p>
        <p className="text-sm text-bb-dark-gray font-semibold mb-md">Success Metrics for David:</p>
        <Table
          headers={['Metric', 'Target', 'Why It Matters', 'How to Measure']}
          rows={successMetrics.map(m => [m.metric, m.target, m.whyMatters, m.howToMeasure])}
        />
      </Card>

      <Card title="Daily Workflow Priorities">
        <p className="text-sm text-bb-dark-gray mb-md">
          Operations is inherently reactive—fires come up and need immediate attention. This framework tells David where to focus when he has discretionary time:
        </p>
        {priorityFramework.map((pf, idx) => (
          <div key={idx} className="mb-md p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm flex gap-sm items-center">
              <span>{pf.icon}</span>
              <span>{pf.priority}</span>
              <span className="text-xs bg-bb-button text-bb-white px-md py-xs rounded">{pf.note}</span>
            </h4>
            <ul className="space-y-xs text-sm text-bb-dark-gray">
              {pf.items.map((item, i) => (
                <li key={i} className="flex gap-md">
                  <span className="flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Callout variant="info" title="Flexibility Principle">
          David needs flexibility to put out fires. The priority framework ensures that when he has discretionary time, he knows where to focus—but active loads always come first.
        </Callout>
      </Card>

      <Card title="Load Booking: The Handoff">
        <p className="text-sm text-bb-dark-gray mb-md">
          The handoff from sales to operations is where margin gets protected or destroyed. A clean handoff = fewer touches = better margin = better customer experience.
        </p>
        <h4 className="font-semibold text-bb-black mb-md text-sm">Who Books What</h4>
        <Table
          headers={['Scenario', 'Who Books', 'Why']}
          rows={handoffWhoBooks.map(h => [h.scenario, h.whoBooks, h.why])}
        />
        <h4 className="font-semibold text-bb-black mb-md mt-md text-sm">The Clean Handoff Process (After First Load Delivers)</h4>
        <ol className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">1.</span>
            <span>Patrick books and monitors the first load personally</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">2.</span>
            <span>Patrick confirms first load delivered successfully</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">3.</span>
            <span>Patrick sends intro email to customer: "David will be your day-to-day contact going forward. He knows your lanes and will take great care of you."</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">4.</span>
            <span>Patrick CCs David on the email</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">5.</span>
            <span>David takes over ALL future booking, tracking, and communication</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">6.</span>
            <span>Patrick stays available for relationship escalations ONLY (David handles 95%+ on his own)</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">7.</span>
            <span>Customer profile and preferences documented in HubSpot before handoff</span>
          </li>
        </ol>
      </Card>

      <Card title="Escalation Paths">
        <p className="text-sm text-bb-dark-gray mb-md">
          Clear escalation paths prevent bottlenecks and ensure issues get resolved at the right level:
        </p>
        <ResponsibilityMatrix
          rows={escalationPaths.map(e => ({
            situation: e.issue,
            primaryOwner: e.firstResponse,
            escalationPath: `${e.escalateTo} → ${e.finalAuthority}`,
          }))}
        />
        <Callout variant="info" title="Escalation Principle">
          David and Vin handle 95% of operational issues without involving anyone else. Chris gets involved only when customer relationships are at risk. Jason is involved only for cargo damage/claims and customer payment issues—not routine operations.
        </Callout>
      </Card>

      <Card title="Carrier Tier System">
        <p className="text-sm text-bb-dark-gray mb-md">
          Categorize carriers by performance to prioritize outreach and relationship investment:
        </p>
        <Table
          headers={['Tier', 'Criteria', 'Treatment', 'Action']}
          rows={carrierTiers.map(t => [t.tier, t.criteria, t.treatment, t.action])}
        />
        <Callout variant="success" title="Dashboard View">
          Dashboard should show list of Preferred and Proven carriers by lane, load count, and performance rating. Updated weekly by David.
        </Callout>
      </Card>

      <Card title="Load Execution Checklist">
        <Callout variant="info" title="Note">
          This is a rough outline requiring David's review and sign-off. The actual process should reflect how David works best. He knows the operational reality better than any document.
        </Callout>
        <div className="space-y-md text-sm text-bb-dark-gray">
          <div>
            <h4 className="font-semibold text-bb-black mb-sm">Pre-Dispatch</h4>
            <ul className="space-y-xs">
              <li>• Confirm load details match customer request (weight, dims, commodity, dates)</li>
              <li>• Check for special requirements (temperature, hazmat, appointment times)</li>
              <li>• Source carrier—check preferred list first, then proven, then load boards</li>
              <li>• Verify carrier authority, insurance, safety rating</li>
              <li>• Confirm rate, pickup/delivery times with carrier</li>
              <li>• Send rate confirmation to carrier</li>
              <li>• Update Alvys with carrier info, tracking setup</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black mb-sm">In-Transit (Trucker Tools Active)</h4>
            <ul className="space-y-xs">
              <li>• Confirm pickup completed, get any reference numbers</li>
              <li>• Track via Trucker Tools—verify location updates</li>
              <li>• Proactive check-ins at key milestones for high-value loads</li>
              <li>• Alert customer proactively if any delays (don't wait for them to ask)</li>
              <li>• Document any issues immediately (ISSUE timestamp in notes)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black mb-sm">Post-Delivery</h4>
            <ul className="space-y-xs">
              <li>• Confirm delivery completed, get signed POD</li>
              <li>• Close load in Alvys, update all tracking info</li>
              <li>• Rate carrier performance (on-time, communication, issues)</li>
              <li>• Flag good carriers for preferred list consideration</li>
              <li>• Document any issues and resolution (RESOLVED timestamp in notes)</li>
              <li>• Invoice customer per agreed terms</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  )
}
