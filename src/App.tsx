import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import ProgressIndicator from './components/layout/ProgressIndicator'
import ExecutiveSummary from './components/sections/ExecutiveSummary'
import CurrentState from './components/sections/CurrentState'
import TheProblem from './components/sections/TheProblem'
import TheTarget from './components/sections/TheTarget'
import TeamStructure from './components/sections/TeamStructure'
import SalesSystem from './components/sections/SalesSystem'
import LeadGeneration from './components/sections/LeadGeneration'
import Pipeline from './components/sections/Pipeline'
import Operations from './components/sections/Operations'
import CarrierDevelopment from './components/sections/CarrierDevelopment'
import FinancialModel from './components/sections/FinancialModel'
import KPIs from './components/sections/KPIs'
import MeetingRhythms from './components/sections/MeetingRhythms'
import TechnologyStack from './components/sections/TechnologyStack'
import Roadmap from './components/sections/Roadmap'
import FirstThirtyDays from './components/sections/FirstThirtyDays'
import Footer from './components/layout/Footer'

const sections = [
  { id: 'executive-summary', title: 'Executive Summary', component: ExecutiveSummary },
  { id: 'current-state', title: 'Current State Analysis', component: CurrentState },
  { id: 'the-problem', title: 'Why Current Approach Won\'t Work', component: TheProblem },
  { id: 'the-target', title: 'The Target and the Math', component: TheTarget },
  { id: 'team-structure', title: 'The Team Structure', component: TeamStructure },
  { id: 'sales-system', title: 'The Sales System', component: SalesSystem },
  { id: 'lead-generation', title: 'Lead Generation Strategy', component: LeadGeneration },
  { id: 'pipeline', title: 'HubSpot Pipeline', component: Pipeline },
  { id: 'operations', title: 'Operations System', component: Operations },
  { id: 'carrier-development', title: 'Carrier Development', component: CarrierDevelopment },
  { id: 'financial-model', title: 'Financial Model', component: FinancialModel },
  { id: 'kpis', title: 'KPIs and Dashboard', component: KPIs },
  { id: 'meeting-rhythms', title: 'Meeting Rhythms', component: MeetingRhythms },
  { id: 'technology-stack', title: 'Technology Stack', component: TechnologyStack },
  { id: 'roadmap', title: '12-Month Roadmap', component: Roadmap },
  { id: 'first-thirty-days', title: 'First 30 Days Action Plan', component: FirstThirtyDays },
]

export default function App() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.findIndex(section => {
        const element = document.getElementById(section.id)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= window.innerHeight / 2
      })
      if (current >= 0) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(index)
    }
  }

  return (
    <div className="min-h-screen bg-bb-white">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Header />

      <div className="flex">
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />

        <main id="main-content" className="flex-1">
          <div className="flex">
            <div className="flex-1">
              {sections.map((section) => {
                const Component = section.component
                return (
                  <section key={section.id} id={section.id}>
                    <Component />
                  </section>
                )
              })}
            </div>

            <ProgressIndicator
              sections={sections}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
