import Slide from '../layout/Slide'

export default function Slide40_RisksMitigation() {
  const risks = [
    {
      title: "Patrick doesn't sustain production",
      risk: 'Sales system doesn\'t prove repeatable. Rep #2 hire delayed.',
      mitigation: 'Coaching from Chris. Daily activity tracking. Swap messaging/lists if conversion is low. Assess fit by April 30.',
    },
    {
      title: 'Clearway or Frontier Door relationship weakens',
      risk: 'Major customer loss = crisis. Concentration risk materializes.',
      mitigation: 'Accelerate customer diversification. Target 65-70 by December. By month 6-7, no single customer exceeds 12%.',
    },
    {
      title: 'David becomes bottleneck at 150+ loads/month',
      risk: 'Ops capacity limits growth. Customer experience degrades.',
      mitigation: 'Ops Coordinator hired when loads >120/month. Handoff protocol strict to prevent Patrick involvement. Monitor David\'s bandwidth monthly.',
    },
    {
      title: 'Margin compression from pricing pressure',
      risk: 'Larger customers demand lower rates. Unit economics deteriorate.',
      mitigation: 'Strict $200+ margin target on all new customers. Avoid WA/OR→Vernon CA lanes. Build direct carrier network to improve cost basis. Monthly margin review.',
    },
  ]

  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl space-y-2xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Key Risks & Mitigation
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-burgundy-500 to-bb-emerald-500 mx-auto rounded-full mb-lg" />
          <p className="text-xl text-bb-slate-600">
            What could go wrong and how we'll handle it
          </p>
        </div>

        {/* Risk Cards */}
        <div className="space-y-lg">
          {risks.map((item, idx) => (
            <div key={idx} className="rounded-2xl border-2 border-bb-burgundy-400 bg-gradient-to-r from-bb-burgundy-50 to-white p-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bb-burgundy-500 to-bb-burgundy-600 flex items-center justify-center text-white text-2xl shrink-0 font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-bb-burgundy-700 mb-md leading-tight">
                    {item.title}
                  </h3>
                  <div className="space-y-md">
                    <div>
                      <p className="text-sm font-semibold text-bb-burgundy-600 mb-xs">Risk:</p>
                      <p className="text-base text-bb-slate-700">{item.risk}</p>
                    </div>
                    <div className="h-px bg-bb-burgundy-200" />
                    <div>
                      <p className="text-sm font-semibold text-bb-emerald-600 mb-xs">Mitigation:</p>
                      <p className="text-base text-bb-slate-700">{item.mitigation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
