import Section from '../content/Section'
import Card from '../content/Card'
import Table from '../content/Table'
import Callout from '../content/Callout'
import CustomerFunnelChart from '../charts/CustomerFunnelChart'
import { conversionFunnel, dailySchedule, callFramework, successOutcomes, protectedTimeRule, scriptIterationProcess } from '../../data/salesSystem'

export default function SalesSystem() {
  return (
    <Section title="The Sales System – Cold Calling">
      <Card title="Why Cold Calling is the Foundation">
        <p className="text-sm text-bb-dark-gray mb-md">In freight brokerage, the phone is where deals close. Email opens doors, but the phone builds relationships. Here's why:</p>
        <ul className="space-y-sm text-sm text-bb-dark-gray">
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Logistics managers are busy and skeptical—they've been burned by bad brokers before</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>They won't respond to emails from unknown brokers, but they'll take a call from someone who sounds competent</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Trust is built through conversation, not text</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>Objections can be handled in real-time on the phone</span>
          </li>
          <li className="flex gap-md">
            <span className="flex-shrink-0">•</span>
            <span>The phone creates urgency and commitment that email cannot</span>
          </li>
        </ul>
      </Card>

      <Card title="Activity Targets">
        <Callout variant="critical" title="Non-Negotiable Minimums">
          <p className="font-bold mb-sm">40+ dials per day | 200+ dials per week | 800+ dials per month</p>
          <p>These are minimums, not goals. Top performers exceed these numbers.</p>
        </Callout>
        <p className="text-sm text-bb-dark-gray mt-md font-semibold mb-md">The Conversion Funnel</p>
        <Table
          headers={['Metric', 'Rate', 'Weekly Result', 'Monthly Result']}
          rows={conversionFunnel.map(item => [item.metric, item.rate || '—', item.weeklyResult, item.monthlyResult])}
        />
        <p className="text-sm text-bb-dark-gray mt-md italic">
          These conversion rates are achievable with good list quality and a solid pitch. The key insight: <strong>activity drives results. More dials = more conversations = more customers.</strong> There's no shortcut.
        </p>

        <CustomerFunnelChart />
      </Card>

      <Card title="Patrick's Daily Schedule">
        <p className="text-sm text-bb-dark-gray mb-md">Calling requires protected time. This schedule creates three protected calling blocks totaling 4.5 hours:</p>
        <Table
          headers={['Time', 'Activity', 'Duration', 'Notes']}
          rows={dailySchedule.map(s => [s.time, s.activity, s.duration, s.notes])}
        />
        <Callout variant="warning" title="Protected Time Rule">
          <ul className="space-y-xs text-sm text-bb-dark-gray">
            {protectedTimeRule.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </Callout>
      </Card>

      <Card title="The Call Framework">
        <p className="text-sm text-bb-dark-gray mb-md italic">
          This is Version 1.0 of the script. The goal is not to read a script—it's to have a natural conversation guided by a framework.
        </p>

        <div className="space-y-md">
          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">{callFramework.opening.title}</h4>
            <p className="text-xs text-bb-dark-gray mb-sm">{callFramework.opening.description}</p>
            <div className="bg-white p-sm rounded mb-sm border border-bb-border italic text-sm text-bb-dark-gray">
              {callFramework.opening.script}
            </div>
            <ul className="space-y-xs text-xs text-bb-dark-gray">
              {callFramework.opening.tips.map((tip, idx) => (
                <li key={idx} className="flex gap-sm">
                  <span className="flex-shrink-0">–</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">{callFramework.hook.title}</h4>
            <p className="text-xs text-bb-dark-gray mb-sm">{callFramework.hook.description}</p>
            <div className="bg-white p-sm rounded mb-sm border border-bb-border italic text-sm text-bb-dark-gray">
              {callFramework.hook.script}
            </div>
            <ul className="space-y-xs text-xs text-bb-dark-gray">
              {callFramework.hook.tips.map((tip, idx) => (
                <li key={idx} className="flex gap-sm">
                  <span className="flex-shrink-0">–</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">{callFramework.qualifying.title}</h4>
            <p className="text-xs text-bb-dark-gray mb-sm">{callFramework.qualifying.description}</p>
            <ul className="space-y-xs text-xs text-bb-dark-gray mb-sm">
              {callFramework.qualifying.questions.map((q, idx) => (
                <li key={idx} className="flex gap-sm">
                  <span className="flex-shrink-0">–</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-bb-dark-gray italic">{callFramework.qualifying.note}</p>
          </div>

          <div className="p-md bg-bb-light-gray rounded-md">
            <h4 className="font-semibold text-bb-black mb-sm">{callFramework.objections.title}</h4>
            <div className="space-y-sm">
              {callFramework.objections.items.map((item, idx) => (
                <div key={idx} className="bg-white p-sm rounded border border-bb-border text-xs text-bb-dark-gray">
                  <p className="font-medium text-bb-black mb-xs">Prospect: {item.objection}</p>
                  <p><strong>Response:</strong> {item.response}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="What Counts as a Successful Call">
        <p className="text-sm text-bb-dark-gray mb-md">
          <strong>Success means moving the prospect forward,</strong> not necessarily closing. Any of these outcomes count as wins:
        </p>
        <Table
          headers={['Outcome', 'Why It\'s a Win', 'Next Step']}
          rows={successOutcomes.map(s => [s.outcome, s.whyWin, s.nextStep])}
        />
      </Card>

      <Card title="Script Iteration Process">
        <div className="space-y-md">
          <div>
            <h4 className="font-semibold text-bb-black mb-sm">Weekly Review</h4>
            <p className="text-sm text-bb-dark-gray">{scriptIterationProcess.weekly}</p>
          </div>
          <div>
            <h4 className="font-semibold text-bb-black mb-sm">Monthly Review</h4>
            <p className="text-sm text-bb-dark-gray">{scriptIterationProcess.monthly}</p>
          </div>
          <div className="p-md bg-bb-cyan/5 rounded-md border border-bb-cyan">
            <p className="text-sm text-bb-dark-gray italic">{scriptIterationProcess.note}</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
