import Slide from '../layout/Slide'
import { accountability } from '../../data/teamStructure'

export default function Slide19_Accountability() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Accountability Matrix</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Who owns what. Who supports who.</p>

        <div className="space-y-md">
          {accountability.map((item, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-cyan bg-blue-50 p-lg">
              <p className="font-bold text-bb-black text-lg mb-sm">{item.outcome}</p>
              <div className="space-y-xs text-sm">
                <div>
                  <p className="text-bb-cyan font-semibold">Owner:</p>
                  <p className="text-bb-black">{item.owner}</p>
                </div>
                <div>
                  <p className="text-bb-dark-gray font-semibold">Support:</p>
                  <p className="text-bb-dark-gray">{item.support}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-sm text-bb-dark-gray">
            <strong>Principle:</strong> One person owns each outcome. Clear accountability means no finger-pointing, fast decision-making, and transparent results. Support roles assist but don't dilute ownership.
          </p>
        </div>
      </div>
    </Slide>
  )
}
