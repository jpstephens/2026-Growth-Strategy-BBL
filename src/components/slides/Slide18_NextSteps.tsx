import Slide from '../layout/Slide'

export default function Slide18_NextSteps() {
  return (
    <Slide variant="gradient">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-2xl">
          <h2 className="text-6xl font-display font-bold text-bb-navy-900 mb-md">Next Steps</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-bb-electric-500 via-bb-electric-400 to-bb-sunset-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-lg mb-2xl">
          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-bb-electric-700 mr-lg">1</div>
              <div>
                <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-sm">This Week</h3>
                <p className="text-base text-bb-slate-700">
                  Review this strategy. Ask questions. Align on roles and commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-bb-slate-300 p-lg rounded-2xl shadow-lg">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-bb-electric-700 mr-lg">2</div>
              <div>
                <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-sm">Next Week</h3>
                <p className="text-base text-bb-slate-700">
                  Set up systems (HubSpot, metrics dashboard, weekly meeting cadence).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-bb-electric-400 p-lg rounded-2xl shadow-lg">
            <div className="flex items-start">
              <div className="text-3xl font-bold text-bb-electric-700 mr-lg">3</div>
              <div>
                <h3 className="text-2xl font-display font-bold text-bb-navy-900 mb-sm">February 1st</h3>
                <p className="text-base text-bb-slate-700">
                  Full execution begins. We're committed to hitting 75 loads/week, 4-5 new customers/month, and $100K by December.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bb-navy-900 text-white p-2xl rounded-2xl text-center shadow-lg">
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
