import Slide from '../layout/Slide'
import { callFramework } from '../../data/salesSystem'

export default function Slide27_CallFramework() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Call Framework</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">The opening matters. Hook them in 30 seconds.</p>

        <div className="space-y-md">
          {/* Opening */}
          <div className="rounded-lg border-2 border-bb-cyan bg-blue-50 p-lg">
            <p className="font-bold text-bb-black text-lg mb-sm">{callFramework.opening.title}</p>
            <div className="bg-white rounded p-md mb-sm border-l-4 border-bb-cyan">
              <p className="text-sm font-mono italic text-bb-dark-gray">"{callFramework.opening.script}"</p>
            </div>
            <ul className="space-y-xs text-sm">
              {callFramework.opening.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">✓</span>
                  <span className="text-bb-dark-gray">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hook */}
          <div className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
            <p className="font-bold text-bb-black text-lg mb-sm">{callFramework.hook.title}</p>
            <div className="bg-white rounded p-md mb-sm border-l-4 border-bb-border">
              <p className="text-sm font-mono italic text-bb-dark-gray">"{callFramework.hook.script}"</p>
            </div>
            <ul className="space-y-xs text-sm">
              {callFramework.hook.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-bb-cyan font-bold mr-sm">✓</span>
                  <span className="text-bb-dark-gray">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-lg bg-bb-light-gray rounded-lg p-lg border border-bb-border">
          <p className="text-xs text-bb-dark-gray italic">
            This isn't a "perfect script"—it's a framework. Adjust for personality. The key is: be specific to their industry, acknowledge you're interrupting, and frame the conversation around their future problem.
          </p>
        </div>
      </div>
    </Slide>
  )
}
