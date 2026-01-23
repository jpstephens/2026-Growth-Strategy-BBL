import Slide from '../layout/Slide'

export default function Slide18_NextSteps() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-6xl font-bold text-bb-black mb-3xl text-center">Next Steps</h2>

        <div className="space-y-lg mb-3xl">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-bb-cyan mr-lg">1</div>
              <div>
                <h3 className="text-2xl font-bold text-bb-black mb-sm">This Week</h3>
                <p className="text-base text-bb-dark-gray">
                  Review this strategy. Ask questions. Align on roles and commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-bb-cyan mr-lg">2</div>
              <div>
                <h3 className="text-2xl font-bold text-bb-black mb-sm">Next Week</h3>
                <p className="text-base text-bb-dark-gray">
                  Set up systems (HubSpot, metrics dashboard, weekly meeting cadence).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-bb-cyan mr-lg">3</div>
              <div>
                <h3 className="text-2xl font-bold text-bb-black mb-sm">February 1st</h3>
                <p className="text-base text-bb-dark-gray">
                  Full execution begins. We're committed to hitting 75 loads/week, 4-5 new customers/month, and $100K by December.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bb-black text-bb-white p-2xl rounded-lg text-center">
          <p className="text-2xl font-bold mb-md">
            The plan is clear. The math is proven. The opportunity is now.
          </p>
          <p className="text-xl">
            Let's execute.
          </p>
        </div>
      </div>
    </Slide>
  )
}
