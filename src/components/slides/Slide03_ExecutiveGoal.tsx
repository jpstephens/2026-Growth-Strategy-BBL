import Slide from '../layout/Slide'
import MetricGrid from './MetricGrid'
import Callout from '../content/Callout'

export default function Slide03_ExecutiveGoal() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">The Goal</h2>

        <div className="space-y-xl">
          <div className="text-center">
            <p className="text-2xl text-bb-dark-gray mb-lg">By December 31, 2026:</p>
          </div>

          <MetricGrid
            metrics={[
              { label: 'Active Customers', value: '65-70', highlight: true, icon: '👥' },
              { label: 'Monthly Loads', value: '420+', highlight: true, icon: '📦' },
              { label: 'Monthly Gross Margin', value: '$87k+', highlight: true, icon: '💰' },
              { label: 'Monthly Net Profit', value: '$69k+', highlight: true, icon: '📈' },
            ]}
            columns={2}
          />

          <Callout variant="success" title="Why These Numbers Matter">
            <div className="space-y-sm">
              <p>
                <strong>65-70 customers:</strong> Provides diversification (no single customer {'>'} 15%), reduces concentration risk, creates sustainable growth
              </p>
              <p>
                <strong>420+ monthly loads:</strong> Represents ~13-14 loads per customer on average, demonstrating real stickiness and volume
              </p>
              <p>
                <strong>$87k monthly margin:</strong> 14x current monthly profit, transforming BlackBridge from struggling startup to profitable mid-market player
              </p>
              <p>
                <strong>$69k net profit:</strong> Sustainable without additional capital, enables reinvestment and owner returns
              </p>
            </div>
          </Callout>

          <div className="bg-bb-light-gray rounded-lg p-lg border border-bb-border text-center">
            <p className="text-sm text-bb-dark-gray">
              This is NOT aggressive growth. It's disciplined scaling of what already works.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
