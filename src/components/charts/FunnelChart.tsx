interface FunnelStage {
  label: string
  value: number
  conversionRate?: number
}

interface FunnelChartProps {
  stages: FunnelStage[]
  title?: string
  colors?: string[]
  height?: number
  showValues?: boolean
  showConversionRates?: boolean
}

export default function FunnelChart({
  stages,
  title,
  colors = [
    '#1e3a8a', // bb-navy-500
    '#0891b2', // bb-electric-500
    '#0e7490', // bb-electric-600
    '#059669', // bb-emerald-600
    '#10b981', // bb-emerald-500
  ],
  height = 500,
  showValues = true,
  showConversionRates = true,
}: FunnelChartProps) {
  if (stages.length === 0) return null

  const maxValue = Math.max(...stages.map((s) => s.value))
  const maxWidth = 100

  return (
    <div className="w-full space-y-lg">
      {title && (
        <h3 className="text-xl font-semibold text-bb-navy-900">{title}</h3>
      )}

      <div className="bg-white rounded-2xl border border-bb-slate-200 p-lg shadow-md">
        <div
          style={{ height: `${height}px` }}
          className="flex flex-col justify-around items-center"
        >
          {stages.map((stage, idx) => {
            const widthPercent = (stage.value / maxValue) * maxWidth
            const color = colors[idx % colors.length]
            const previousValue = idx > 0 ? stages[idx - 1].value : 0
            const conversionRate = idx > 0
              ? ((stage.value / previousValue) * 100).toFixed(0)
              : undefined

            return (
              <div key={idx} className="w-full space-y-sm">
                {/* Conversion rate arrow from previous stage */}
                {idx > 0 && showConversionRates && conversionRate && (
                  <div className="flex justify-center">
                    <div className="flex items-center gap-sm">
                      <span className="text-sm text-bb-slate-600">↓</span>
                      <span className="text-sm font-semibold text-bb-slate-600">
                        {conversionRate}% conversion
                      </span>
                    </div>
                  </div>
                )}

                {/* Funnel block */}
                <div className="flex justify-center">
                  <div
                    style={{
                      width: `${widthPercent}%`,
                      backgroundColor: color,
                      transition: 'all 300ms ease',
                    }}
                    className="rounded-lg px-lg py-md shadow-md hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <div className="text-center">
                      <p className="text-sm font-semibold text-white mb-xs">
                        {stage.label}
                      </p>
                      {showValues && (
                        <>
                          <p className="text-2xl font-bold font-display text-white">
                            {stage.value.toLocaleString()}
                          </p>
                          <p className="text-xs text-white/80">
                            {((stage.value / maxValue) * 100).toFixed(0)}% of top
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-lg md:grid-cols-4">
        <div className="bg-gradient-to-br from-bb-slate-50 to-white rounded-xl p-lg border border-bb-slate-200">
          <p className="text-xs font-semibold text-bb-slate-600 mb-sm">
            Initial
          </p>
          <p className="text-2xl font-bold text-bb-navy-900">
            {stages[0].value.toLocaleString()}
          </p>
        </div>

        <div className="bg-gradient-to-br from-bb-slate-50 to-white rounded-xl p-lg border border-bb-slate-200">
          <p className="text-xs font-semibold text-bb-slate-600 mb-sm">
            Final
          </p>
          <p className="text-2xl font-bold text-bb-navy-900">
            {stages[stages.length - 1].value.toLocaleString()}
          </p>
        </div>

        <div className="bg-gradient-to-br from-bb-slate-50 to-white rounded-xl p-lg border border-bb-slate-200">
          <p className="text-xs font-semibold text-bb-slate-600 mb-sm">
            Conversion
          </p>
          <p className="text-2xl font-bold text-bb-emerald-600">
            {(
              ((stages[stages.length - 1].value / stages[0].value) * 100)
            ).toFixed(1)}
            %
          </p>
        </div>

        <div className="bg-gradient-to-br from-bb-slate-50 to-white rounded-xl p-lg border border-bb-slate-200">
          <p className="text-xs font-semibold text-bb-slate-600 mb-sm">
            Drop-off
          </p>
          <p className="text-2xl font-bold text-bb-burgundy-600">
            {stages[0].value - stages[stages.length - 1].value}
          </p>
        </div>
      </div>
    </div>
  )
}
