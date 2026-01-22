import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'

export default function FirstThirtyDays() {
  return (
    <Section title="First 30 Days Action Plan">
      <Callout variant="critical" title="Critical Foundation">
        <p>
          This is the detailed execution plan for January. Every action has an owner and a deadline. The next 30 days establish the foundation—if we don't get this right, nothing else in the plan matters.
        </p>
      </Callout>

      <Card title="Week 1 (Jan 20-24): Role Separation and Foundation">
        <Table
          headers={['Action', 'Owner', 'Deadline', 'Success Criteria']}
          rows={[
            ['Document all ops tasks Patrick currently handles', 'Patrick + David', 'Jan 22', 'Written list reviewed by Vin'],
            ['Transfer customer communication ownership to David', 'Patrick', 'Jan 24', 'All existing customers notified of David as contact'],
            ['Set up protected calling blocks in Patrick\'s calendar', 'Patrick + Chris', 'Jan 22', 'Calendar shows three blocks daily, shared with team'],
            ['Patrick begins logging all calls in HubSpot', 'Patrick', 'Jan 22', 'Every call logged with outcome and notes'],
            ['David confirms ownership of all active loads', 'David', 'Jan 24', 'No loads assigned to Patrick in Alvys'],
          ]}
        />
      </Card>

      <Card title="Week 2 (Jan 27-31): Sales Ramp + Email Setup">
        <Table
          headers={['Action', 'Owner', 'Deadline', 'Success Criteria']}
          rows={[
            ['Patrick hits 30+ dials/day average', 'Patrick/Chris', 'Jan 31', '150+ dials logged for the week'],
            ['Purchase 3 secondary domains for Instantly.ai', 'Jason', 'Jan 28', 'Domains registered, DNS configured'],
            ['Set up Instantly.ai account and begin warmup', 'Jason/Patrick', 'Jan 29', 'Warmup running on all 9 email addresses'],
            ['Pull first 2,000 contacts from ZoomInfo', 'Patrick', 'Jan 30', 'Contacts imported to HubSpot + Instantly.ai'],
            ['HubSpot deal stages configured', 'Chris', 'Jan 31', 'All 8 stages active, ready for use'],
            ['First Wednesday company meeting held', 'All', 'Jan 29', 'Agenda followed, dashboard discussed'],
          ]}
        />
      </Card>

      <Card title="Week 3 (Feb 3-7): Full Activity + Email Launch">
        <Table
          headers={['Action', 'Owner', 'Deadline', 'Success Criteria']}
          rows={[
            ['Patrick hits 40+ dials/day', 'Patrick/Chris', 'Feb 7', '200+ dials logged for the week'],
            ['Begin Instantly.ai sending (20% volume)', 'Patrick', 'Feb 5', 'First emails out, tracking deliverability'],
            ['First 1-2 new customers closed', 'Patrick', 'Feb 7', 'Deals in HubSpot at Won stage'],
            ['Begin carrier type tagging in Alvys', 'David', 'Feb 7', 'Every new load tagged spot/repeat/direct'],
            ['First weekly sales review meeting', 'Chris/Patrick', 'Feb 4', 'Agenda followed, documented outcomes'],
            ['First weekly ops review meeting', 'Vin/David', 'Feb 6', 'Agenda followed, documented outcomes'],
          ]}
        />
      </Card>

      <Card title="Week 4 (Feb 10-14): Validate and Adjust">
        <Table
          headers={['Action', 'Owner', 'Deadline', 'Success Criteria']}
          rows={[
            ['Patrick sustained at 200 dials/week', 'Patrick/Chris', 'Feb 14', 'Two consecutive weeks at target'],
            ['Instantly.ai at 50% sending velocity', 'Patrick', 'Feb 14', '~2,500 emails/week, replies coming in'],
            ['Review and refine call scripts', 'Chris/Patrick', 'Feb 12', 'Version 1.1 documented with improvements'],
            ['2-3 new customers closed for January', 'Patrick', 'Feb 14', 'Deals in Won stage, first loads scheduled'],
            ['KPI dashboard v1.0 live', 'Jason', 'Feb 14', 'Team can see key metrics'],
            ['First monthly ownership review', 'Jason/Vin/Chris', 'Feb 14', 'February plan confirmed, adjustments made'],
          ]}
        />
      </Card>

      <Card title="Day 30 Success Criteria">
        <div className="space-y-md">
          <div className="p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
            <h4 className="font-semibold text-bb-black mb-sm">Patrick</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• 600+ dials logged</li>
              <li>• 80+ conversations</li>
              <li>• 20+ qualified prospects</li>
              <li>• 2-4 new customers closed</li>
            </ul>
          </div>
          <div className="p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
            <h4 className="font-semibold text-bb-black mb-sm">David</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• 100% ops ownership</li>
              <li>• Carrier tagging implemented</li>
              <li>• No loads assigned to Patrick</li>
              <li>• {'>'} 95% on-time delivery maintained</li>
            </ul>
          </div>
          <div className="p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
            <h4 className="font-semibold text-bb-black mb-sm">Instantly.ai</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• Warmup complete</li>
              <li>• Sending at 50{'%'}+ velocity</li>
              <li>• First replies coming in</li>
              <li>• Integration with HubSpot working</li>
            </ul>
          </div>
          <div className="p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
            <h4 className="font-semibold text-bb-black mb-sm">HubSpot & Systems</h4>
            <ul className="text-sm text-bb-dark-gray space-y-xs">
              <li>• Pipeline tracking live with all deals in stages</li>
              <li>• All meetings running on schedule</li>
              <li>• Documented outcomes from all meetings</li>
              <li>• KPI dashboard accessible and updated</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Decision Points & Triggers">
        <div className="space-y-md text-sm text-bb-dark-gray">
          <div className="p-md bg-warning/5 rounded-md border border-warning/20">
            <h4 className="font-semibold text-bb-black mb-sm">If Patrick Hits {'<'}150 Dials/Week by Jan 31</h4>
            <p>
              <strong>Decision Required:</strong> Why? Is it operations interference? List quality? Skill? Diagnose and fix by Feb 5. If still stuck in week 3, escalate to Jason for decision on approach.
            </p>
          </div>
          <div className="p-md bg-warning/5 rounded-md border border-warning/20">
            <h4 className="font-semibold text-bb-black mb-sm">If Instantly.ai Domain Warmup Delayed Past Feb 5</h4>
            <p>
              <strong>Decision Required:</strong> Proceed with cold calling only until domains are ready. Don't delay launch. Email is a multiplier, not a blocker.
            </p>
          </div>
          <div className="p-md bg-warning/5 rounded-md border border-warning/20">
            <h4 className="font-semibold text-bb-black mb-sm">If David Is Overwhelmed with {'>'} 100 Loads/Month</h4>
            <p>
              <strong>Decision Required:</strong> Flag to ownership immediately. Begin planning for ops support hire in Q1, even if performance metrics aren't fully met.
            </p>
          </div>
          <div className="p-md bg-warning/5 rounded-md border border-warning/20">
            <h4 className="font-semibold text-bb-black mb-sm">If {'<'}2 New Customers by End of February</h4>
            <p>
              <strong>Decision Required:</strong> Script issue? List quality issue? Close rate problem? Debug in Feb, adjust in March. This is still early—expect ramp time.
            </p>
          </div>
        </div>
      </Card>

      <Card title="Critical Rules for First 30 Days">
        <ul className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">1.</span>
            <span><strong>No exceptions to protected calling blocks.</strong> Patrick's calling time is sacred. David and Vin handle ALL ops interruptions.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">2.</span>
            <span><strong>Every call logged in HubSpot daily.</strong> Chris reviews logs every morning. Dials aren't real unless they're logged.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">3.</span>
            <span><strong>All meetings happen on schedule.</strong> If a meeting is missed or rescheduled, ownership hears about it immediately.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">4.</span>
            <span><strong>Dashboard is current before every meeting.</strong> No stale data. If dashboard isn't ready, meeting is pushed until it is.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">5.</span>
            <span><strong>Issues are escalated immediately, not hidden.</strong> If something isn't tracking to plan, flag it within 24 hours, not in the next week's meeting.</span>
          </li>
        </ul>
      </Card>

      <Card title="Success Summary">
        <Callout variant="success" title="If We Execute These 30 Days Perfectly">
          <p className="mb-sm">
            <strong>We'll have:</strong>
          </p>
          <ul className="text-sm text-bb-dark-gray space-y-xs">
            <li>• Patrick at 200+ dials/week, proving the sales engine works</li>
            <li>• David handling all operations, freeing Patrick completely</li>
            <li>• Email automation warming prospects before calls</li>
            <li>• Data flowing from all systems into HubSpot and dashboard</li>
            <li>• 2-4 new customers validating the sales model</li>
            <li>• All meetings running and teams synchronized on data</li>
            <li>• Clear view of what's working and what needs adjustment</li>
          </ul>
          <p className="mt-sm">
            This puts us in position for a strong Q1 and triggers evaluation of rep #2 hire by April.
          </p>
        </Callout>
      </Card>
    </Section>
  )
}
