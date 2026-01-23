import Slide from '../layout/Slide'

export default function Slide39_FourPillarsReview() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-7xl space-y-3xl">
        {/* Title */}
        <div className="text-center mb-lg">
          <h1 className="font-display text-display font-bold text-bb-navy-900 mb-md">
            Four Pillars of Growth
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-sunset-500 to-bb-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Four Pillar Grid */}
        <div className="grid grid-cols-2 gap-2xl">
          {/* Sales - Electric */}
          <div className="rounded-2xl border-2 border-bb-electric-400 bg-gradient-to-br from-bb-electric-50 to-white p-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bb-electric-500 to-bb-electric-600 flex items-center justify-center text-white text-2xl">
                💼
              </div>
              <h3 className="text-2xl font-bold text-bb-electric-700">Sales</h3>
            </div>
            <ul className="space-y-sm mb-lg text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-electric-500 font-bold mr-md">•</span>
                <span>40+ dials/day per rep</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-500 font-bold mr-md">•</span>
                <span>200+ dials/week target</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-500 font-bold mr-md">•</span>
                <span>4-5 new customers/month</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-500 font-bold mr-md">•</span>
                <span>Precise funnel tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-500 font-bold mr-md">•</span>
                <span>Protected calling blocks</span>
              </li>
            </ul>
            <div className="pt-lg border-t border-bb-electric-200">
              <p className="text-sm font-bold text-bb-electric-700">Goal: 12+ customers/month with 3-4 reps</p>
            </div>
          </div>

          {/* Operations - Burgundy */}
          <div className="rounded-2xl border-2 border-bb-burgundy-400 bg-gradient-to-br from-bb-burgundy-50 to-white p-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bb-burgundy-500 to-bb-burgundy-600 flex items-center justify-center text-white text-2xl">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-bb-burgundy-700">Operations</h3>
            </div>
            <ul className="space-y-sm mb-lg text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-burgundy-500 font-bold mr-md">•</span>
                <span>{'>'}95% on-time pickup/delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-burgundy-500 font-bold mr-md">•</span>
                <span>{'<'}2hr critical issue resolution</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-burgundy-500 font-bold mr-md">•</span>
                <span>Direct carrier network {'>'}50%</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-burgundy-500 font-bold mr-md">•</span>
                <span>Carrier tier system</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-burgundy-500 font-bold mr-md">•</span>
                <span>Clear escalation paths</span>
              </li>
            </ul>
            <div className="pt-lg border-t border-bb-burgundy-200">
              <p className="text-sm font-bold text-bb-burgundy-700">Goal: Handle 600+ monthly loads with David + support</p>
            </div>
          </div>

          {/* Team - Sunset */}
          <div className="rounded-2xl border-2 border-bb-sunset-400 bg-gradient-to-br from-bb-sunset-50 to-white p-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bb-sunset-500 to-bb-sunset-600 flex items-center justify-center text-white text-2xl">
                👥
              </div>
              <h3 className="text-2xl font-bold text-bb-sunset-700">Team</h3>
            </div>
            <ul className="space-y-sm mb-lg text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-sunset-500 font-bold mr-md">•</span>
                <span>Start: 5 people (current)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-sunset-500 font-bold mr-md">•</span>
                <span>Add Rep #2 in Q2</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-sunset-500 font-bold mr-md">•</span>
                <span>Add Ops Coordinator Q2-Q3</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-sunset-500 font-bold mr-md">•</span>
                <span>Add Rep #3 in Q3</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-sunset-500 font-bold mr-md">•</span>
                <span>Performance-triggered hiring</span>
              </li>
            </ul>
            <div className="pt-lg border-t border-bb-sunset-200">
              <p className="text-sm font-bold text-bb-sunset-700">Goal: 8-10 people by year end</p>
            </div>
          </div>

          {/* Systems - Emerald */}
          <div className="rounded-2xl border-2 border-bb-emerald-400 bg-gradient-to-br from-bb-emerald-50 to-white p-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-md mb-lg">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bb-emerald-500 to-bb-emerald-600 flex items-center justify-center text-white text-2xl">
                📊
              </div>
              <h3 className="text-2xl font-bold text-bb-emerald-700">Systems</h3>
            </div>
            <ul className="space-y-sm mb-lg text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-emerald-500 font-bold mr-md">•</span>
                <span>HubSpot pipeline tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-emerald-500 font-bold mr-md">•</span>
                <span>Alvys load management</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-emerald-500 font-bold mr-md">•</span>
                <span>KPI dashboard (monthly)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-emerald-500 font-bold mr-md">•</span>
                <span>Carrier tagging system</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-emerald-500 font-bold mr-md">•</span>
                <span>Weekly + monthly reviews</span>
              </li>
            </ul>
            <div className="pt-lg border-t border-bb-emerald-200">
              <p className="text-sm font-bold text-bb-emerald-700">Goal: Full visibility into business health</p>
            </div>
          </div>
        </div>

        {/* Interconnection Message */}
        <div className="bg-gradient-to-r from-bb-navy-600 to-bb-navy-700 rounded-2xl p-2xl shadow-xl border-2 border-bb-navy-500 text-white text-center">
          <p className="text-lg leading-relaxed">
            These four pillars are interconnected. <span className="font-bold">Strong sales needs strong operations.</span> Strong operations needs strong team. <span className="font-bold">Everything needs visibility through systems.</span>
          </p>
        </div>
      </div>
    </Slide>
  )
}
