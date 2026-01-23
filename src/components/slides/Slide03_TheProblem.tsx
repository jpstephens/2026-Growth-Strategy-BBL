import Slide from '../layout/Slide'

export default function Slide03_TheProblem() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">The Core Problem</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Patrick does both sales AND operations—an impossible role combination</p>

        <div className="space-y-lg">
          <div className="bg-red-50 border-2 border-red-300 p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-red-700 mb-sm">What This Creates</h3>
            <ul className="text-lg text-bb-dark-gray space-y-sm">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-sm">✗</span>
                <span>No clear owner for new customer acquisition—operations work interrupts sales</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-sm">✗</span>
                <span>Reactive firefighting replaces proactive prospecting</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-sm">✗</span>
                <span>Only 0-50 calls/week instead of 200+ needed for growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-sm">✗</span>
                <span>1 new customer/month instead of 4-5 needed</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-300 p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-orange-700 mb-sm">Why This Matters</h3>
            <p className="text-lg text-bb-dark-gray mb-sm">
              At 1 customer/month, we'll reach 65-70 customers sometime in 2031. We don't have that much time. Meanwhile, the business stays dependent on 2 accounts (Clearway + Frontier) that together represent too much risk.
            </p>
            <p className="text-lg font-semibold text-bb-black">
              We need to fix this structural problem now. The fix: Separate roles completely. David owns operations. Patrick owns sales.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
