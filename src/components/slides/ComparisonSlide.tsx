interface ComparisonItem {
  label: string
  items: string[]
}

interface ComparisonSlideProps {
  leftTitle: string
  rightTitle: string
  leftItems: ComparisonItem[]
  rightItems: ComparisonItem[]
  highlight?: 'left' | 'right'
}

export default function ComparisonSlide({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
  highlight = 'right',
}: ComparisonSlideProps) {
  return (
    <div className="grid grid-cols-2 gap-xl w-full">
      {/* Left side */}
      <div className={`rounded-lg p-xl border-2 ${highlight === 'left' ? 'border-bb-cyan bg-blue-50' : 'border-bb-border bg-bb-light-gray'}`}>
        <h3 className="text-2xl font-bold text-bb-black mb-lg">{leftTitle}</h3>
        <div className="space-y-md">
          {leftItems.map((item, idx) => (
            <div key={idx}>
              <p className="text-sm font-semibold text-bb-dark-gray mb-xs">{item.label}</p>
              <ul className="space-y-xs">
                {item.items.map((i, subIdx) => (
                  <li key={subIdx} className="text-sm text-bb-dark-gray flex items-start">
                    <span className="mr-sm">•</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className={`rounded-lg p-xl border-2 ${highlight === 'right' ? 'border-bb-cyan bg-blue-50' : 'border-bb-border bg-bb-light-gray'}`}>
        <h3 className="text-2xl font-bold text-bb-black mb-lg">{rightTitle}</h3>
        <div className="space-y-md">
          {rightItems.map((item, idx) => (
            <div key={idx}>
              <p className="text-sm font-semibold text-bb-dark-gray mb-xs">{item.label}</p>
              <ul className="space-y-xs">
                {item.items.map((i, subIdx) => (
                  <li key={subIdx} className="text-sm text-bb-dark-gray flex items-start">
                    <span className="mr-sm">•</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
