interface PaginationProps {
  sections: { id: string; title: string }[]
  currentPage: number
  onPageChange: (index: number) => void
}

export default function Pagination({ sections, currentPage, onPageChange }: PaginationProps) {
  const totalPages = sections.length
  const canGoPrev = currentPage > 0
  const canGoNext = currentPage < totalPages - 1

  const handlePrev = () => {
    if (canGoPrev) onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    if (canGoNext) onPageChange(currentPage + 1)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bb-white border-t border-bb-border z-50 safe-area-bottom">
      <div className="max-w-4xl mx-auto px-sm py-sm md:py-md">
        {/* Page title - mobile */}
        <div className="text-center mb-sm md:hidden">
          <span className="text-xs text-bb-border font-medium">
            {currentPage + 1} of {totalPages}
          </span>
          <h2 className="text-sm font-semibold text-bb-black truncate px-md">
            {sections[currentPage].title}
          </h2>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between gap-sm">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`flex items-center gap-xs px-md py-sm rounded-md font-medium text-sm transition-all min-w-[100px] justify-center ${
              canGoPrev
                ? 'bg-bb-light-gray text-bb-dark-gray hover:bg-bb-border active:scale-95'
                : 'bg-bb-light-gray/50 text-bb-border cursor-not-allowed'
            } focus-ring`}
            aria-label="Previous section"
          >
            <span className="text-lg">←</span>
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page dots - desktop */}
          <div className="hidden md:flex items-center gap-xs flex-wrap justify-center max-w-md">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => onPageChange(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-bb-cyan w-6'
                    : 'bg-bb-border hover:bg-bb-dark-gray'
                } focus-ring`}
                title={section.title}
                aria-label={`Go to ${section.title}`}
                aria-current={currentPage === index ? 'page' : undefined}
              />
            ))}
          </div>

          {/* Page indicator - tablet */}
          <div className="hidden sm:flex md:hidden items-center">
            <span className="text-sm font-medium text-bb-dark-gray">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`flex items-center gap-xs px-md py-sm rounded-md font-medium text-sm transition-all min-w-[100px] justify-center ${
              canGoNext
                ? 'bg-bb-cyan text-bb-white hover:bg-bb-cyan/90 active:scale-95'
                : 'bg-bb-cyan/30 text-bb-white/50 cursor-not-allowed'
            } focus-ring`}
            aria-label="Next section"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Quick jump dropdown - mobile */}
        <div className="mt-sm md:hidden">
          <select
            value={currentPage}
            onChange={(e) => onPageChange(Number(e.target.value))}
            className="w-full px-md py-sm rounded-md border border-bb-border bg-bb-white text-bb-dark-gray text-sm focus-ring"
            aria-label="Jump to section"
          >
            {sections.map((section, index) => (
              <option key={section.id} value={index}>
                {index + 1}. {section.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
