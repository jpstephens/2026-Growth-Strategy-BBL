import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import NAICSDistributionChart from '../charts/NAICSDistributionChart'
import { buildingProducts, metalFabrication, plasticsPackaging, automotiveJIT } from '../../data/naicsCodes'

export default function LeadGeneration() {
  return (
    <Section title="Lead Generation Strategy (ZoomInfo)">
      <Callout variant="info" title="Strategy Foundation">
        This section explains WHO we target, WHY they're ideal prospects, and HOW to build lists that convert.
      </Callout>

      <Card title="Volume Requirements: The Math">
        <p className="text-sm text-bb-dark-gray mb-md">Working backwards from our customer target to determine how many leads we need:</p>
        <Table
          headers={['Stage', 'Monthly Need', 'Conversion', 'How We Get There']}
          rows={[
            ['Target: New Customers', '5-6', 'Goal', 'Our target'],
            ['First Loads Booked', '8-10', '60% stick rate', 'Not everyone becomes repeat'],
            ['Qualified Prospects', '25-30', '35% close rate', 'Has freight, authority, timeline'],
            ['Positive Replies', '50-60', '50% qualify rate', 'Interested but needs vetting'],
            ['Total Email Replies', '100-120', '50% positive rate', 'Not all replies are positive'],
            ['Emails Sent', '~6,000', '3% reply rate', 'Industry standard for B2B'],
            ['Fresh Contacts Needed', '~1,500', 'Primary list', 'New contacts per month'],
          ]}
        />
        <Callout variant="success" title="Quarterly Plan">
          <p>
            5,000 contacts from ZoomInfo lasts approximately 3 months. Pull quarterly, refresh monthly with job changers (new hires at companies are 5x more likely to try new vendors).
          </p>
        </Callout>
      </Card>

      <Card title="Why These Industries?">
        <p className="text-sm text-bb-dark-gray mb-md">
          We target specific manufacturing industries based on three criteria that predict brokerage success:
        </p>
        <div className="space-y-md">
          <div className="p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm">Criterion 1: Consistent FTL Volume</h4>
            <p className="text-sm text-bb-dark-gray">
              They ship full truckloads regularly—not sporadically. Manufacturing represents 32% of all FTL freight volume nationally. These companies have production schedules that generate predictable freight.
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm">Criterion 2: Value Reliability Over Price</h4>
            <p className="text-sm text-bb-dark-gray">
              Production delays from late shipments cost them real money—sometimes $10,000-50,000 per hour. They'll pay more for a broker who doesn't drop the ball. Price-only buyers are not our target.
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md border border-bb-border">
            <h4 className="font-semibold text-bb-black mb-sm">Criterion 3: Right Company Size</h4>
            <p className="text-sm text-bb-dark-gray">
              Big enough to ship regularly (50+ employees), but not so big they have dedicated fleets (500+ employees). Mid-size manufacturers need the flexibility that brokers provide.
            </p>
          </div>
        </div>
      </Card>

      <Card title="Target List 1: Building Products & Construction Materials">
        <p className="text-sm text-bb-dark-gray mb-md">
          These companies manufacture heavy, bulky products requiring FTL shipping. High volume, regional routes, consistent demand tied to construction activity.
        </p>
        <h4 className="font-semibold text-bb-black mb-md text-sm">Why They Need Brokers</h4>
        <ul className="space-y-xs text-sm text-bb-dark-gray mb-md">
          <li>• Heavy products = full truckloads (no LTL option for cement, concrete, metal frames)</li>
          <li>• Construction timelines are unforgiving—late delivery stops the job site</li>
          <li>• Regional distribution to builders, contractors, and big-box retailers</li>
          <li>• Seasonal peaks require overflow capacity they don't have in-house</li>
          <li>• Many are mid-size companies without dedicated logistics teams</li>
        </ul>
        <Table
          headers={['NAICS Code', 'Industry', 'Why Good for FTL', 'Typical Freight']}
          rows={buildingProducts.map(p => [p.code, p.industry, p.why, p.typicalFreight])}
        />
        <p className="text-xs text-bb-dark-gray mt-md italic">
          <strong>ZoomInfo Filters:</strong> 75-500 employees | $15M-$300M revenue | FL, GA, NC, TX, AZ, CO
        </p>
      </Card>

      <Card title="Target List 2: Metal Fabrication & Industrial Products">
        <p className="text-sm text-bb-dark-gray mb-md">
          Custom and made-to-order products with variable shipping needs. Relationship businesses—once you're in, you stay in for years.
        </p>
        <Table
          headers={['NAICS Code', 'Industry', 'Why Good for FTL', 'Typical Freight']}
          rows={metalFabrication.map(p => [p.code, p.industry, p.why, p.typicalFreight])}
        />
        <p className="text-xs text-bb-dark-gray mt-md italic">
          <strong>ZoomInfo Filters:</strong> 50-400 employees | $10M-$200M revenue | OH, MI, IN, IL, PA, TX
        </p>
      </Card>

      <Card title="Target List 3: Plastics & Packaging">
        <p className="text-sm text-bb-dark-gray mb-md">
          High-volume, lightweight but space-consuming products. Consistent demand, repeat routes, loyal customers once you prove reliability.
        </p>
        <Table
          headers={['NAICS Code', 'Industry', 'Why Good for FTL', 'Typical Freight']}
          rows={plasticsPackaging.map(p => [p.code, p.industry, p.why, p.typicalFreight])}
        />
        <p className="text-xs text-bb-dark-gray mt-md italic">
          <strong>ZoomInfo Filters:</strong> 50-300 employees | $10M-$150M revenue | All target states
        </p>
      </Card>

      <Card title="Target List 4: Automotive & JIT Manufacturing">
        <p className="text-sm text-bb-dark-gray mb-md">
          Highest reliability requirements and pay premium rates. Cannot tolerate late deliveries. Production shutdowns cost $10K-50K per hour.
        </p>
        <Table
          headers={['NAICS Code', 'Industry', 'Why Good for Expedited', 'Typical Freight']}
          rows={automotiveJIT.map(p => [p.code, p.industry, p.why, p.typicalFreight])}
        />
        <p className="text-xs text-bb-dark-gray mt-md italic">
          <strong>ZoomInfo Filters:</strong> 100-750 employees | $25M-$400M revenue | MI, OH, IN, TN, AL, SC
        </p>
      </Card>

      <Card title="List Allocation Strategy">
        <p className="text-sm text-bb-dark-gray mb-md">
          How to divide 1,500 contacts/month across the four target lists:
        </p>
        <Table
          headers={['List', 'Allocation', 'Contacts/Month', 'Rationale']}
          rows={[
            ['Building Products', '25%', '~375', 'Heavy products, regional, good margins'],
            ['Metal Fabrication', '30%', '~450', 'Broadest opportunity, relationship-based, loyal'],
            ['Plastics & Packaging', '25%', '~375', 'Consistent volume, repeat lanes, recession-resistant'],
            ['Automotive/JIT', '20%', '~300', 'Higher margin but stricter, expedited potential'],
          ]}
        />
        <Callout variant="success" title="Data-Driven Allocation">
          Adjust monthly based on conversion data. If automotive converts 2x better than plastics, shift allocation. Let the data guide resource allocation.
        </Callout>

        <NAICSDistributionChart />
      </Card>

      <Card title="Contact Quality Requirements">
        <p className="text-sm text-bb-dark-gray mb-md">
          A bad list wastes time and damages email deliverability. Every contact must meet these standards before import:
        </p>
        <Table
          headers={['Requirement', 'How to Verify', 'Why It Matters']}
          rows={[
            ['Direct phone number', 'ZoomInfo filter—no main lines', 'Can\'t waste time with gatekeepers'],
            ['Corporate email only', 'No Gmail, Yahoo, Hotmail, etc.', 'Personal emails bounce more, unprofessional'],
            ['Fresh data (<6 months)', 'Spot-check 20 contacts on LinkedIn', 'ZoomInfo data decays 20-30% per year'],
            ['Job changer priority', 'Filter: start date <12 months', 'New managers 5x more open to vendors'],
            ['Deduped vs. HubSpot', 'Export existing, remove matches', 'Don\'t waste outreach on existing contacts'],
            ['Verified company size', 'Check employee count and revenue', 'Avoid too-small or too-large'],
          ]}
        />
      </Card>

      <Card title="Monthly List Hygiene">
        <ul className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Remove bounced emails immediately (damages sender reputation)</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Remove unsubscribes immediately (legal requirement)</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Tag engaged contacts (opened 2+ emails) for priority follow-up</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Tag non-responsive contacts (0 opens after full sequence) for removal</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Refresh job changers monthly (new hires at existing target companies)</span>
          </li>
        </ul>
      </Card>
    </Section>
  )
}
