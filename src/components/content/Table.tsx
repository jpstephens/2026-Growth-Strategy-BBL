interface TableProps {
  headers: string[]
  rows: (string | number)[][]
  stickyHeader?: boolean
}

export default function Table({ headers, rows, stickyHeader = false }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-md border border-bb-border my-md">
      <table className="w-full text-sm">
        <thead className={`bg-bb-button text-bb-white ${stickyHeader ? 'sticky top-0' : ''}`}>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="text-left px-md py-sm font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-bb-white' : 'bg-bb-light-gray'}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-md py-sm text-bb-dark-gray">
                  {typeof cell === 'number' && !Number.isInteger(cell) ? cell.toFixed(2) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
