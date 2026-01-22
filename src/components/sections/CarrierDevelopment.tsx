import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import MetricCard from '../content/MetricCard'

export default function CarrierDevelopment() {
  return (
    <Section title="Carrier Development Strategy">
      <Card title="Current State: What We Need to Track">
        <p className="text-sm text-bb-dark-gray mb-md">
          We don't currently have clean data on our carrier mix. To build a real strategy, we need to start tracking. Starting in February, David tags every load with carrier type:
        </p>
        <Table
          headers={['Metric', 'What It Tells Us', 'How to Track']}
          rows={[
            ['Spot Carrier %', 'Loads booked from load boards (DAT, Truckstop)', 'Tag SPOT in Alvys at booking'],
            ['Repeat Carrier %', 'Carriers we\'ve used 3+ times', 'Tag REPEAT in Alvys at booking'],
            ['Direct Carrier %', 'Relationship carriers (not from boards)', 'Tag DIRECT in Alvys at booking'],
            ['Carrier Performance', 'On-time %, issues, reliability', 'Post-load rating in Alvys'],
          ]}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-md mt-md">
          <MetricCard label="Spot Carrier Target Q4" value="<40%" />
          <MetricCard label="Direct Carrier Target Q2" value=">35%" />
          <MetricCard label="Direct Carrier Target Q4" value=">50%" />
        </div>
        <Callout variant="info" title="Baseline Note">
          After 60 days of tracking, we'll have baseline data to set meaningful targets. Preliminary targets (subject to adjustment based on baseline).
        </Callout>
      </Card>

      <Card title="Building Direct Carrier Relationships">
        <p className="text-sm text-bb-dark-gray mb-md">
          <strong>Goal:</strong> Build a network of carriers who want to haul for BlackBridge regularly because we pay fairly, communicate clearly, and treat them with respect.
        </p>
        <h4 className="font-semibold text-bb-black mb-sm text-sm">Where to Find Direct Carriers</h4>
        <ul className="space-y-sm text-sm text-bb-dark-gray mb-md">
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">–</span>
            <span><strong>Convert performing spot carriers:</strong> When a spot carrier does great work, call them after delivery. Ask if they'd like regular loads on that lane.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">–</span>
            <span><strong>Outbound calls to carriers in key lanes:</strong> Identify high-volume lanes, find carriers who run those lanes regularly.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">–</span>
            <span><strong>Referrals from existing carriers:</strong> Good carriers know other good carriers. Ask for introductions.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">–</span>
            <span><strong>Carrier database mining:</strong> Review historical Alvys data for carriers with good performance we haven't used recently.</span>
          </li>
        </ul>

        <h4 className="font-semibold text-bb-black mb-sm text-sm">What Carriers Want</h4>
        <Table
          headers={['What They Want', 'How We Deliver']}
          rows={[
            ['Quick pay (faster than 30 days)', 'Offer quick pay options where margin allows'],
            ['Consistent freight', 'Build lane density, offer volume commitments'],
            ['Fair rates (not lowest, but fair)', 'Don\'t squeeze every dollar—relationship matters'],
            ['Professional communication', 'Clear load details, responsive to questions'],
            ['Respect for their time', 'Accurate appointment times, no excessive detention'],
            ['Honest expectations', 'Don\'t overpromise load frequency or rates'],
          ]}
        />
      </Card>

      <Card title="Carrier Outreach Framework">
        <Callout variant="warning" title="Script Status">
          The carrier outreach script needs to be developed as a team and continuously measured and improved. Like sales scripts, this should be version-controlled with regular reviews. David and Vin should refine based on what works.
        </Callout>
        <div className="mt-md p-md bg-bb-light-gray rounded-md border border-bb-border">
          <h4 className="font-semibold text-bb-black mb-sm">Initial Outreach Call (to convert spot carriers)</h4>
          <p className="text-sm text-bb-dark-gray italic">
            "Hi [Driver/Dispatcher], this is David at BlackBridge. You hauled a load for us last week from [origin] to [destination] and our customer was really happy with your service. We have regular freight on that lane—any interest in getting more loads from us?"
          </p>
        </div>
      </Card>

      <Card title="Tracking and Performance">
        <p className="text-sm text-bb-dark-gray mb-md">
          Carrier performance should be visible in the dashboard for weekly review. Update tracking and follow-up weekly.
        </p>
        <div className="p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
          <p className="text-sm text-bb-dark-gray mb-sm">
            <strong>Dashboard view should show:</strong>
          </p>
          <ul className="text-sm text-bb-dark-gray space-y-xs">
            <li>• List of Preferred and Proven carriers by lane</li>
            <li>• Load count for each carrier</li>
            <li>• Performance rating (on-time %, issues)</li>
            <li>• Last load date and status</li>
            <li>• Updated weekly by David</li>
          </ul>
        </div>
      </Card>

      <Card title="Key Performance Targets">
        <div className="space-y-md">
          <div className="p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm">Q1 Goals</h4>
            <p className="text-sm text-bb-dark-gray">Establish baseline tracking, identify top 5-10 performing carriers, begin outreach to convert spot carriers</p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm">Q2 Goals</h4>
            <p className="text-sm text-bb-dark-gray">Build direct carrier network to 35%+, have relationships with 10-15 Preferred carriers, increase repeat carrier rate</p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm">Q3-Q4 Goals</h4>
            <p className="text-sm text-bb-dark-gray">Direct carrier 50%+, 20-25 Preferred tier carriers with regular volume, excellent on-time performance from known relationships</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
