import { useState, useEffect } from 'react'
import SlideCounter from './components/layout/SlideCounter'

// ==========================================
// ACT 1: THE INSIGHT (Slides 1-4)
// ==========================================
import Slide01_Title from './components/slides/Slide01_Title'
import Slide02_ExecutiveThesis from './components/slides/Slide02_ExecutiveThesis'
import Slide04_CurrentStateMetrics from './components/slides/Slide04_CurrentStateMetrics'
import Slide05_CurrentStateCustomers from './components/slides/Slide05_CurrentStateCustomers'

// ==========================================
// ACT 2: THE PROBLEM (Slides 5-9)
// ==========================================
import Slide03_TheProblem from './components/slides/Slide03_TheProblem'
import Slide06_WhyIncompatible from './components/slides/Slide06_WhyIncompatible'
import Slide07_TheMath from './components/slides/Slide07_TheMath'
import Slide08_DestructiveLanes from './components/slides/Slide08_DestructiveLanes'
import Slide09_TerminatedAccounts from './components/slides/Slide09_TerminatedAccounts'

// ==========================================
// ACT 3: THE OPPORTUNITY (Slides 10-15)
// ==========================================
import Slide03_ExecutiveGoal from './components/slides/Slide03_ExecutiveGoal'
import Slide08_CustomerRamp from './components/slides/Slide08_CustomerRamp'
import Slide15_CustomerProfitability from './components/slides/Slide15_CustomerProfitability'
import Slide05_CostOfWaiting from './components/slides/Slide05_CostOfWaiting'
import Slide07_HighMarginLanes from './components/slides/Slide07_HighMarginLanes'

// ==========================================
// ACT 4: THE SOLUTION (Slides 16-23)
// ==========================================
import Slide16_ThreeSolutionChanges from './components/slides/Slide16_ThreeSolutionChanges'
import Slide09_TeamStructure from './components/slides/Slide09_TeamStructure'
import Slide26_ProtectedCalling from './components/slides/Slide26_ProtectedCalling'
import Slide24_SalesActivityTargets from './components/slides/Slide24_SalesActivityTargets'
import Slide25_ConversionFunnel from './components/slides/Slide25_ConversionFunnel'
import Slide11_SalesSystem from './components/slides/Slide11_SalesSystem'
import Slide27_CallFramework from './components/slides/Slide27_CallFramework'
import Slide33_HandoffProtocol from './components/slides/Slide33_HandoffProtocol'

// ==========================================
// ACT 5: THE EXECUTION SYSTEM (Slides 24-36)
// ==========================================
import Slide24_CanPatrickAlone from './components/slides/Slide24_CanPatrickAlone'
import Slide16_FinancialProjection_Scenario2 from './components/slides/Slide16_FinancialProjection_Scenario2'
import Slide26_LeadGenerationStrategy from './components/slides/Slide26_LeadGenerationStrategy'
import Slide11_NAICSBuildingProducts from './components/slides/Slide11_NAICSBuildingProducts'
import Slide12_NAICSMetalFabrication from './components/slides/Slide12_NAICSMetalFabrication'
import Slide13_NAICSPlasticsPackaging from './components/slides/Slide13_NAICSPlasticsPackaging'
import Slide14_NAICSAutomotiveJIT from './components/slides/Slide14_NAICSAutomotiveJIT'
import Slide34_OperationsPriorities from './components/slides/Slide34_OperationsPriorities'
import Slide35_CarrierTiers from './components/slides/Slide35_CarrierTiers'
import Slide37_PipelineStages from './components/slides/Slide37_PipelineStages'
import Slide38_CustomerRampCurve from './components/slides/Slide38_CustomerRampCurve'
import Slide19_Accountability from './components/slides/Slide19_Accountability'
import Slide36_EscalationPaths from './components/slides/Slide36_EscalationPaths'

// ==========================================
// ACT 6: MEASUREMENT & ROADMAP (Slides 37-44)
// ==========================================
import Slide30_SalesKPIs from './components/slides/Slide30_SalesKPIs'
import Slide31_OperationsKPIs from './components/slides/Slide31_OperationsKPIs'
import Slide32_BusinessKPIs from './components/slides/Slide32_BusinessKPIs'
import Slide12_Roadmap from './components/slides/Slide12_Roadmap'
import Slide20_RoadmapPhase1 from './components/slides/Slide20_RoadmapPhase1'
import Slide21_RoadmapPhase2 from './components/slides/Slide21_RoadmapPhase2'
import Slide22_RoadmapPhase3 from './components/slides/Slide22_RoadmapPhase3'
import Slide23_RoadmapPhase4 from './components/slides/Slide23_RoadmapPhase4'

// ==========================================
// ACT 7: COMMITMENT (Slides 45-49)
// ==========================================
import Slide13_First30Days from './components/slides/Slide13_First30Days'
import Slide46_WhatMustBeTrue from './components/slides/Slide46_WhatMustBeTrue'
import Slide40_RisksMitigation from './components/slides/Slide40_RisksMitigation'
import Slide41_SuccessCriteria from './components/slides/Slide41_SuccessCriteria'
import Slide42_Commitment from './components/slides/Slide42_Commitment'

const slides = [
  // ACT 1: THE INSIGHT (Slides 1-4)
  Slide01_Title,
  Slide02_ExecutiveThesis,
  Slide04_CurrentStateMetrics,
  Slide05_CurrentStateCustomers,

  // ACT 2: THE PROBLEM (Slides 5-9)
  Slide03_TheProblem,
  Slide06_WhyIncompatible,
  Slide07_TheMath,
  Slide08_DestructiveLanes,
  Slide09_TerminatedAccounts,

  // ACT 3: THE OPPORTUNITY (Slides 10-15)
  Slide03_ExecutiveGoal,
  Slide08_CustomerRamp,
  Slide15_CustomerProfitability,
  Slide05_CostOfWaiting,
  Slide07_HighMarginLanes,

  // ACT 4: THE SOLUTION (Slides 16-23)
  Slide16_ThreeSolutionChanges,
  Slide09_TeamStructure,
  Slide26_ProtectedCalling,
  Slide24_SalesActivityTargets,
  Slide25_ConversionFunnel,
  Slide11_SalesSystem,
  Slide27_CallFramework,
  Slide33_HandoffProtocol,

  // ACT 5: THE EXECUTION SYSTEM (Slides 24-36)
  Slide24_CanPatrickAlone,
  Slide16_FinancialProjection_Scenario2,
  Slide26_LeadGenerationStrategy,
  Slide11_NAICSBuildingProducts,
  Slide12_NAICSMetalFabrication,
  Slide13_NAICSPlasticsPackaging,
  Slide14_NAICSAutomotiveJIT,
  Slide34_OperationsPriorities,
  Slide35_CarrierTiers,
  Slide37_PipelineStages,
  Slide38_CustomerRampCurve,
  Slide19_Accountability,
  Slide36_EscalationPaths,

  // ACT 6: MEASUREMENT & ROADMAP (Slides 37-44)
  Slide30_SalesKPIs,
  Slide31_OperationsKPIs,
  Slide32_BusinessKPIs,
  Slide12_Roadmap,
  Slide20_RoadmapPhase1,
  Slide21_RoadmapPhase2,
  Slide22_RoadmapPhase3,
  Slide23_RoadmapPhase4,

  // ACT 7: COMMITMENT (Slides 45-49)
  Slide13_First30Days,
  Slide46_WhatMustBeTrue,
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
