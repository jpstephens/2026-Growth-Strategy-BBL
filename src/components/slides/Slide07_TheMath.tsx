import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide07_TheMath() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">The Math Behind It</h2>
        <p className="text-2xl text-bb-dark-gray mb-2xl text-center">What 481 loads and 65-70 customers means</p>

        <div className="space-y-lg">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">Monthly Volume Target</h3>
            <p className="text-lg text-bb-dark-gray mb-lg">
              481 loads/month means 7.2 loads per active customer on average. Some customers will do 15-20 loads, some will do 2-3. This is achievable with the right mix.
            </p>
            <div className="grid grid-cols-3 gap-md">
              <StatCard label="Loads/Month" value="481" size="lg" />
              <StatCard label="Avg Loads/Customer" value="7.2" size="lg" />
              <StatCard label="Gross Margin" value="$100K" highlight size="lg" />
            </div>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-cyan mb-md">Customer Acquisition Pace</h3>
            <p className="text-lg text-bb-dark-gray mb-lg">
              We need to add ~5 new customers per month. Starting with 9 active customers in January, we reach 65-70 by December.
            </p>
            <div className="grid grid-cols-3 gap-md">
              <StatCard label="New Customers/Month" value="5" highlight size="lg" />
              <StatCard label="Starting Base" value="9" size="lg" />
              <StatCard label="Ending Base" value="65-70" highlight size="lg" />
            </div>
          </div>

          <div className="text-center text-lg text-bb-dark-gray mt-lg">
            <p className="font-semibold">The foundation exists. We just need to scale systematically.</p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
