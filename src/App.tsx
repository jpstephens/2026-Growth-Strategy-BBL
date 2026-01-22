import { useState, useEffect, useCallback } from 'react'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Pagination from './components/layout/Pagination'
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
  const [currentPage, setCurrentPage] = useState(0)

  const goToPage = useCallback((index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentPage(index)
      // Scroll to top of content when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        return
      }

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goToPage(currentPage - 1)
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goToPage(currentPage + 1)
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToPage(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToPage(sections.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, goToPage])

  // Touch swipe navigation
  useEffect(() => {
    let touchStartX = 0
    let touchStartY = 0
    let touchEndX = 0
    let touchEndY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
      touchStartY = e.changedTouches[0].screenY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      touchEndY = e.changedTouches[0].screenY
      handleSwipe()
    }

    const handleSwipe = () => {
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY
      const minSwipeDistance = 50

      // Only trigger horizontal swipe if it's more horizontal than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - go to previous
          goToPage(currentPage - 1)
        } else {
          // Swipe left - go to next
          goToPage(currentPage + 1)
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentPage, goToPage])

  // Get the current section component
  const CurrentSection = sections[currentPage].component

  return (
    <div className="min-h-screen bg-bb-white pb-32 md:pb-24">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Header currentPage={currentPage} totalPages={sections.length} />

      <div className="flex">
        <Navigation
          sections={sections}
          activeSection={currentPage}
          onSectionClick={goToPage}
        />

        <main id="main-content" className="flex-1 min-w-0">
          <div className="page-content">
            <section
              key={sections[currentPage].id}
              id={sections[currentPage].id}
              className="animate-fade-in"
            >
              <CurrentSection />
            </section>
          </div>
        </main>
      </div>

      <Pagination
        sections={sections}
        currentPage={currentPage}
        onPageChange={goToPage}
      />

      <Footer />
    </div>
  )
}
