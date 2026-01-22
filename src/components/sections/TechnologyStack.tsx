import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'

export default function TechnologyStack() {
  return (
    <Section title="Technology Stack">
      <Callout variant="info" title="Philosophy">
        <p>
          Keep this simple—add tools only when they solve a real problem. Goal is integration and data flow, not tool quantity.
        </p>
      </Callout>

      <Card title="Core Systems">
        <Table
          headers={['System', 'Purpose', 'Owner', 'Cost']}
          rows={[
            ['Alvys TMS', 'Load management, dispatch, carrier booking, invoicing', 'David', 'Current'],
            ['HubSpot', 'CRM, sales pipeline, contact management, deal tracking', 'Patrick/Chris', 'Current'],
            ['ZoomInfo', 'Lead sourcing, contact data, company intelligence', 'Patrick', 'Current'],
            ['Instantly.ai', 'Cold email automation, domain warmup, reply tracking', 'Patrick', '$97/month'],
            ['Trucker Tools', 'Real-time tracking, carrier communication', 'David', 'Current'],
            ['Google Workspace', 'Email, docs, sheets, calendar, collaboration', 'All', 'Current'],
            ['Slack', 'Team communication, notifications, file sharing', 'All', 'Current'],
            ['Zapier', 'System integrations, automation, data sync', 'Jason', '$19-49/month'],
          ]}
        />
      </Card>

      <Card title="Key Integration Points">
        <p className="text-sm text-bb-dark-gray mb-md">
          These integrations ensure data flows between systems without manual entry:
        </p>
        <Table
          headers={['Integration', 'What It Does', 'Priority']}
          rows={[
            ['Instantly.ai → HubSpot', 'Sync email replies to create/update contacts automatically', 'High'],
            ['ZoomInfo → HubSpot', 'Import new contacts with deduplication', 'High'],
            ['HubSpot → Slack', 'Notifications for hot leads and won deals', 'Medium'],
            ['Alvys → Dashboard', 'Load and margin data for KPI tracking', 'Medium'],
            ['Trucker Tools → Alvys', 'Tracking data for load updates', 'Medium'],
          ]}
        />
      </Card>

      <Card title="Integration Setup Timeline">
        <div className="space-y-md text-sm text-bb-dark-gray">
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Week 1-2 (January)</h4>
            <ul className="space-y-xs">
              <li>• Set up Zapier account, connect HubSpot</li>
              <li>• Create Instantly.ai integration to Zapier</li>
              <li>• Test ZoomInfo import to HubSpot</li>
            </ul>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Week 3-4 (Late January)</h4>
            <ul className="space-y-xs">
              <li>• Set up HubSpot Slack notification workflow</li>
              <li>• Create Alvys data export template for dashboard</li>
              <li>• Test all integrations end-to-end</li>
            </ul>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Ongoing</h4>
            <ul className="space-y-xs">
              <li>• Monitor integration health daily (check for sync failures)</li>
              <li>• Quarterly review of integration efficiency</li>
              <li>• Add new integrations based on operational pain points</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="System Access & Responsibilities">
        <Table
          headers={['Person', 'Systems', 'Access Level']}
          rows={[
            ['Jason', 'HubSpot, Alvys, Zapier, Dashboard', 'Admin (strategy, integrations)'],
            ['Chris', 'HubSpot, Slack', 'Full (sales pipeline, team comms)'],
            ['Patrick', 'HubSpot, Instantly.ai, ZoomInfo, Slack', 'Full (prospecting, email)'],
            ['Vin', 'Alvys, HubSpot (read-only), Dashboard', 'Full ops (booking, tracking)'],
            ['David', 'Alvys, Trucker Tools, Slack', 'Full ops (dispatch, carrier mgmt)'],
          ]}
        />
      </Card>

      <Card title="Vendor Management">
        <Callout variant="warning" title="Important">
          <p>
            <strong>Keep vendor list and contracts with Jason.</strong> Know renewal dates, costs, and alternatives for each tool. Every 6 months, review whether each tool is still solving the problem it was bought for.
          </p>
        </Callout>
        <div className="mt-md space-y-md text-sm text-bb-dark-gray">
          <div>
            <h4 className="font-semibold text-bb-black mb-sm">Questions to Ask Quarterly</h4>
            <ul className="space-y-xs">
              <li>• Is this tool still being used as intended?</li>
              <li>• Are we getting ROI (savings/productivity/revenue) from this tool?</li>
              <li>• Is there a cheaper alternative that does the same thing?</li>
              <li>• Can we consolidate this with another tool?</li>
              <li>• What would break if we removed this tool?</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Data Security Checklist">
        <ul className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>All team members use strong passwords (12+ characters) with two-factor authentication</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>No sharing of login credentials—use Google Workspace team accounts where possible</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Customer data (names, rates, contact info) should not be shared outside team</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Regular backups of critical data (HubSpot, Alvys, customer lists)</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">✓</span>
            <span>Deactivate access immediately for any team member who leaves</span>
          </li>
        </ul>
      </Card>
    </Section>
  )
}
