interface ProgressIndicatorProps {
  sections: { id: string; title: string }[]
  activeSection: number
  onSectionClick: (index: number) => void
}

export default function ProgressIndicator({ sections, activeSection, onSectionClick }: ProgressIndicatorProps) {
  const progress = ((activeSection + 1) / sections.length) * 100

  return (
    <div className="hidden lg:block fixed right-0 top-20 h-[calc(100vh-80px)] w-8 bg-bb-light-gray border-l border-bb-border">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full bg-bb-cyan/20 transition-all duration-300" style={{ height: `${progress}%` }} />

      {/* Section markers */}
      <div className="relative h-full flex flex-col justify-between p-xs">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              activeSection === index
                ? 'bg-bb-cyan w-4 h-4 -ml-1'
                : 'bg-bb-border hover:bg-bb-dark-gray'
            } focus-ring`}
            title={section.title}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>

      {/* Scroll percentage */}
      <div className="absolute bottom-md left-1/2 -translate-x-1/2 text-xs font-semibold text-bb-dark-gray">
        {Math.round(progress)}%
      </div>
    </div>
  )
}
