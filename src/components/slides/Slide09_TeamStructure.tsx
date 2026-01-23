import Slide from '../layout/Slide'

export default function Slide09_TeamStructure() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-lg">
          <h2 className="text-5xl font-display font-bold text-bb-navy-900 mb-sm">Team Structure</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 to-bb-sunset-500 mx-auto rounded-full mb-lg" />
        </div>
        <p className="text-2xl text-bb-slate-600 mb-2xl text-center">Role clarity is the foundation</p>

        <div className="grid grid-cols-2 gap-xl">
          {/* CEO/Founder */}
          <div className="bg-gradient-to-br from-bb-electric-50 to-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-navy-900 mb-md">CEO/Founder</h3>
            <ul className="space-y-sm text-base text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Sales strategy & high-value customers</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Carrier development partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Team leadership & accountability</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Pricing authority</span>
              </li>
            </ul>
          </div>

          {/* Sales Rep 1 */}
          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-navy-900 mb-md">Sales Rep 1</h3>
            <ul className="space-y-sm text-base text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Own customer acquisition targets</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>200 dials/week minimum</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Qualify, pitch, close small-medium accounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Target: +4 new customers/month by Q2</span>
              </li>
            </ul>
          </div>

          {/* Operations Manager */}
          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-electric-700 mb-md">Operations Manager</h3>
            <ul className="space-y-sm text-base text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Customer onboarding & account management</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Carrier assignments & load optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Problem resolution & retention</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Systems management (HubSpot, Alvys)</span>
              </li>
            </ul>
          </div>

          {/* Carrier Development */}
          <div className="bg-white border-2 border-bb-electric-600 p-lg rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-bb-electric-700 mb-md">Carrier Development</h3>
            <ul className="space-y-sm text-base text-bb-slate-700">
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Recruit carriers in high-margin lanes</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Support customer growth with availability</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Monitor carrier performance & service</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-electric-600 font-bold mr-sm">→</span>
                <span>Owner: CEO or future dedicated role</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  )
}
