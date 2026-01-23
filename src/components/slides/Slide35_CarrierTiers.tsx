import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { carrierTiers } from '../../data/operations'

export default function Slide35_CarrierTiers() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Carrier Tier System</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Merit-based. Performance-tracked. Strategic relationship building.</p>

        <div className="space-y-md">
          {carrierTiers.map((tier, idx) => (
            <div key={idx} className={`rounded-lg border-2 p-lg ${
              idx === 0
                ? 'border-bb-green bg-green-50'
                : idx === 1
                  ? 'border-bb-cyan bg-blue-50'
                  : idx === 2
                    ? 'border-bb-border bg-bb-light-gray'
                    : 'border-red-500 bg-red-50'
            }`}>
              <p className="font-bold text-bb-black text-lg mb-md">{tier.tier}</p>
              <div className="space-y-sm">
                <div>
                  <p className="text-xs font-semibold text-bb-dark-gray">Criteria:</p>
                  <p className="text-sm text-bb-dark-gray">{tier.criteria}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-bb-dark-gray">Treatment:</p>
                  <p className="text-sm text-bb-dark-gray">{tier.treatment}</p>
                </div>
                <div className="pt-sm border-t border-current">
                  <p className="text-xs font-semibold text-bb-dark-gray">Action:</p>
                  <p className="text-sm font-semibold text-bb-black">{tier.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
    </Slide>
  )
}
