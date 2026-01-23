import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide26_LeadGenerationStrategy() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Lead Generation Strategy</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-2xl text-bb-slate-700 mb-2xl text-center">Why we need 25,000+ prospects across 4 industries</p>

        <div className="space-y-lg">
          {/* The Funnel */}
          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-lg text-center">The Cold Email + Cold Call Funnel</h3>
            <div className="grid grid-cols-5 gap-md text-center">
              <div className="p-md bg-white border-2 border-bb-slate-300 rounded-2xl shadow">
                <p className="text-sm text-bb-slate-700 mb-xs font-semibold">Contacts</p>
                <p className="text-2xl font-bold text-bb-navy-900">25,000</p>
                <p className="text-xs text-bb-slate-700 mt-xs">Initial list</p>
              </div>

              <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-bb-slate-700">→</p>
              </div>

              <div className="p-md bg-white border-2 border-bb-slate-300 rounded-2xl shadow">
                <p className="text-sm text-bb-slate-700 mb-xs font-semibold">Email Replies</p>
                <p className="text-2xl font-bold text-bb-electric-700">500-600</p>
                <p className="text-xs text-bb-slate-700 mt-xs">2-3% reply rate</p>
              </div>

              <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-bb-slate-700">→</p>
              </div>

              <div className="p-md bg-white border-2 border-bb-electric-400 rounded-2xl shadow">
                <p className="text-sm text-bb-slate-700 mb-xs font-semibold">Conversations</p>
                <p className="text-2xl font-bold text-bb-electric-700">200-250</p>
                <p className="text-xs text-bb-slate-700 mt-xs">Warm calls</p>
              </div>
            </div>

            <div className="mt-lg text-center">
              <p className="text-lg text-bb-slate-700 mb-sm">
                <span className="font-semibold text-bb-navy-900">200-250 conversations per year</span> →
                <span className="font-semibold text-bb-navy-900 ml-sm">40-60 deals</span> →
                <span className="font-semibold text-bb-electric-700 ml-sm">4-6 customers/month</span>
              </p>
            </div>
          </div>

          {/* The Industries */}
          <div className="bg-white border-2 border-bb-electric-400 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-md">4 Target Industries (by allocation)</h3>
            <div className="grid grid-cols-4 gap-md">
              <StatCard label="Building Products" value="25%" size="lg" highlight />
              <StatCard label="Metal Fabrication" value="30%" size="lg" highlight />
              <StatCard label="Plastics & Packaging" value="25%" size="lg" highlight />
              <StatCard label="Automotive JIT" value="20%" size="lg" highlight />
            </div>
          </div>

          {/* Why These 4 */}
          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <h3 className="text-lg font-display font-bold text-bb-navy-900 mb-md">Why These Industries?</h3>
            <p className="text-base text-bb-slate-700">
              These 4 industries have predictable freight profiles. They have regular shipments (not one-time), they ship high-value goods (can pay healthy margins), and they're fragmented enough that a regional broker can win consistent business. We have proof: current best customers come from these verticals.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 p-lg rounded-2xl shadow-lg">
            <p className="text-base text-bb-slate-700 text-center">
              <span className="font-semibold text-bb-navy-900">Action:</span> Start with 5,000 contacts across these industries in Month 1. Expand to 25,000 by Month 3 as we prove the conversion system works.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
