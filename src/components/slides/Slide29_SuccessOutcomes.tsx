import Slide from '../layout/Slide'
import { successOutcomes } from '../../data/salesSystem'

export default function Slide29_SuccessOutcomes() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Success Outcomes</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Not all wins look like sales. Track them all.</p>

        <div className="space-y-sm">
          {successOutcomes.map((item, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-green bg-green-50 p-md">
              <div className="flex items-start gap-md">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <div className="flex-grow">
                  <p className="font-semibold text-bb-black mb-xs">{item.outcome}</p>
                  <p className="text-sm text-bb-dark-gray mb-xs">
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

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-sm text-bb-dark-gray">
            <strong>Key Insight:</strong> Every conversation plants a seed. Document everything in HubSpot. A "no" today becomes a "yes" in 30 days with the right follow-up sequence.
          </p>
        </div>
      </div>
    </Slide>
  )
}
