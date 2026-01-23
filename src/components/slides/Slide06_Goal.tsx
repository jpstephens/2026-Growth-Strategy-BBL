import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide06_Goal() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">The Goal</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>

        <div className="mb-2xl">
          <div className="bg-white border-2 border-bb-electric-500 p-2xl rounded-2xl text-center mb-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-bb-electric-700 mb-lg font-display">December 31, 2026</h3>
            <p className="text-2xl text-bb-slate-700 mb-2xl">We are profitable at</p>
            <div className="text-7xl font-bold text-bb-electric-700 mb-lg">$100K</div>
            <p className="text-2xl text-bb-slate-700">monthly profit</p>
          </div>

          <div className="grid grid-cols-2 gap-lg">
            <StatCard label="Monthly Loads" value="420" size="xl" />
            <StatCard label="Active Customers" value="65-70" highlight size="xl" />
          </div>
        </div>

        <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl text-center shadow-lg">
          <p className="text-lg text-bb-slate-700 mb-md">
            This is the target. Everything in this presentation exists to achieve it.
          </p>
          <p className="text-lg font-semibold text-bb-navy-900">
            Not $90K. Not $85K. $100K or better.
          </p>
        </div>
      </div>
    </Slide>
  )
}
