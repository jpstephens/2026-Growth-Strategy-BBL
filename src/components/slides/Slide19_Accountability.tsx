import Slide from '../layout/Slide'
import { accountability } from '../../data/teamStructure'

export default function Slide19_Accountability() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold font-display text-bb-navy-900 mb-md text-center">Accountability Matrix</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Who owns what. Who supports who.</p>

        <div className="space-y-md">
          {accountability.map((item, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-electric-300 bg-white p-lg shadow-lg">
              <p className="font-bold text-bb-navy-900 text-lg mb-sm">{item.outcome}</p>
              <div className="space-y-xs text-sm">
                <div>
                  <p className="text-bb-electric-700 font-semibold">Owner:</p>
                  <p className="text-bb-navy-900">{item.owner}</p>
                </div>
                <div>
                  <p className="text-bb-slate-700 font-semibold">Support:</p>
                  <p className="text-bb-slate-700">{item.support}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2xl bg-white rounded-2xl p-lg border-2 border-bb-slate-300 shadow-lg">
          <p className="text-sm text-bb-slate-700">
            <strong>Principle:</strong> One person owns each outcome. Clear accountability means no finger-pointing, fast decision-making, and transparent results. Support roles assist but don't dilute ownership.
          </p>
        </div>
      </div>
    </Slide>
  )
}
