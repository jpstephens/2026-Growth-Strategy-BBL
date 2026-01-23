import Slide from '../layout/Slide'
import StatCard from '../content/StatCard'

export default function Slide26_LeadGenerationStrategy() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Lead Generation Strategy</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Why we need 25,000+ prospects across 4 industries</p>

        <div className="space-y-lg">
          {/* The Funnel */}
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-lg text-center">The Cold Email + Cold Call Funnel</h3>
            <div className="grid grid-cols-5 gap-md text-center">
              <div className="p-md bg-white border border-bb-border rounded">
                <p className="text-sm text-bb-dark-gray mb-xs font-semibold">Contacts</p>
                <p className="text-2xl font-bold text-bb-black">25,000</p>
                <p className="text-xs text-bb-dark-gray mt-xs">Initial list</p>
              </div>

              <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-bb-dark-gray">→</p>
              </div>

              <div className="p-md bg-white border border-bb-border rounded">
                <p className="text-sm text-bb-dark-gray mb-xs font-semibold">Email Replies</p>
                <p className="text-2xl font-bold text-bb-cyan">500-600</p>
                <p className="text-xs text-bb-dark-gray mt-xs">2-3% reply rate</p>
              </div>

              <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-bb-dark-gray">→</p>
              </div>

              <div className="p-md bg-blue-50 border-2 border-bb-cyan rounded">
                <p className="text-sm text-bb-dark-gray mb-xs font-semibold">Conversations</p>
                <p className="text-2xl font-bold text-bb-cyan">200-250</p>
                <p className="text-xs text-bb-dark-gray mt-xs">Warm calls</p>
              </div>
            </div>

            <div className="mt-lg text-center">
              <p className="text-lg text-bb-dark-gray mb-sm">
                <span className="font-semibold text-bb-black">200-250 conversations per year</span> →
                <span className="font-semibold text-bb-black ml-sm">40-60 deals</span> →
                <span className="font-semibold text-bb-cyan ml-sm">4-6 customers/month</span>
              </p>
            </div>
          </div>

          {/* The Industries */}
          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-md">4 Target Industries (by allocation)</h3>
            <div className="grid grid-cols-4 gap-md">
              <StatCard label="Building Products" value="25%" size="lg" highlight />
              <StatCard label="Metal Fabrication" value="30%" size="lg" highlight />
              <StatCard label="Plastics & Packaging" value="25%" size="lg" highlight />
              <StatCard label="Automotive JIT" value="20%" size="lg" highlight />
            </div>
          </div>

          {/* Why These 4 */}
          <div className="bg-white border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-lg font-bold text-bb-black mb-md">Why These Industries?</h3>
            <p className="text-base text-bb-dark-gray">
              These 4 industries have predictable freight profiles. They have regular shipments (not one-time), they ship high-value goods (can pay healthy margins), and they're fragmented enough that a regional broker can win consistent business. We have proof: current best customers come from these verticals.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 p-lg rounded-lg">
            <p className="text-base text-bb-dark-gray text-center">
              <span className="font-semibold text-bb-black">Action:</span> Start with 5,000 contacts across these industries in Month 1. Expand to 25,000 by Month 3 as we prove the conversion system works.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
