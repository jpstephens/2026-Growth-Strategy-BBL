import { useState } from 'react'

interface NavigationProps {
  sections: { id: string; title: string }[]
  activeSection: number
  onSectionClick: (index: number) => void
}

export default function Navigation({ sections, activeSection, onSectionClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-50 p-xs bg-bb-black text-bb-white rounded focus-ring"
        aria-label="Toggle navigation"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } fixed md:sticky top-20 left-0 h-[calc(100vh-80px)] w-64 bg-bb-light-gray border-r border-bb-border overflow-y-auto transition-transform duration-300 z-40`}
      >
        <div className="p-md space-y-xs">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                onSectionClick(index)
                setIsOpen(false)
              }}
              className={`w-full text-left px-md py-sm rounded text-sm font-medium transition-all duration-200 ${
                activeSection === index
                  ? 'bg-bb-cyan text-bb-white'
                  : 'text-bb-dark-gray hover:bg-bb-white'
              } focus-ring`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
