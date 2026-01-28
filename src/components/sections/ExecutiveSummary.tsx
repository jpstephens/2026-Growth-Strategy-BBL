import Section from '../content/Section'
import Card from '../content/Card'
import MetricCard from '../content/MetricCard'
import Callout from '../content/Callout'

export default function ExecutiveSummary() {
  return (
    <Section title="Executive Summary">
      <div className="space-y-lg">
        <Callout variant="info" title="Core Thesis">
          <p>
            BlackBridge has proven product-market fit with $216,247 in gross margin across 819 loads. The constraint is not the market or the service—it's sales capacity. Patrick is structurally prevented from selling due to operational demands. Fix that, and the path to $100K monthly profit becomes execution, not experimentation.
          </p>
        </Callout>

        <Card title="The Goal">
          <p className="text-base text-bb-dark-gray mb-md">
            <strong className="text-bb-black">DECEMBER 2026 TARGET: $100,000</strong> net profit per month from freight brokerage operations.
          </p>
          <p className="text-base text-bb-dark-gray">
            This is not revenue—this is profit after paying carriers, team, and overhead. It requires approximately $670,000 in monthly gross revenue, or 481 loads per month at $208 average margin.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          <MetricCard label="Current Monthly Profit" value="$11,000" highlight />
          <MetricCard label="Target Monthly Profit" value="$100,000" />
          <MetricCard label="Growth Multiple" value="9x" />
          <MetricCard label="Target Avg Margin" value="$208" />
          <MetricCard label="Required Monthly Loads" value="481" />
          <MetricCard label="Current Monthly Loads" value="71" />
        </div>

        <Card>
          <h3 className="text-h3 mb-md">Why This Plan Works</h3>
          <ul className="space-y-sm text-base text-bb-dark-gray">
            <li className="flex gap-md">
              <span className="text-bb-cyan font-bold flex-shrink-0">✓</span>
              <span><strong>Proven model:</strong> The $208 target margin is achievable based on 819 loads of historical data</span>
            </li>
            <li className="flex gap-md">
              <span className="text-bb-cyan font-bold flex-shrink-0">✓</span>
              <span><strong>Clear bottleneck:</strong> We know exactly what's preventing growth—role confusion and lack of sales capacity</span>
            </li>
            <li className="flex gap-md">
              <span className="text-bb-cyan font-bold flex-shrink-0">✓</span>
              <span><strong>Repeatable system:</strong> Cold calling + email + lead gen creates sustainable customer acquisition</span>
            </li>
            <li className="flex gap-md">
              <span className="text-bb-cyan font-bold flex-shrink-0">✓</span>
              <span><strong>Measured execution:</strong> Every metric is tracked, every decision is data-driven</span>
            </li>
          </ul>
        </Card>

        <Callout variant="warning" title="Success Requires">
          Patrick freed from operations | David owns 100% of ops | Sales activity at 200 dials/week | Cold email system running by mid-February | Clear role accountability | Weekly performance tracking
        </Callout>
      </div>
    </Section>
  )
}
