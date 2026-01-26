import Slide from '../layout/Slide'

export default function Slide03_TheProblem() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            One Problem Is Holding Us Back
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto">
            Right now, Patrick is doing two jobs at once. He can't sell AND run operations. Something has to give.
          </p>
        </div>

        {/* What This Creates */}
        <div className="bg-gradient-to-br from-bb-burgundy-50 to-white rounded-2xl border-2 border-bb-burgundy-400 p-2xl shadow-lg">
          <div className="flex items-center gap-md mb-xl">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bb-burgundy-500 to-bb-burgundy-600 flex items-center justify-center text-white text-xl font-bold">
              ⚠
            </div>
            <h3 className="text-2xl font-bold text-bb-burgundy-700">What This Creates</h3>
          </div>
          <ul className="space-y-lg">
            <li className="flex items-start gap-lg">
              <span className="text-bb-burgundy-600 font-bold text-2xl shrink-0 -mt-1">✗</span>
              <span className="text-lg text-bb-slate-700">No clear owner for new customer acquisition—operations work interrupts sales</span>
            </li>
            <li className="flex items-start gap-lg">
              <span className="text-bb-burgundy-600 font-bold text-2xl shrink-0 -mt-1">✗</span>
              <span className="text-lg text-bb-slate-700">Reactive firefighting replaces proactive prospecting</span>
            </li>
            <li className="flex items-start gap-lg">
              <span className="text-bb-burgundy-600 font-bold text-2xl shrink-0 -mt-1">✗</span>
              <span className="text-lg text-bb-slate-700">Only 0-50 calls/week instead of 200+ needed for growth</span>
            </li>
            <li className="flex items-start gap-lg">
              <span className="text-bb-burgundy-600 font-bold text-2xl shrink-0 -mt-1">✗</span>
              <span className="text-lg text-bb-slate-700">1 new customer/month instead of 4-5 needed</span>
            </li>
          </ul>
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-br from-bb-sunset-50 to-white rounded-2xl border-2 border-bb-sunset-400 p-2xl shadow-lg">
          <div className="flex items-center gap-md mb-xl">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 flex items-center justify-center text-white text-xl font-bold">
              📊
            </div>
            <h3 className="text-2xl font-bold text-bb-sunset-700">The Fix Is Simple</h3>
          </div>
          <div className="space-y-lg">
            <p className="text-lg text-bb-slate-700 leading-relaxed">
              We need to fix this one structural problem. Everything else will follow.
            </p>
            <div className="h-px bg-bb-sunset-200" />
            <p className="text-xl font-bold text-bb-sunset-900 leading-relaxed">
              <span className="text-bb-electric-600">Separate the roles.</span> David owns operations. Patrick owns sales. That's it.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
