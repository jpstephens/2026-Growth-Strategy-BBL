import Slide from '../layout/Slide'

export default function Slide01_Title() {
  return (
    <Slide variant="gradient">
      <div className="text-center max-w-5xl space-y-3xl">
        {/* Hero Title */}
        <div>
          <h1 className="font-display text-hero font-black text-bb-navy-900 mb-xl">
            Growth Strategy 2026
          </h1>
          <div className="w-48 h-2 bg-gradient-to-r from-bb-electric-500 via-bb-sunset-500 to-bb-emerald-500 mx-auto rounded-full mb-2xl" />
        </div>

        {/* Subtitle */}
        <div className="space-y-xl">
          <p className="font-display text-display font-bold text-bb-electric-600 mb-lg">
            $12K → $100K Monthly Profit
          </p>
          <p className="text-2xl text-bb-slate-700 leading-relaxed mx-auto max-w-3xl">
            Here's how we go from $12K to $100K this year. And everyone plays a role.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2xl border-t border-bb-slate-300">
          <p className="text-xl font-bold text-bb-navy-900 mb-xs">BlackBridge Logistics</p>
          <p className="text-lg text-bb-slate-600">January 2026</p>
        </div>
      </div>
    </Slide>
  )
}
