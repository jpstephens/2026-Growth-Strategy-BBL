export default function Footer() {
  return (
    <footer className="bg-bb-black text-bb-white py-lg px-sm md:px-lg mt-3xl border-t border-bb-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
          <div>
            <h3 className="text-h3 mb-md">BlackBridge Logistics</h3>
            <p className="text-sm">Comprehensive growth strategy for 2026</p>
          </div>
          <div>
            <h4 className="font-semibold mb-md">Document</h4>
            <ul className="space-y-xs text-sm">
              <li><a href="#executive-summary" className="hover:text-bb-cyan transition-colors">Executive Summary</a></li>
              <li><a href="#financial-model" className="hover:text-bb-cyan transition-colors">Financial Model</a></li>
              <li><a href="#roadmap" className="hover:text-bb-cyan transition-colors">12-Month Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-md">Information</h4>
            <p className="text-sm mb-md">Data Source: 880 Loads from Alvys TMS<br />Analysis Period: May 2024 – January 2026</p>
          </div>
        </div>

        <div className="border-t border-bb-white/20 pt-lg text-center text-sm">
          <p>© 2026 BlackBridge Logistics. All rights reserved.</p>
          <p className="text-bb-border mt-xs">Document prepared January 2026</p>
        </div>
      </div>
    </footer>
  )
}
