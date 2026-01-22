import Section from '../content/Section'
import Card from '../content/Card'
import Callout from '../content/Callout'

export default function MeetingRhythms() {
  return (
    <Section title="Meeting Rhythms">
      <Callout variant="info" title="Meeting Purpose">
        <p>
          Every meeting has a defined purpose, a specific goal, and uses data from the dashboard. No meeting exists just to 'check in.'
        </p>
      </Callout>

      <Card title="Weekly Sales Review – Tuesday">
        <div className="space-y-md">
          <div className="grid grid-cols-2 gap-md">
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Attendees</h4>
              <p className="text-sm text-bb-dark-gray">Chris, Patrick (+ future sales reps)</p>
            </div>
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Duration</h4>
              <p className="text-sm text-bb-dark-gray">45-60 minutes</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Purpose</h4>
            <p className="text-sm text-bb-dark-gray">Review activity, pipeline health, deal progress</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Goal</h4>
            <p className="text-sm text-bb-dark-gray">Ensure targets are hit; unblock deals; refine approach</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Agenda</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• Dashboard review: Dials, conversations, qualified vs. target (5 min)</li>
              <li>• Pipeline walk-through: Every deal in Qualified, Quote Sent, Negotiating stages (15 min)</li>
              <li>• Wins and losses: What closed this week? What did we lose and why? (10 min)</li>
              <li>• Blockers and support needed: What's preventing progress? (10 min)</li>
              <li>• Top 3 priorities for the week: What must happen? (5 min)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Weekly Operations Review – Thursday">
        <div className="space-y-md">
          <div className="grid grid-cols-2 gap-md">
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Attendees</h4>
              <p className="text-sm text-bb-dark-gray">Vin, David (+ future ops staff)</p>
            </div>
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Duration</h4>
              <p className="text-sm text-bb-dark-gray">30-45 minutes</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Purpose</h4>
            <p className="text-sm text-bb-dark-gray">Review ops performance, carrier development, capacity</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Goal</h4>
            <p className="text-sm text-bb-dark-gray">Maintain service levels; track carrier network growth; plan capacity</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Agenda</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• Dashboard review: Loads, on-time %, margin, issues this week (5 min)</li>
              <li>• Issue review: Major problems this week and how they were resolved (10 min)</li>
              <li>• Carrier development: Progress on direct relationships, tier updates (10 min)</li>
              <li>• Capacity check: Approaching any limits? Need to hire? (5 min)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Weekly Company Review – Wednesday">
        <div className="space-y-md">
          <div className="grid grid-cols-2 gap-md">
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Attendees</h4>
              <p className="text-sm text-bb-dark-gray">All team (Jason, Vin, Chris, Patrick, David)</p>
            </div>
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Duration</h4>
              <p className="text-sm text-bb-dark-gray">45-60 minutes</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Purpose</h4>
            <p className="text-sm text-bb-dark-gray">Company-wide alignment on progress and priorities</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Goal</h4>
            <p className="text-sm text-bb-dark-gray">Everyone knows where we stand vs. goals; cross-team coordination</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Agenda</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• Dashboard review: Key business metrics vs. targets (10 min)</li>
              <li>• Sales update: Pipeline summary, wins/losses, priorities (10 min)</li>
              <li>• Ops update: Service levels, carrier progress, issues (10 min)</li>
              <li>• Cross-team items: Handoffs, coordination needs, upcoming challenges (10 min)</li>
              <li>• Priorities for the week: Top 3 things that matter most right now (5 min)</li>
            </ul>
          </div>
        </div>
        <Callout variant="warning" title="Preparation Requirement">
          Everyone comes prepared with their numbers and updates. No surprises. The meeting is for discussion and decisions, not data gathering.
        </Callout>
      </Card>

      <Card title="Monthly Ownership Review">
        <div className="space-y-md">
          <div className="grid grid-cols-2 gap-md">
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Attendees</h4>
              <p className="text-sm text-bb-dark-gray">Ownership only (Jason, Vin, Chris)</p>
            </div>
            <div>
              <h4 className="font-semibold text-bb-black text-sm mb-sm">Duration</h4>
              <p className="text-sm text-bb-dark-gray">60-90 minutes</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Purpose</h4>
            <p className="text-sm text-bb-dark-gray">Strategic review, financial performance, major decisions</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Goal</h4>
            <p className="text-sm text-bb-dark-gray">Align on direction; make hiring/investment decisions; address ownership-level issues</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-sm">Agenda</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• Financial review: Revenue, margin, profit vs. plan (15 min)</li>
              <li>• Progress vs. growth plan: On track? What's working? What's not? (20 min)</li>
              <li>• Hiring decisions: Do we trigger any hires this month? Who, when, how? (15 min)</li>
              <li>• Strategic issues: Major customer decisions, partnerships, investments (20 min)</li>
              <li>• Next month priorities: Top 3 things ownership needs to focus on (10 min)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Meeting Checklist">
        <div className="space-y-md text-sm text-bb-dark-gray">
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Before Every Meeting</h4>
            <ul className="space-y-xs">
              <li>• Dashboard is current (all data pulled in last 24 hours)</li>
              <li>• Attendees have reviewed their own numbers</li>
              <li>• Action items from previous meeting are completed or noted as blockers</li>
            </ul>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">During Meeting</h4>
            <ul className="space-y-xs">
              <li>• Assign owner to every action item with specific deadline</li>
              <li>• Stay on agenda—notes go on "next meeting" list</li>
              <li>• Decisions are documented, not assumed</li>
            </ul>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">After Every Meeting</h4>
            <ul className="space-y-xs">
              <li>• Email summary with action items, owners, deadlines within 2 hours</li>
              <li>• Highlight red-flag KPIs and proposed actions</li>
              <li>• Share dashboard link so team can reference outside meetings</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  )
}
