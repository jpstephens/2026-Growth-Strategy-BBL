import Slide from '../layout/Slide'
import Callout from '../content/Callout'

export default function Slide02_ExecutiveThesis() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-3xl">
        {/* Hero Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            We've Already Proven This Works
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600 max-w-3xl mx-auto leading-relaxed">
            We have customers ready to buy. We just need more people selling.
          </p>
        </div>

        {/* Foundation Callout */}
        <Callout variant="success" title="What We've Proven" size="lg">
          <p className="text-lg leading-relaxed">
            BlackBridge has shipped 774 loads with $160K in gross margin. We have real customers, real revenue, and real margins. The unit economics work: $200+ profit per load. This is proven. We're ready to scale.
          </p>
        </Callout>

        {/* What We Know Works - Card Grid */}
        <div className="bg-white rounded-2xl border-2 border-bb-navy-200 p-2xl shadow-xl">
          <h2 className="text-h2 font-display font-bold text-bb-navy-900 mb-xl">
            What We Know Works
          </h2>
          <div className="grid grid-cols-3 gap-xl">
            {/* Item 1 */}
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs text-lg">Profitable Unit Economics</p>
                <p className="text-sm text-bb-slate-600">$200+ margin per load proven across 774 loads</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs text-lg">Repeatable Sales Process</p>
                <p className="text-sm text-bb-slate-600">Patrick converts prospects to customers consistently</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start gap-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0">
                ✓
              </div>
              <div>
                <p className="font-semibold text-bb-navy-900 mb-xs text-lg">Scalable Operations</p>
                <p className="text-sm text-bb-slate-600">David executes load delivery and carrier management reliably</p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem/Solution Card */}
        <div className="bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 rounded-2xl p-2xl shadow-2xl border-2 border-bb-sunset-400">
          <div className="space-y-lg text-white">
            <div>
              <div className="inline-block px-lg py-sm bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-sm mb-md">
                🔴 THE PROBLEM
              </div>
              <p className="text-lg leading-relaxed">
                We're doing 75 loads/month with 7 customers because <span className="font-bold">Patrick does both sales AND operations</span>. That role conflict limits growth.
              </p>
            </div>
            <div className="h-px bg-white/20" />
            <div>
              <div className="inline-block px-lg py-sm bg-bb-emerald-500 rounded-full text-white font-bold text-sm mb-md">
                ✓ THE SOLUTION
              </div>
              <p className="text-lg font-semibold">
                Fix the structural constraint. Separate roles. Run the system at full capacity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
