import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide06_Goal() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-2xl text-center">The Goal</h2>

        <div className="mb-3xl">
          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-2xl rounded-lg text-center mb-2xl">
            <h3 className="text-3xl font-bold text-bb-cyan mb-lg">December 31, 2026</h3>
            <p className="text-2xl text-bb-dark-gray mb-2xl">We are profitable at</p>
            <div className="text-7xl font-bold text-bb-cyan mb-lg">$100K</div>
            <p className="text-2xl text-bb-dark-gray">monthly profit</p>
          </div>

          <div className="grid grid-cols-2 gap-lg">
            <StatCard label="Monthly Loads" value="420" size="xl" />
            <StatCard label="Active Customers" value="65-70" highlight size="xl" />
          </div>
        </div>

        <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg text-center">
          <p className="text-lg text-bb-dark-gray mb-md">
            This is the target. Everything in this presentation exists to achieve it.
          </p>
          <p className="text-lg font-semibold text-bb-black">
            Not $90K. Not $85K. $100K or better.
          </p>
        </div>
      </div>
    </Slide>
  )
}
