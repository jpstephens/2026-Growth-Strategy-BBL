'use client';

import { PipelineStage } from '@/types/metrics';

interface FunnelChartProps {
  stages: PipelineStage[];
}

export function FunnelChart({ stages }: FunnelChartProps) {
  const maxCount = Math.max(...stages.map(s => s.count), 1);

  // Color gradient with accessible text colors
  const colors = [
    { bg: 'bg-bb-steel-100', border: 'border-bb-steel-400', text: 'text-bb-steel-900' },
    { bg: 'bg-bb-steel-200', border: 'border-bb-steel-500', text: 'text-bb-steel-900' },
    { bg: 'bg-bb-steel-300', border: 'border-bb-steel-600', text: 'text-bb-steel-950' },
    { bg: 'bg-bb-steel-500', border: 'border-bb-steel-700', text: 'text-white' },
    { bg: 'bg-bb-amber-100', border: 'border-bb-amber-400', text: 'text-bb-amber-900' },
    { bg: 'bg-bb-amber-300', border: 'border-bb-amber-500', text: 'text-bb-amber-950' },
    { bg: 'bg-bb-forest-200', border: 'border-bb-forest-500', text: 'text-bb-forest-900' },
    { bg: 'bg-bb-forest-500', border: 'border-bb-forest-700', text: 'text-white' },
  ];

  return (
    <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5 h-full w-full flex flex-col">
      <h3 className="text-base font-semibold text-bb-charcoal-900 mb-4">Sales Pipeline</h3>
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {stages.map((stage, index) => {
          const widthPercent = 40 + ((stages.length - index) / stages.length) * 60;
          const color = colors[index % colors.length];

          return (
            <div key={stage.stageId} className="flex items-center justify-center">
              <div
                className={`${color.bg} ${color.border} border-2 rounded-md py-3 px-4 flex items-center justify-between transition-all hover:scale-[1.02]`}
                style={{ width: `${widthPercent}%` }}
              >
                <span className={`text-sm font-semibold ${color.text}`}>
                  {stage.stage}
                </span>
                <div className="flex items-center gap-3">
                  <span className={`text-base font-bold ${color.text}`}>
                    {stage.count}
                  </span>
                  {stage.value > 0 && (
                    <span className={`text-sm font-medium ${color.text}`}>
                      ${(stage.value / 1000).toFixed(0)}K
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-bb-slate-200 flex justify-between text-sm">
        <div>
          <span className="text-bb-slate-700">Total Deals:</span>
          <span className="ml-2 font-bold text-bb-charcoal-900">
            {stages.reduce((sum, s) => sum + s.count, 0)}
          </span>
        </div>
        <div>
          <span className="text-bb-slate-700">Pipeline Value:</span>
          <span className="ml-2 font-bold text-bb-charcoal-900">
            ${(stages.reduce((sum, s) => sum + s.value, 0) / 1000).toFixed(0)}K
          </span>
        </div>
      </div>
    </div>
  );
}
