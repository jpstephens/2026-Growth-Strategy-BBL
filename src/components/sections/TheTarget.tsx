import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'

export default function TheTarget() {
  return (
    <Section title="The Target and the Math">
      <Card title="The Goal">
        <div className="mb-md p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
          <p className="text-h3 font-bold text-bb-black mb-sm">
            DECEMBER 2026 TARGET: $100,000
          </p>
          <p className="text-base text-bb-dark-gray">
            Net profit per month from freight brokerage operations. This is not revenue—this is profit after paying carriers, team, and overhead.
          </p>
        </div>
        <p className="text-sm text-bb-dark-gray">
          This requires approximately $670,000 in monthly gross revenue, or <strong>481 loads per month</strong> at $208 average margin.
        </p>
      </Card>

      <Card title="The Growth Math">
        <p className="text-sm text-bb-dark-gray mb-md">From current baseline to target:</p>
        <Table
          headers={['Variable', 'Value', 'Notes']}
          rows={[
            ['Target Monthly Net Profit', '$100,000', 'The goal'],
            ['Average Margin per Load', '$208', 'Historical average'],
            ['Required Monthly Loads', '481', '$100K ÷ $208'],
            ['Current Monthly Loads', '~71', 'January baseline'],
            ['Required Growth Multiple', '6.8x', '481 ÷ 71'],
          ]}
        />
        <Callout variant="success" title="Achievable but Demanding">
          Growing 6.8x in one year is aggressive but achievable with the right team structure and consistent execution. The key insight: growth comes from customer acquisition and retention, not from squeezing more loads out of existing customers.
        </Callout>
      </Card>

      <Card title="Customer Acquisition Math">
        <p className="text-sm text-bb-dark-gray mb-md">
          <strong>Customers don't arrive at full volume.</strong> They ramp over months as trust builds:
        </p>
        <Table
          headers={['Time with BlackBridge', 'Typical Loads/Month', 'Monthly Margin', 'Customer Status']}
          rows={[
            ['Month 1', '1-2', '$200-400', 'Trial period—proving ourselves'],
            ['Month 2', '4-6', '$800-1,200', 'Building confidence'],
            ['Month 3', '8-12', '$1,600-2,400', 'Regular shipper'],
            ['Month 4-5', '12-15', '$2,400-3,000', 'Growing relationship'],
            ['Month 6+', '15-25', '$3,000-5,000', 'Established—core customer'],
          ]}
        />
        <div className="mt-md p-md bg-warning/5 rounded-md border border-warning/20">
          <p className="text-sm text-bb-dark-gray mb-sm">
            <strong>Critical implication:</strong> A customer acquired in January doesn't contribute $4,000/month until June.
          </p>
          <p className="text-sm text-bb-dark-gray">
            A customer acquired in October barely contributes anything meaningful before December. This is why early acquisition matters—we need customers ramping all year.
          </p>
        </div>
      </Card>

      <Card title="Customer Lifetime Value">
        <p className="text-sm text-bb-dark-gray mb-md">
          This shows how a single customer's contribution grows across 12 months:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm mb-md">
            <thead className="bg-bb-button text-bb-white">
              <tr>
                <th className="text-left px-md py-sm font-semibold">Month</th>
                <th className="text-center px-md py-sm font-semibold">1</th>
                <th className="text-center px-md py-sm font-semibold">2</th>
                <th className="text-center px-md py-sm font-semibold">3</th>
                <th className="text-center px-md py-sm font-semibold">4</th>
                <th className="text-center px-md py-sm font-semibold">5</th>
                <th className="text-center px-md py-sm font-semibold">6</th>
                <th className="text-center px-md py-sm font-semibold">7-12</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-bb-white border-b border-bb-border">
                <td className="px-md py-sm text-bb-dark-gray font-medium">Loads/Month</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">1.5</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">5</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">10</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">12</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">15</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">18</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">20</td>
              </tr>
              <tr className="bg-bb-light-gray border-b border-bb-border">
                <td className="px-md py-sm text-bb-dark-gray font-medium">Margin/Month</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$312</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$1,040</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$2,080</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$2,496</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$3,120</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$3,744</td>
                <td className="text-center px-md py-sm text-bb-dark-gray">$4,160</td>
              </tr>
              <tr className="bg-bb-white">
                <td className="px-md py-sm text-bb-dark-gray font-medium">Cumulative</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$312</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$1,352</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$3,432</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$5,928</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$9,048</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$12,792</td>
                <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">$37,752</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-sm">
          <p className="text-sm text-bb-dark-gray">
            A customer acquired in January and retained all year generates approximately <strong>$38,000 in margin.</strong>
          </p>
          <p className="text-sm text-bb-dark-gray">
            A customer acquired in July generates only about <strong>$15,000 by December.</strong>
          </p>
          <p className="text-sm text-bb-dark-gray font-semibold text-bb-black">
            Start early. Sustain momentum.
          </p>
        </div>
      </Card>

      <Card title="Acquisition Rate Required">
        <p className="text-sm text-bb-dark-gray mb-md">
          To reach 65-70 active customers by December, accounting for churn:
        </p>
        <Table
          headers={['Quarter', 'New Customers Needed', 'Cumulative Active (End)', 'Monthly Run Rate']}
          rows={[
            ['Q1 (Jan-Mar)', '12-15', '22-25', '4-5 new/month'],
            ['Q2 (Apr-Jun)', '15-18', '35-40', '5-6 new/month'],
            ['Q3 (Jul-Sep)', '18-20', '50-55', '6-7 new/month'],
            ['Q4 (Oct-Dec)', '18-20', '65-70', '6-7 new/month'],
          ]}
        />
        <Callout variant="info" title="What This Means">
          <p>
            We need 4-6 new customers per month starting in February, ramping to 6-7 by summer. This requires consistent, sustained sales activity—not occasional bursts of effort.
          </p>
        </Callout>
      </Card>
    </Section>
  )
}
