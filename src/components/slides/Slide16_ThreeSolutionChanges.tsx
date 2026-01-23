import Slide from '../layout/Slide'

export default function Slide16_ThreeSolutionChanges() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-sm text-center">Three Structural Changes Fix This</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Here's exactly how we solve the problem</p>

        <div className="space-y-lg">
          <div className="grid grid-cols-3 gap-md">
            {/* Change 1 */}
            <div className="bg-white border-2 border-bb-cyan rounded-lg p-lg">
              <div className="text-center">
                <div className="text-5xl mb-md">1️⃣</div>
                <h3 className="text-xl font-bold text-bb-black mb-md">Free Patrick From Operations</h3>
                <p className="text-sm text-bb-dark-gray mb-md">
                  David owns 100% of operations for existing accounts. Patrick sells and only sells. No exceptions.
                </p>
                <div className="text-xs font-semibold text-bb-cyan bg-bb-cyan/10 rounded px-md py-xs inline-block">
                  SOLVES: Role confusion
                </div>
              </div>
            </div>

            {/* Change 2 */}
            <div className="bg-white border-2 border-bb-cyan rounded-lg p-lg">
              <div className="text-center">
                <div className="text-5xl mb-md">2️⃣</div>
                <h3 className="text-xl font-bold text-bb-black mb-md">Enforce Sales Activity</h3>
                <p className="text-sm text-bb-dark-gray mb-md">
                  200+ dials/week, measured daily, non-negotiable. Protected calling blocks. Activity generates results.
                </p>
                <div className="text-xs font-semibold text-bb-cyan bg-bb-cyan/10 rounded px-md py-xs inline-block">
                  SOLVES: Low call volume
                </div>
              </div>
            </div>

            {/* Change 3 */}
            <div className="bg-white border-2 border-bb-cyan rounded-lg p-lg">
              <div className="text-center">
                <div className="text-5xl mb-md">3️⃣</div>
                <h3 className="text-xl font-bold text-bb-black mb-md">Cold Email Multiplier</h3>
                <p className="text-sm text-bb-dark-gray mb-md">
                  Instantly.ai warms 5,000 leads. Patrick calls warm prospects. 4x conversion vs. cold calling alone.
                </p>
                <div className="text-xs font-semibold text-bb-cyan bg-bb-cyan/10 rounded px-md py-xs inline-block">
                  SOLVES: Low conversion
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-bb-cyan/10 to-blue-50 border-2 border-bb-cyan p-lg rounded-lg mt-lg">
            <p className="text-lg text-bb-dark-gray text-center">
              <span className="font-semibold text-bb-black">Impact:</span> These changes move Patrick from 0-50 calls/week to 200+ calls/week, with warm leads instead of cold calls. That's the difference between 1 customer/month and 4-5 customers/month.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
