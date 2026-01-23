import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { escalationPaths } from '../../data/operations'

export default function Slide36_EscalationPaths() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Issue Escalation</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">Clear decision authority. Fast resolution.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-bb-dark-gray text-white">
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
                  className={`border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-bb-light-gray'}`}
                >
                  <td className="px-lg py-sm font-semibold text-bb-black">{path.issue}</td>
                  <td className="px-lg py-sm text-bb-dark-gray">{path.firstResponse}</td>
                  <td className="px-lg py-sm text-bb-dark-gray">{path.escalateTo}</td>
                  <td className="px-lg py-sm font-semibold text-bb-cyan">{path.finalAuthority}</td>
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
