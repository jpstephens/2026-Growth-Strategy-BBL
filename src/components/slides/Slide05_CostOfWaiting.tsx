import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide05_CostOfWaiting() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">The Cost of Waiting</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Early customer acquisition has massive impact. Timing matters.</p>

        <div className="space-y-lg">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-xl font-bold text-bb-black mb-md">End of 2026 at Current Pace (75 loads/month)</h3>
            <div className="grid grid-cols-3 gap-md">
              <StatCard label="Monthly Profit" value="$12K" size="lg" />
              <StatCard label="Customers" value="7-9" size="lg" />
              <StatCard label="Annual Profit" value="$144K" size="lg" />
            </div>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <h3 className="text-xl font-bold text-bb-cyan mb-md">End of 2026 with This Strategy (420 loads/month)</h3>
            <div className="grid grid-cols-3 gap-md">
              <StatCard label="Monthly Profit" value="$87K" highlight size="lg" />
              <StatCard label="Customers" value="65-70" highlight size="lg" />
              <StatCard label="Annual Profit" value="$1.04M" highlight size="lg" />
            </div>
          </div>

          <div className="text-center mt-2xl">
            <p className="text-2xl font-bold text-bb-black mb-md">
              Delta: $900K annual profit left on the table
            </p>
            <p className="text-lg text-bb-dark-gray">
              Every month we wait, we miss $75K in unrealized profit.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
