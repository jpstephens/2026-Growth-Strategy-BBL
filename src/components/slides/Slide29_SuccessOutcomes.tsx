import Slide from '../layout/Slide'
import { successOutcomes } from '../../data/salesSystem'

export default function Slide29_SuccessOutcomes() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Success Outcomes</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Not all wins look like sales. Track them all.</p>

        <div className="space-y-sm mb-2xl">
          {successOutcomes.map((item, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-green bg-green-50 p-md shadow-lg">
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <div className="flex-grow">
                  <p className="font-semibold text-bb-navy-900 mb-xs">{item.outcome}</p>
                  <p className="text-sm text-bb-slate-700 mb-xs">
                    <strong>Why it matters:</strong> {item.whyWin}
                  </p>
                  <p className="text-sm text-bb-green font-semibold">
                    Next: {item.nextStep}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-lg border-2 border-bb-slate-300 shadow-lg">
          <p className="text-sm text-bb-slate-700">
            <strong>Key Insight:</strong> Every conversation plants a seed. Document everything in HubSpot. A "no" today becomes a "yes" in 30 days with the right follow-up sequence.
          </p>
        </div>
      </div>
    </Slide>
  )
}
