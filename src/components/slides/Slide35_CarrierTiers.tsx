import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { carrierTiers } from '../../data/operations'

export default function Slide35_CarrierTiers() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl space-y-2xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-display font-bold text-bb-navy-900 mb-md">Carrier Tier System</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">Merit-based. Performance-tracked. Strategic relationship building.</p>
        </div>

        {/* Tiers */}
        <div className="space-y-md">
          {carrierTiers.map((tier, idx) => (
            <div key={idx} className={`rounded-2xl border-2 p-lg shadow-lg ${
              idx === 0
                ? 'border-bb-green bg-green-50'
                : idx === 1
                  ? 'border-bb-electric-300 bg-white'
                  : idx === 2
                    ? 'border-bb-slate-300 bg-white'
                    : 'border-red-500 bg-red-50'
            }`}>
              <p className="font-bold text-bb-navy-900 text-lg mb-md">{tier.tier}</p>
              <div className="space-y-sm">
                <div>
                  <p className="text-xs font-semibold text-bb-slate-700">Criteria:</p>
                  <p className="text-sm text-bb-slate-700">{tier.criteria}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-bb-slate-700">Treatment:</p>
                  <p className="text-sm text-bb-slate-700">{tier.treatment}</p>
                </div>
                <div className="pt-sm border-t border-bb-slate-300">
                  <p className="text-xs font-semibold text-bb-slate-700">Action:</p>
                  <p className="text-sm font-semibold text-bb-navy-900">{tier.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mb-2xl">
          <Callout variant="info" title="Carrier Development Strategy">
            <p className="mb-sm">
              Good carriers are rare and valuable. The goal is to:
            </p>
            <ul className="space-y-xs text-sm">
              <li>• Identify reliable carriers early (Trial tier)</li>
              <li>• Promote proven performers (Proven → Preferred)</li>
              <li>• Build direct relationships for preferred lanes</li>
              <li>• Lock in best carriers before competitors do</li>
            </ul>
          </Callout>
        </div>
      </div>
    </Slide>
  )
}
