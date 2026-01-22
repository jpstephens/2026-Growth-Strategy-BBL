interface HeaderProps {
  currentPage: number
  totalPages: number
}

export default function Header({ currentPage, totalPages }: HeaderProps) {
  const progress = ((currentPage + 1) / totalPages) * 100

  return (
    <header className="sticky top-0 z-40 bg-bb-white border-b border-bb-border">
      <div className="max-w-7xl mx-auto px-sm md:px-lg py-md flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-bb-black rounded flex items-center justify-center text-bb-white font-bold text-lg md:text-xl flex-shrink-0">
            🌉
          </div>
          <div className="min-w-0">
            <h1 className="text-lg md:text-xl font-bold text-bb-black truncate">BlackBridge Logistics</h1>
            <p className="text-xs md:text-sm text-bb-border">2026 Growth Plan</p>
          </div>
        </div>
        <div className="text-right hidden sm:block flex-shrink-0">
          <p className="text-sm font-semibold text-bb-cyan">$12K → $100K</p>
          <p className="text-xs text-bb-border">Monthly Net Profit</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-bb-light-gray">
        <div
          className="h-full bg-bb-cyan transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentPage + 1}
          aria-valuemin={1}
          aria-valuemax={totalPages}
          aria-label={`Page ${currentPage + 1} of ${totalPages}`}
        />
      </div>
    </header>
  )
}
