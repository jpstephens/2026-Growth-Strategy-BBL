import { useState, useEffect } from 'react'
import SlideCounter from './components/layout/SlideCounter'

// Import original slide components
import Slide01_Title from './components/slides/Slide01_Title'

// Import expanded executive summary slides
import Slide02_ExecutiveThesis from './components/slides/Slide02_ExecutiveThesis'
import Slide03_ExecutiveGoal from './components/slides/Slide03_ExecutiveGoal'

// Import current state slides
import Slide04_CurrentStateMetrics from './components/slides/Slide04_CurrentStateMetrics'
import Slide05_CurrentStateCustomers from './components/slides/Slide05_CurrentStateCustomers'
import Slide06_TopCustomers from './components/slides/Slide06_TopCustomers'
import Slide07_HighMarginLanes from './components/slides/Slide07_HighMarginLanes'
import Slide08_DestructiveLanes from './components/slides/Slide08_DestructiveLanes'
import Slide09_TerminatedAccounts from './components/slides/Slide09_TerminatedAccounts'

// Import target industries slides
import Slide10_TargetIndustries from './components/slides/Slide10_TargetIndustries'
import Slide11_NAICSBuildingProducts from './components/slides/Slide11_NAICSBuildingProducts'
import Slide12_NAICSMetalFabrication from './components/slides/Slide12_NAICSMetalFabrication'
import Slide13_NAICSPlasticsPackaging from './components/slides/Slide13_NAICSPlasticsPackaging'
import Slide14_NAICSAutomotiveJIT from './components/slides/Slide14_NAICSAutomotiveJIT'

// Import financial projection slides
import Slide15_FinancialProjection_Scenario1 from './components/slides/Slide15_FinancialProjection_Scenario1'
import Slide16_FinancialProjection_Scenario2 from './components/slides/Slide16_FinancialProjection_Scenario2'

// Import team and hiring slides
import Slide17_CurrentTeam from './components/slides/Slide17_CurrentTeam'
import Slide18_HiringStrategy from './components/slides/Slide18_HiringStrategy'
import Slide19_Accountability from './components/slides/Slide19_Accountability'

// Import roadmap phase slides
import Slide20_RoadmapPhase1 from './components/slides/Slide20_RoadmapPhase1'
import Slide21_RoadmapPhase2 from './components/slides/Slide21_RoadmapPhase2'
import Slide22_RoadmapPhase3 from './components/slides/Slide22_RoadmapPhase3'
import Slide23_RoadmapPhase4 from './components/slides/Slide23_RoadmapPhase4'

// Import sales system slides
import Slide24_SalesActivityTargets from './components/slides/Slide24_SalesActivityTargets'
import Slide25_ConversionFunnel from './components/slides/Slide25_ConversionFunnel'
import Slide26_ProtectedCalling from './components/slides/Slide26_ProtectedCalling'
import Slide27_CallFramework from './components/slides/Slide27_CallFramework'
import Slide28_Objections from './components/slides/Slide28_Objections'
import Slide29_SuccessOutcomes from './components/slides/Slide29_SuccessOutcomes'

// Import KPI slides
import Slide30_SalesKPIs from './components/slides/Slide30_SalesKPIs'
import Slide31_OperationsKPIs from './components/slides/Slide31_OperationsKPIs'
import Slide32_BusinessKPIs from './components/slides/Slide32_BusinessKPIs'

// Import operations slides
import Slide33_HandoffProtocol from './components/slides/Slide33_HandoffProtocol'
import Slide34_OperationsPriorities from './components/slides/Slide34_OperationsPriorities'
import Slide35_CarrierTiers from './components/slides/Slide35_CarrierTiers'
import Slide36_EscalationPaths from './components/slides/Slide36_EscalationPaths'

// Import pipeline and customer ramp slides
import Slide37_PipelineStages from './components/slides/Slide37_PipelineStages'
import Slide38_CustomerRampCurve from './components/slides/Slide38_CustomerRampCurve'

// Import summary and closing slides
import Slide39_FourPillarsReview from './components/slides/Slide39_FourPillarsReview'
import Slide40_RisksMitigation from './components/slides/Slide40_RisksMitigation'
import Slide41_SuccessCriteria from './components/slides/Slide41_SuccessCriteria'
import Slide42_Commitment from './components/slides/Slide42_Commitment'

const slides = [
  Slide01_Title,
  Slide02_ExecutiveThesis,
  Slide03_ExecutiveGoal,
  Slide04_CurrentStateMetrics,
  Slide05_CurrentStateCustomers,
  Slide06_TopCustomers,
  Slide07_HighMarginLanes,
  Slide08_DestructiveLanes,
  Slide09_TerminatedAccounts,
  Slide10_TargetIndustries,
  Slide11_NAICSBuildingProducts,
  Slide12_NAICSMetalFabrication,
  Slide13_NAICSPlasticsPackaging,
  Slide14_NAICSAutomotiveJIT,
  Slide15_FinancialProjection_Scenario1,
  Slide16_FinancialProjection_Scenario2,
  Slide17_CurrentTeam,
  Slide18_HiringStrategy,
  Slide19_Accountability,
  Slide20_RoadmapPhase1,
  Slide21_RoadmapPhase2,
  Slide22_RoadmapPhase3,
  Slide23_RoadmapPhase4,
  Slide24_SalesActivityTargets,
  Slide25_ConversionFunnel,
  Slide26_ProtectedCalling,
  Slide27_CallFramework,
  Slide28_Objections,
  Slide29_SuccessOutcomes,
  Slide30_SalesKPIs,
  Slide31_OperationsKPIs,
  Slide32_BusinessKPIs,
  Slide33_HandoffProtocol,
  Slide34_OperationsPriorities,
  Slide35_CarrierTiers,
  Slide36_EscalationPaths,
  Slide37_PipelineStages,
  Slide38_CustomerRampCurve,
  Slide39_FourPillarsReview,
  Slide40_RisksMitigation,
  Slide41_SuccessCriteria,
  Slide42_Commitment,
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
