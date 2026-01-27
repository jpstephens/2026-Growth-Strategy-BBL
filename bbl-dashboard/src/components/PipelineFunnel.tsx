'use client';

import { PipelineStage } from '@/types/metrics';

interface PipelineFunnelProps {
  stages: PipelineStage[];
}

export function PipelineFunnel({ stages }: PipelineFunnelProps) {
  const maxCount = Math.max(...stages.map(s => s.count), 1);

  // Using bb-steel color gradients for the funnel
  const stageColors = [
    'bg-bb-steel-100 border-bb-steel-300',
    'bg-bb-steel-200 border-bb-steel-400',
    'bg-bb-steel-300 border-bb-steel-400',
    'bg-bb-steel-400 border-bb-steel-500',
    'bg-bb-amber-100 border-bb-amber-300',
    'bg-bb-amber-200 border-bb-amber-400',
    'bg-bb-forest-100 border-bb-forest-300',
    'bg-bb-forest-300 border-bb-forest-500',
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-bb-slate-200 p-4">
      <h3 className="text-sm font-semibold text-bb-charcoal-700 mb-4">Pipeline by Stage</h3>
      <div className="space-y-2">
        {stages.map((stage, index) => {
          const widthPercent = (stage.count / maxCount) * 100;
          const colorClass = stageColors[index % stageColors.length];

          return (
            <div key={stage.stageId} className="flex items-center gap-3">
              <div className="min-w-fit text-xs text-bb-slate-600 whitespace-nowrap" title={stage.stage}>
                {stage.stage}
              </div>
              <div className="flex-1 h-6 bg-bb-slate-100 rounded overflow-hidden">
                <div
                  className={`h-full ${colorClass} border-r-2 flex items-center justify-end px-2 transition-all duration-300`}
                  style={{ width: `${Math.max(widthPercent, 5)}%` }}
                >
                  <span className="text-xs font-medium text-bb-charcoal-700">
                    {stage.count}
                  </span>
                </div>
              </div>
              <div className="w-20 text-xs text-bb-slate-500 text-right font-mono">
                ${(stage.value / 1000).toFixed(0)}K
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
