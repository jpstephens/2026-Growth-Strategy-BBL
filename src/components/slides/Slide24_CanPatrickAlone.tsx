import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide24_CanPatrickAlone() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Can Patrick Alone Hit $100K Monthly Profit?</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Let's do the math</p>

        <div className="space-y-lg">
          {/* Scenario 1: Patrick Alone */}
          <div className="bg-red-50 border-2 border-red-300 p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-red-700 mb-md">❌ Scenario 1: Patrick Alone (Current System)</h3>
            <p className="text-lg text-bb-dark-gray mb-md">
              Even with the three structural changes, Patrick has limits. One person can only make so many calls, close so many deals, and manage so many accounts.
            </p>
            <div className="grid grid-cols-4 gap-md mb-md">
              <StatCard label="Calls/Week" value="200" size="lg" />
              <StatCard label="New Customers/Month" value="4-5" size="lg" />
              <StatCard label="Loads/Month" value="350" size="lg" />
              <StatCard label="Monthly Profit" value="$69K" size="lg" />
            </div>
            <p className="text-lg font-semibold text-red-700">
              Result: MISSES goal by $31K/month
            </p>
          </div>

          {/* Scenario 2: With Hires */}
          <div className="bg-green-50 border-2 border-green-300 p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-md">✅ Scenario 2: With Strategic Hires</h3>
            <p className="text-lg text-bb-dark-gray mb-md">
              We hire Rep #2 when Patrick proves the system works (4+ customers/month for 2 consecutive months). Then Rep #3 if needed. Ops coordinator supports volume.
            </p>
            <div className="grid grid-cols-4 gap-md mb-md">
              <StatCard label="Calls/Week" value="400+" size="lg" highlight />
              <StatCard label="New Customers/Month" value="8-10" size="lg" highlight />
              <StatCard label="Loads/Month" value="480+" size="lg" highlight />
              <StatCard label="Monthly Profit" value="$102K" size="lg" highlight />
            </div>
            <p className="text-lg font-semibold text-green-700">
              Result: EXCEEDS goal by $2K/month
            </p>
          </div>

          {/* Key Insight */}
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg mt-lg">
            <p className="text-lg text-bb-dark-gray">
              <span className="font-semibold text-bb-black">Key Insight:</span> The system Patrick builds in Q1 is repeatable. Once we prove it works, we scale it by adding salespeople. We don't hire based on projection—we hire based on proven results.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
