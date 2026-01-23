import Slide from '../layout/Slide'
import Callout from '../content/Callout'
import { currentTeam } from '../../data/teamStructure'

export default function Slide17_CurrentTeam() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold font-display text-bb-navy-900 mb-md text-center">Current Team</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
        <p className="text-xl text-bb-slate-700 text-center mb-2xl">5 people. Clear roles. Proven track record.</p>

        <div className="space-y-md">
          {currentTeam.map((member, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-slate-300 bg-white p-lg shadow-lg">
              <div className="flex items-start justify-between mb-sm">
                <div>
                  <p className="font-bold text-bb-navy-900 text-lg">{member.name}</p>
                  <p className="text-sm font-semibold text-bb-electric-700">{member.role}</p>
                </div>
                <p className="text-xs text-bb-slate-600 bg-bb-slate-100 px-sm py-xs rounded">{member.location}</p>
              </div>
              <p className="text-sm text-bb-slate-700">
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
