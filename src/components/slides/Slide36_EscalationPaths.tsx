import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { escalationPaths } from '../../data/operations'

export default function Slide36_EscalationPaths() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-2xl">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-md">Issue Escalation</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">Clear decision authority. Fast resolution.</p>

        <div className="overflow-x-auto mb-2xl">
          <table className="w-full text-sm">
            <thead className="bg-bb-navy-900 text-white">
              <tr>
                <th className="px-lg py-sm text-left font-semibold">Issue Type</th>
                <th className="px-lg py-sm text-left font-semibold">First Response</th>
                <th className="px-lg py-sm text-left font-semibold">Escalate To</th>
                <th className="px-lg py-sm text-left font-semibold">Final Authority</th>
              </tr>
            </thead>
            <tbody>
              {escalationPaths.map((path, idx) => (
                <tr
                  key={idx}
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-navy-900">{path.issue}</td>
                  <td className="px-lg py-sm text-bb-slate-700">{path.firstResponse}</td>
                  <td className="px-lg py-sm text-bb-slate-700">{path.escalateTo}</td>
                  <td className="px-lg py-sm font-semibold text-bb-electric-700">{path.finalAuthority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout variant="info" title="Principle">
          <p>
            David handles 99% of issues. Vin handles operational escalations and carrier decisions. Chris handles customer relationship issues. Jason handles major claims and financial decisions.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
