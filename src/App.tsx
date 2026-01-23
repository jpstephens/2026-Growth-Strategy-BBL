import { useState, useEffect } from 'react'
import SlideCounter from './components/layout/SlideCounter'

// Import all slide components
import Slide01_Title from './components/slides/Slide01_Title'
import Slide02_CurrentState from './components/slides/Slide02_CurrentState'
import Slide03_TheProblem from './components/slides/Slide03_TheProblem'
import Slide04_Opportunity from './components/slides/Slide04_Opportunity'
import Slide05_CostOfWaiting from './components/slides/Slide05_CostOfWaiting'
import Slide06_Goal from './components/slides/Slide06_Goal'
import Slide07_TheMath from './components/slides/Slide07_TheMath'
import Slide08_CustomerRamp from './components/slides/Slide08_CustomerRamp'
import Slide09_TeamStructure from './components/slides/Slide09_TeamStructure'
import Slide10_FourPillars from './components/slides/Slide10_FourPillars'
import Slide11_SalesSystem from './components/slides/Slide11_SalesSystem'
import Slide12_Roadmap from './components/slides/Slide12_Roadmap'
import Slide13_First30Days from './components/slides/Slide13_First30Days'
import Slide14_FinancialComparison from './components/slides/Slide14_FinancialComparison'
import Slide15_CustomerProfitability from './components/slides/Slide15_CustomerProfitability'
import Slide16_LaneStrategy from './components/slides/Slide16_LaneStrategy'
import Slide17_Commitment from './components/slides/Slide17_Commitment'
import Slide18_NextSteps from './components/slides/Slide18_NextSteps'

const slides = [
  Slide01_Title,
  Slide02_CurrentState,
  Slide03_TheProblem,
  Slide04_Opportunity,
  Slide05_CostOfWaiting,
  Slide06_Goal,
  Slide07_TheMath,
  Slide08_CustomerRamp,
  Slide09_TeamStructure,
  Slide10_FourPillars,
  Slide11_SalesSystem,
  Slide12_Roadmap,
  Slide13_First30Days,
  Slide14_FinancialComparison,
  Slide15_CustomerProfitability,
  Slide16_LaneStrategy,
  Slide17_Commitment,
  Slide18_NextSteps,
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const CurrentSlide = slides[currentSlide]

  return (
    <div className="w-full h-screen bg-bb-white overflow-hidden">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <main id="main-content" className="w-full h-screen">
        <CurrentSlide />
      </main>

      <SlideCounter current={currentSlide} total={slides.length} />
    </div>
  )
}
