import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { currentTeam } from '../../data/teamStructure'

export default function Slide17_CurrentTeam() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Current Team</h2>
        <p className="text-xl text-bb-dark-gray text-center mb-lg">5 people. Clear roles. Proven track record.</p>

        <div className="space-y-md">
          {currentTeam.map((member, idx) => (
            <div key={idx} className="rounded-lg border-2 border-bb-border bg-bb-light-gray p-lg">
              <div className="flex items-start justify-between mb-sm">
                <div>
                  <p className="font-bold text-bb-black text-lg">{member.name}</p>
                  <p className="text-sm font-semibold text-bb-cyan">{member.role}</p>
                </div>
                <p className="text-xs text-bb-dark-gray bg-white px-sm py-xs rounded">{member.location}</p>
              </div>
              <p className="text-sm text-bb-dark-gray">
                {member.responsibilities}
              </p>
            </div>
          ))}
        </div>

        <Callout variant="info" title="2026 Team Philosophy">
          <p className="mb-sm">
            Current team is lean but sufficient for Q1-Q2. Strategic hires in Q2-Q4 based on proven production:
          </p>
          <ul className="space-y-xs">
            <li>• <strong>Rep #2:</strong> When Patrick sustains 4+ customers/month</li>
            <li>• <strong>Ops Coordinator:</strong> When David has 150+ loads/month</li>
            <li>• <strong>Rep #3 & #4:</strong> When pipelines overflow and team can't handle demand</li>
          </ul>
          <p className="mt-sm text-xs italic">
            No hires without proof of need. Every new person must earn their seat through performance triggers.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
