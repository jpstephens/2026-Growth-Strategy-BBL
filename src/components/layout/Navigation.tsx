interface NavigationProps {
  sections: { id: string; title: string }[]
  activeSection: number
  onSectionClick: (index: number) => void
}

export default function Navigation({ sections, activeSection, onSectionClick }: NavigationProps) {
  return (
    <nav
      className="hidden md:block sticky top-[93px] h-[calc(100vh-93px)] w-64 bg-bb-light-gray border-r border-bb-border overflow-y-auto"
      aria-label="Section navigation"
    >
      <div className="p-md space-y-xs">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(index)}
            className={`w-full text-left px-md py-sm rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-sm ${
              activeSection === index
                ? 'bg-bb-cyan text-bb-white shadow-sm'
                : 'text-bb-dark-gray hover:bg-bb-white active:bg-bb-white'
            } focus-ring`}
            aria-current={activeSection === index ? 'page' : undefined}
          >
            <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold flex-shrink-0 ${
              activeSection === index
                ? 'bg-bb-white/20 text-bb-white'
                : 'bg-bb-border/50 text-bb-dark-gray'
            }`}>
              {index + 1}
            </span>
            <span className="truncate">{section.title}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
