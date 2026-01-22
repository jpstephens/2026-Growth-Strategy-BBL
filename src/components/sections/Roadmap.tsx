import Section from '../content/Section'
import Card from '../content/Card'
import Callout from '../content/Callout'
import TimelineChart from '../charts/TimelineChart'
import { phases } from '../../data/roadmap'

export default function Roadmap() {
  return (
    <Section title="12-Month Roadmap">
      <Callout variant="info" title="Roadmap Philosophy">
        <p>
          This is execution focused—specific milestones with owners and deadlines. Not a vision document. Each phase builds on the previous one. Success in one phase triggers actions in the next.
        </p>
      </Callout>

      {phases.map((phase, phaseIdx) => (
        <Card key={phaseIdx} title={phase.name}>
          <div className="mb-md">
            <div className="grid grid-cols-2 gap-md mb-md">
              <div>
                <h4 className="font-semibold text-bb-black text-sm mb-sm">Period</h4>
                <p className="text-sm text-bb-dark-gray">{phase.period}</p>
              </div>
              <div>
                <h4 className="font-semibold text-bb-black text-sm mb-sm">Goal</h4>
                <p className="text-sm text-bb-dark-gray">{phase.goal}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-bb-black text-sm mb-md">Milestones</h4>
            <div className="space-y-md">
              {phase.milestones.map((milestone, mIdx) => (
                <div key={mIdx} className="p-md bg-bb-light-gray rounded-md border border-bb-border">
                  <div className="flex justify-between items-start gap-md mb-sm">
                    <h5 className="font-medium text-bb-black text-sm">{milestone.name}</h5>
                    <span className="text-xs bg-bb-button text-bb-white px-md py-xs rounded flex-shrink-0 whitespace-nowrap">
                      {milestone.targetDate}
                    </span>
                  </div>
                  <p className="text-xs text-bb-dark-gray">
                    <strong>Success Metric:</strong> {milestone.successMetric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}

      <Card title="Success Indicators by Phase">
        <div className="space-y-md">
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm text-sm">Phase 1 Success</h4>
            <p className="text-sm text-bb-dark-gray">
              Patrick making 200+ dials/week, David handling all ops, Instantly.ai running, HubSpot tracking pipeline, 12-15 new customers acquired
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm text-sm">Phase 2 Success</h4>
            <p className="text-sm text-bb-dark-gray">
              Patrick proven at 4+ customers/month, Rep #2 hired and ramping, 15-18 new customers, 35-40 active customers, {'>'} $30K monthly profit
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm text-sm">Phase 3 Success</h4>
            <p className="text-sm text-bb-dark-gray">
              Rep #2 at full productivity, Rep #3 hired and ramping, 18-20 new customers, 50-55 active customers, {'>'} $60K monthly profit
            </p>
          </div>
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm text-sm">Phase 4 Success</h4>
            <p className="text-sm text-bb-dark-gray">
              3-4 sales reps at full productivity, 18-20 new customers in Q4, 65-70 active customers, <strong>$100K monthly profit</strong>
            </p>
          </div>
        </div>
      </Card>

      <Card title="Risk Mitigation">
        <div className="space-y-md text-sm text-bb-dark-gray">
          <div className="p-md bg-error/5 rounded-md border border-error/20">
            <h4 className="font-semibold text-bb-black mb-sm">Risk: Patrick Can't Hit 200 Dials/Week</h4>
            <p>
              <strong>Mitigation:</strong> Test in week 3. If he's at {'<'}150 dials, diagnose the issue immediately (skill, attitude, list quality, ops interference). Adjust approach by week 4. If still failing, sales capacity bottleneck is worse than assumed.
            </p>
          </div>
          <div className="p-md bg-error/5 rounded-md border border-error/20">
            <h4 className="font-semibold text-bb-black mb-sm">Risk: David Overwhelmed by 150+ Loads/Month</h4>
            <p>
              <strong>Mitigation:</strong> Track issue resolution time weekly. If trending above 2-3 hrs, hire ops support immediately (don't wait for Q2). Better to hire early than lose customers due to poor service.
            </p>
          </div>
          <div className="p-md bg-error/5 rounded-md border border-error/20">
            <h4 className="font-semibold text-bb-black mb-sm">Risk: New Hires Don't Perform</h4>
            <p>
              <strong>Mitigation:</strong> Hiring is only triggered after Patrick proves the model. Ramp time is 60-90 days. If a hire isn't hitting targets in 60 days, reassign or part ways quickly. Don't carry under-performers into Q3.
            </p>
          </div>
          <div className="p-md bg-error/5 rounded-md border border-error/20">
            <h4 className="font-semibold text-bb-black mb-sm">Risk: Margins Compress as We Scale</h4>
            <p>
              <strong>Mitigation:</strong> Monitor margin per load monthly. If trending below $200, trigger pricing review with existing customers and tighten lane rules. First line of defense is better freight selection, not price reduction.
            </p>
          </div>
        </div>
      </Card>

      <Card title="Key Dependencies">
        <ul className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">1.</span>
            <span><strong>Patrick freed from operations (Week 1)</strong> — Everything else depends on this. If Patrick is still doing ops, the entire plan fails.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">2.</span>
            <span><strong>Sales activity at 200 dials/week (Week 3)</strong> — If this doesn't happen, the growth math doesn't work.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">3.</span>
            <span><strong>Instantly.ai domain warmup (Week 5-6)</strong> — Email results start flowing in week 7-8. Enables warm leads for Patrick.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">4.</span>
            <span><strong>Patrick's proven 4+ customers/month (End of Q1)</strong> — Triggers Rep #2 hire. Without this proof, we're hiring on hope, not data.</span>
          </li>
          <li className="flex gap-md">
            <span className="font-bold text-bb-black flex-shrink-0">5.</span>
            <span><strong>Rep #2 reaches 3+ customers/month (End of Q2)</strong> — Triggers Rep #3 hire. Validates that the system scales.</span>
          </li>
        </ul>
      </Card>

      <TimelineChart />
    </Section>
  )
}
