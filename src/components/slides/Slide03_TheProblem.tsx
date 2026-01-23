import Slide from '../layout/Slide'

export default function Slide03_TheProblem() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">The Problem</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">Role confusion kills accountability and growth</p>

        <div className="space-y-lg">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-black mb-sm">Currently</h3>
            <ul className="text-lg text-bb-dark-gray space-y-sm">
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">•</span>
                <span>Sales, operations, and carrier development overlap</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">•</span>
                <span>No clear owner for customer acquisition</span>
              </li>
              <li className="flex items-start">
                <span className="text-bb-cyan font-bold mr-sm">•</span>
                <span>Metrics tracked but not actively managed</span>
              </li>
            </ul>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <h3 className="text-2xl font-bold text-bb-cyan mb-sm">Result</h3>
            <p className="text-lg text-bb-dark-gray mb-sm">
              At 75 loads/month with 7 customers, we're stable but not growing. Without clarity on who owns what, we can't scale to 420 loads/month and 88 customers.
            </p>
            <p className="text-lg font-semibold text-bb-black">
              We need role clarity. We need a sales system. We need accountability.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
