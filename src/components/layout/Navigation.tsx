import { useState } from 'react'

interface NavigationProps {
  sections: { id: string; title: string }[]
  activeSection: number
  onSectionClick: (index: number) => void
}

export default function Navigation({ sections, activeSection, onSectionClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (index: number) => {
    onSectionClick(index)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-[72px] left-3 z-50 w-10 h-10 flex items-center justify-center bg-bb-black text-bb-white rounded-lg shadow-lg focus-ring"
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } fixed md:sticky top-[85px] left-0 h-[calc(100vh-85px)] w-72 md:w-64 bg-bb-light-gray border-r border-bb-border overflow-y-auto transition-transform duration-300 z-40 overscroll-contain`}
        aria-label="Section navigation"
      >
        <div className="p-md space-y-xs">
          <div className="md:hidden mb-md pb-md border-b border-bb-border">
            <p className="text-xs font-semibold text-bb-border uppercase tracking-wider">Sections</p>
          </div>

          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(index)}
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

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
