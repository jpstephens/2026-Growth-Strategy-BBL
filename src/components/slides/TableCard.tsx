interface TableCardProps {
  headers: string[]
  rows: (string | number)[][]
  highlight?: boolean
  compact?: boolean
}

export default function TableCard({ headers, rows, highlight = false, compact = false }: TableCardProps) {
  return (
    <div className={`w-full rounded-lg border ${highlight ? 'border-bb-cyan bg-blue-50' : 'border-bb-border bg-bb-light-gray'} overflow-hidden`}>
      <table className="w-full">
        <thead className={`${highlight ? 'bg-bb-cyan text-white' : 'bg-bb-dark-gray text-white'}`}>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`px-lg py-sm text-left font-semibold text-sm ${compact ? 'py-xs' : ''}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-t ${rowIdx % 2 === 0 ? 'bg-white' : highlight ? 'bg-blue-50' : 'bg-bb-light-gray'}`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={`px-lg py-sm text-sm text-bb-dark-gray ${compact ? 'py-xs' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
