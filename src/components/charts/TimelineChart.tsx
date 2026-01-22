import { phases } from '../../data/roadmap'

export default function TimelineChart() {
  const colors = ['#0693e3', '#9b51e0', '#00d084', '#f59e0b']

  return (
    <div className="w-full mt-md">
      <h3 className="text-h3 mb-md">12-Month Roadmap: 4 Phases</h3>

      <div className="space-y-lg">
        {phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="border-l-4 pl-md" style={{ borderColor: colors[phaseIndex] }}>
            <div className="flex items-start justify-between mb-md">
              <div>
                <h4 className="font-semibold text-bb-black text-lg">{phase.name}</h4>
                <p className="text-sm text-bb-border">{phase.period}</p>
              </div>
              <span className="text-sm font-semibold px-md py-xs bg-bb-light-gray rounded text-bb-dark-gray">
                {phase.period.split('–')[0].trim()}
              </span>
            </div>

            <p className="text-base text-bb-dark-gray mb-md">{phase.goal}</p>

            <div className="bg-bb-light-gray rounded-md p-md">
              <h5 className="font-semibold text-bb-black mb-sm text-sm">Key Milestones</h5>
              <ul className="space-y-xs">
                {phase.milestones.slice(0, 4).map((milestone, idx) => (
                  <li key={idx} className="flex gap-sm text-sm text-bb-dark-gray">
                    <span className="font-semibold text-bb-cyan flex-shrink-0">✓</span>
                    <div>
                      <div className="font-medium">{milestone.name}</div>
                      <div className="text-xs text-bb-border">{milestone.targetDate}</div>
                    </div>
                  </li>
                ))}
              </ul>
              {phase.milestones.length > 4 && (
                <p className="text-xs text-bb-border mt-sm">+ {phase.milestones.length - 4} more milestones</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-lg p-md bg-bb-cyan/10 border border-bb-cyan rounded-md">
        <p className="text-sm text-bb-dark-gray">
          <strong>The Sequence Matters:</strong> Get Patrick making 40 dials/day first. Everything else depends on this. Don't skip ahead.
        </p>
      </div>
    </div>
  )
}
