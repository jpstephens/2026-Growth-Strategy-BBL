import Slide from '../layout/Slide'

export default function Slide04_Opportunity() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">The Opportunity</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-2xl text-bb-slate-700 mb-2xl text-center">The math is simple and proven</p>

        <div className="mb-2xl">
          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl mb-lg text-center shadow-lg">
            <p className="text-lg text-bb-slate-700 mb-md">We know:</p>
            <div className="text-2xl font-bold text-bb-navy-900 mb-md">
              $208 avg margin/load × 420 loads/month = $87,360 monthly profit
            </div>
            <p className="text-lg text-bb-slate-700">
              This isn't theoretical. We've proven the unit economics. We've proven customers will pay it.
            </p>
          </div>

          <div className="bg-white border-2 border-bb-electric-500 p-lg rounded-2xl text-center shadow-lg">
            <p className="text-lg text-bb-slate-700 mb-md">To get there, we need:</p>
            <div className="text-2xl font-bold text-bb-electric-700">
              481 loads across 65-70 customers
            </div>
            <p className="text-lg text-bb-slate-700 mt-md">
              Not a lottery. Not a gamble. A systematic execution of a known model.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-bb-navy-900">
            This is what $100K monthly profit looks like.
          </p>
        </div>
      </div>
    </Slide>
  )
}
