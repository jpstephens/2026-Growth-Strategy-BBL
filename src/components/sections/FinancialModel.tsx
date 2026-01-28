import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import GrowthTrajectoryChart from '../charts/GrowthTrajectoryChart'
import ScenarioComparisonChart from '../charts/ScenarioComparisonChart'
import { scenario1, scenario2 } from '../../data/financialProjections'

export default function FinancialModel() {
  return (
    <Section title="Financial Model">
      <Card title="Base Assumptions">
        <Table
          headers={['Variable', 'Assumption', 'Source/Rationale']}
          rows={[
            ['Average Margin per Load', '$208', 'Target margin excluding terminated accounts'],
            ['Average Loads per Customer (Month 6+)', '15-20', 'Based on existing customer patterns'],
            ['Annual Churn Rate', '15-20%', 'Industry standard for 3PL'],
            ['Sales Rep Capacity', '4-6 new customers/month', 'Assumes 200 dials/week, good list'],
            ['Ops Capacity (David alone)', '~150 loads/month', 'Before needing support'],
            ['New Rep Ramp Time', '60-90 days', 'Standard for freight sales'],
          ]}
        />
      </Card>

      <Card title="Scenario 1: Patrick Only (No New Hires)">
        <p className="text-sm text-bb-dark-gray mb-md">
          What happens if Patrick alone executes perfectly with no additional sales hires?
        </p>
        <div className="overflow-x-auto mb-md">
          <table className="w-full text-xs">
            <thead className="bg-bb-button text-bb-white">
              <tr>
                <th className="text-left px-md py-sm font-semibold">Month</th>
                <th className="text-center px-md py-sm font-semibold">New Customers</th>
                <th className="text-center px-md py-sm font-semibold">Total Active</th>
                <th className="text-center px-md py-sm font-semibold">Est. Loads</th>
                <th className="text-center px-md py-sm font-semibold">Gross Margin</th>
                <th className="text-center px-md py-sm font-semibold">Est. Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {scenario1.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-bb-white' : 'bg-bb-light-gray'}>
                  <td className="px-md py-sm text-bb-dark-gray font-medium">{row.month}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray">{row.newCustomers}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray">{row.totalActive}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray">{row.estLoads}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray">${(row.grossMargin).toLocaleString()}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">${(row.estNetProfit).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout variant="warning" title="Scenario 1 Result">
          <p>
            With Patrick alone at perfect execution: <strong>~$69K monthly profit by December.</strong>
          </p>
          <p className="mt-sm">
            This MISSES the $100K target by approximately $31K. And this assumes zero bad months, zero churn above baseline, and Patrick maintaining 5 customers/month for 12 straight months—unrealistic. Actual result likely $55K-65K.
          </p>
        </Callout>
      </Card>

      <Card title="Scenario 2: With Planned Hires">
        <p className="text-sm text-bb-dark-gray mb-md">
          What happens if we hire based on performance triggers (Rep #2 in May, Rep #3 in August, Ops Support in June)?
        </p>
        <div className="overflow-x-auto mb-md">
          <table className="w-full text-xs">
            <thead className="bg-bb-button text-bb-white">
              <tr>
                <th className="text-left px-md py-sm font-semibold">Month</th>
                <th className="text-center px-md py-sm font-semibold">Sales Capacity</th>
                <th className="text-center px-md py-sm font-semibold">New Customers</th>
                <th className="text-center px-md py-sm font-semibold">Total Active</th>
                <th className="text-center px-md py-sm font-semibold">Est. Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {scenario2.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-bb-white' : 'bg-bb-light-gray'}>
                  <td className="px-md py-sm text-bb-dark-gray font-medium">{row.month}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray text-xs">{row.totalActive > 30 ? '2-3 reps' : '1-2 reps'}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray">{row.newCustomers}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray">{row.totalActive}</td>
                  <td className="text-center px-md py-sm text-bb-dark-gray font-semibold">${(row.estNetProfit).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout variant="success" title="Scenario 2 Result">
          <p>
            With performance-triggered hires: <strong>$102K monthly profit by December</strong> with buffer for churn and execution variance.
          </p>
          <p className="mt-sm">
            The investment in additional sales capacity pays for itself within 60-90 days of each hire reaching productivity.
          </p>
        </Callout>
      </Card>

      <GrowthTrajectoryChart />

      <ScenarioComparisonChart />

      <Card title="Break-Even Analysis for Hires">
        <Table
          headers={['Hire', 'Monthly Cost', 'Break-Even Production', 'Target Production', 'Payback Period']}
          rows={[
            ['Sales Rep #2', '$6,000', '3 customers/month', '4-5 customers/month', '60 days after ramp'],
            ['Sales Rep #3', '$6,000', '3 customers/month', '4-5 customers/month', '60 days after ramp'],
            ['Ops Coordinator', '$3,500', 'Support 60+ loads', 'Support 100+ loads', 'Immediate (enables scale)'],
          ]}
        />
        <Callout variant="info" title="Hiring Math">
          Each new sales rep generates 40-60x their monthly cost in customer value. Each Ops Coordinator enables David to scale from 150 to 250+ loads/month without burning out, unlocking operational capacity.
        </Callout>
      </Card>

      <Card title="Key Financial Drivers">
        <div className="space-y-md">
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Customer Acquisition Cost (CAC)</h4>
            <p className="text-sm text-bb-dark-gray">
              At ~$500/month in sales team costs (salaries divided by customers acquired), each customer represents 20-30x ROI in first-year margin alone.
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Customer Lifetime Value (CLV)</h4>
            <p className="text-sm text-bb-dark-gray">
              A retained customer generates ~$38K in first-year margin, $15K-20K in year 2+. Retention focus is critical—losing a customer eliminates 3 months of acquisition cost savings.
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">Margin Protection</h4>
            <p className="text-sm text-bb-dark-gray">
              Every $1 increase in average margin per load = ~$480/month profit increase at full scale (480 loads × $1). Focus on pricing discipline and lane selection.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
