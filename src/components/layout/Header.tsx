export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-bb-white border-b border-bb-border">
      <div className="max-w-7xl mx-auto px-sm md:px-lg py-md flex items-center justify-between">
        <div className="flex items-center gap-sm">
          <div className="w-12 h-12 bg-bb-black rounded flex items-center justify-center text-bb-white font-bold text-xl">
            🌉
          </div>
          <div>
            <h1 className="text-xl font-bold text-bb-black">BlackBridge Logistics</h1>
            <p className="text-sm text-bb-border">2026 Growth Plan</p>
          </div>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm font-semibold text-bb-cyan">$11K → $100K</p>
          <p className="text-xs text-bb-border">Monthly Net Profit</p>
        </div>
      </div>
    </header>
  )
}
