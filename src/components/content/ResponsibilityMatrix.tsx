interface MatrixRow {
  situation: string
  primaryOwner: string
  escalationPath: string
}

interface ResponsibilityMatrixProps {
  rows: MatrixRow[]
}

export default function ResponsibilityMatrix({ rows }: ResponsibilityMatrixProps) {
  return (
    <div className="overflow-x-auto rounded-md border border-bb-border my-md">
      <table className="w-full text-sm">
        <thead className="bg-bb-button text-bb-white sticky top-0">
          <tr>
            <th className="text-left px-md py-sm font-semibold">Situation</th>
            <th className="text-left px-md py-sm font-semibold">Primary Owner</th>
            <th className="text-left px-md py-sm font-semibold">Escalation Path</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-bb-white' : 'bg-bb-light-gray'}>
              <td className="px-md py-sm text-bb-dark-gray font-medium">{row.situation}</td>
              <td className="px-md py-sm text-bb-dark-gray">{row.primaryOwner}</td>
              <td className="px-md py-sm text-bb-dark-gray">{row.escalationPath}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
