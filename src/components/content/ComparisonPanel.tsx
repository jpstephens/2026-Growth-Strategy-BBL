interface ComparisonPanelProps {
  title?: string
  leftTitle: string
  rightTitle: string
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  leftHighlight?: boolean
  rightHighlight?: boolean
}

export default function ComparisonPanel({
  title,
  leftTitle,
  rightTitle,
  leftContent,
  rightContent,
  leftHighlight = false,
  rightHighlight = false,
}: ComparisonPanelProps) {
  return (
    <div className="w-full">
      {title && <h3 className="text-h2 font-bold mb-lg text-bb-black">{title}</h3>}
      <div className="grid grid-cols-2 gap-xl">
        <div
          className={`p-lg rounded-lg border-2 ${
            leftHighlight
              ? 'bg-bb-cyan/10 border-bb-cyan'
              : 'bg-bb-light-gray border-bb-border'
          }`}
        >
          <h4 className={`text-h3 font-bold mb-md ${leftHighlight ? 'text-bb-cyan' : 'text-bb-black'}`}>
            {leftTitle}
          </h4>
          <div className="text-base">{leftContent}</div>
        </div>
        <div
          className={`p-lg rounded-lg border-2 ${
            rightHighlight
              ? 'bg-bb-cyan/10 border-bb-cyan'
              : 'bg-bb-light-gray border-bb-border'
          }`}
        >
          <h4 className={`text-h3 font-bold mb-md ${rightHighlight ? 'text-bb-cyan' : 'text-bb-black'}`}>
            {rightTitle}
          </h4>
          <div className="text-base">{rightContent}</div>
        </div>
      </div>
    </div>
  )
}
