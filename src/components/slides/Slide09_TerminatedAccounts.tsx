import Slide from '../layout/Slide'
import TableCard from './TableCard'
import Callout from '../content/Callout'
import { terminatedAccounts } from '../../data/currentState'

export default function Slide09_TerminatedAccounts() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-bb-navy-900 mb-sm text-center font-display">Concentration Risk</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto mb-lg"></div>
        <p className="text-xl text-bb-slate-700 text-center mb-lg">Accounts removed or deprioritized</p>

        <TableCard
          headers={['Customer', 'Historical Loads', 'Avg Margin', 'Status', 'Reason']}
          rows={terminatedAccounts.map(a => [
            a.customer,
            a.historicalLoads,
            `$${a.avgMargin}`,
            a.status,
            a.reason,
          ])}
          highlight={false}
        />

        <Callout variant="critical" title="The Concentration Problem">
          <p className="mb-sm">
            With terminated litigation accounts removed, our customer base is heavily concentrated:
          </p>
          <ul className="space-y-xs font-semibold mb-sm">
            <li>• Clearway and Frontier Door represent large margin percentage</li>
            <li>• Any relationship loss creates immediate crisis</li>
            <li>• Current 7-9 active customers = dangerous vulnerability</li>
          </ul>
          <p className="font-bold text-bb-cyan">
            2026 Goal: 65-70 customers, no single customer exceeding 15% of margin.
          </p>
          <p className="mt-sm text-sm italic">
            Diversification is survival. We must aggressively prioritize new customer acquisition.
          </p>
        </Callout>
      </div>
    </Slide>
  )
}
