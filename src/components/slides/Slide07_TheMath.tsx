import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide07_TheMath() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-sm">The Math Behind It</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-2xl text-bb-slate-600 mb-2xl text-center">What 481 loads and 65-70 customers means</p>

        <div className="space-y-lg">
          <div className="bg-gradient-to-br from-bb-electric-50 to-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-navy-900 mb-md">Monthly Volume Target</h3>
            <p className="text-lg text-bb-slate-700 mb-lg">
              481 loads/month means 7.2 loads per active customer on average. Some customers will do 15-20 loads, some will do 2-3. This is achievable with the right mix.
            </p>
            <div className="grid grid-cols-3 gap-md">
              <StatCard label="Loads/Month" value="481" size="lg" />
              <StatCard label="Avg Loads/Customer" value="7.2" size="lg" />
              <StatCard label="Gross Margin" value="$100K" highlight size="lg" />
            </div>
          </div>

          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-electric-700 mb-md">Customer Acquisition Pace</h3>
            <p className="text-lg text-bb-slate-700 mb-lg">
              We need to add ~5 new customers per month. Starting with 9 active customers in January, we reach 65-70 by December.
            </p>
            <div className="grid grid-cols-3 gap-md">
              <StatCard label="New Customers/Month" value="5" highlight size="lg" />
              <StatCard label="Starting Base" value="9" size="lg" />
              <StatCard label="Ending Base" value="65-70" highlight size="lg" />
            </div>
          </div>

          <div className="text-center text-lg text-bb-slate-700 mt-lg">
            <p className="font-semibold">The foundation exists. We just need to scale systematically.</p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
