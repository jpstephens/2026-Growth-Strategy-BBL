'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomerConcentration } from '@/types/metrics';

interface DonutChartProps {
  data: CustomerConcentration[];
  maxConcentration: number;
}

// Darker colors for better accessibility
const COLORS = ['#335771', '#4f85a6', '#2a5c4b', '#438f74', '#a36228', '#c47d2e', '#495057', '#6b7785'];

export function DonutChart({ data, maxConcentration }: DonutChartProps) {
  const chartData = data.slice(0, 5).map(item => ({
    name: item.customer,
    value: item.percent,
    revenue: item.revenue,
    overLimit: item.percent > maxConcentration,
  }));

  // Add "Others" if there are more than 5 customers
  if (data.length > 5) {
    const othersPercent = data.slice(5).reduce((sum, c) => sum + c.percent, 0);
    chartData.push({
      name: 'Others',
      value: othersPercent,
      revenue: data.slice(5).reduce((sum, c) => sum + c.revenue, 0),
      overLimit: false,
    });
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-bb-slate-200">
          <p className="font-semibold text-bb-charcoal-900">{data.name}</p>
          <p className="text-sm text-bb-slate-700">
            {data.value.toFixed(1)}% · ${data.revenue.toLocaleString()}
          </p>
          {data.overLimit && (
            <p className="text-xs font-medium text-bb-crimson-700 mt-1">Exceeds {maxConcentration}% limit</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow border border-bb-slate-200 p-5">
      <h3 className="text-base font-semibold text-bb-charcoal-900 mb-1">Customer Concentration</h3>
      <p className="text-sm text-bb-slate-700 mb-4">Target: No customer &gt;{maxConcentration}%</p>

      <div className="flex items-center gap-4">
        <div className="w-48 h-48">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.overLimit ? '#8d282c' : COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2">
          {chartData.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.overLimit ? '#8d282c' : COLORS[index % COLORS.length] }}
                />
                <span className={`font-medium ${item.overLimit ? 'text-bb-crimson-800' : 'text-bb-slate-800'}`}>
                  {item.name}
                </span>
              </div>
              <span className={`font-mono font-semibold ${item.overLimit ? 'text-bb-crimson-800' : 'text-bb-slate-800'}`}>
                {item.value.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
