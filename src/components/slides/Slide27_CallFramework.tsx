import Slide from '../layout/Slide'
import { callFramework } from '../../data/salesSystem'

export default function Slide27_CallFramework() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold font-display text-bb-navy-900 mb-md text-center">Call Framework</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">The opening matters. Hook them in 30 seconds.</p>

        <div className="space-y-md">
          {/* Opening */}
          <div className="rounded-2xl border-2 border-bb-electric-300 bg-white p-lg shadow-lg">
            <p className="font-bold text-bb-navy-900 text-lg mb-sm">{callFramework.opening.title}</p>
            <div className="bg-bb-slate-50 rounded-lg p-md mb-sm border-l-4 border-bb-electric-500">
              <p className="text-sm font-mono italic text-bb-slate-700">"{callFramework.opening.script}"</p>
            </div>
            <ul className="space-y-xs text-sm">
              {callFramework.opening.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                  <span className="text-bb-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hook */}
          <div className="rounded-2xl border-2 border-bb-slate-300 bg-white p-lg shadow-lg">
            <p className="font-bold text-bb-navy-900 text-lg mb-sm">{callFramework.hook.title}</p>
            <div className="bg-bb-slate-50 rounded-lg p-md mb-sm border-l-4 border-bb-slate-400">
              <p className="text-sm font-mono italic text-bb-slate-700">"{callFramework.hook.script}"</p>
            </div>
            <ul className="space-y-xs text-sm">
              {callFramework.hook.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-bb-electric-700 font-bold mr-sm">✓</span>
                  <span className="text-bb-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-2xl bg-white rounded-2xl p-lg border-2 border-bb-slate-300 shadow-lg">
          <p className="text-xs text-bb-slate-700 italic">
            This isn't a "perfect script"—it's a framework. Adjust for personality. The key is: be specific to their industry, acknowledge you're interrupting, and frame the conversation around their future problem.
          </p>
        </div>
      </div>
    </Slide>
  )
}
