import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StatsBar } from '@/components/stats-bar'
import { AboutSection } from '@/components/about-section'
import { DivisionsSection } from '@/components/divisions-section'
import { QualitySection } from '@/components/quality-section'
import { ResearchSection } from '@/components/research-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <DivisionsSection />
        <QualitySection />
        <ResearchSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
