import Slide from '../layout/Slide'

export default function Slide04_Opportunity() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <h2 className="text-5xl font-bold text-bb-black mb-xl text-center">The Opportunity</h2>
        <p className="text-2xl text-bb-dark-gray mb-3xl text-center">The math is simple and proven</p>

        <div className="mb-3xl">
          <div className="bg-bb-light-gray border-2 border-bb-border p-lg rounded-lg mb-lg text-center">
            <p className="text-lg text-bb-dark-gray mb-md">We know:</p>
            <div className="text-2xl font-bold text-bb-black mb-md">
              $208 avg margin/load × 420 loads/month = $87,360 monthly profit
            </div>
            <p className="text-lg text-bb-dark-gray">
              This isn't theoretical. We've proven the unit economics. We've proven customers will pay it.
            </p>
          </div>

          <div className="bg-bb-cyan/10 border-2 border-bb-cyan p-lg rounded-lg text-center">
            <p className="text-lg text-bb-dark-gray mb-md">To get there, we need:</p>
            <div className="text-2xl font-bold text-bb-cyan">
              481 loads across 65-70 customers
            </div>
            <p className="text-lg text-bb-dark-gray mt-md">
              Not a lottery. Not a gamble. A systematic execution of a known model.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-bb-black">
            This is what $100K monthly profit looks like.
          </p>
        </div>
      </div>
    </Slide>
  )
}
