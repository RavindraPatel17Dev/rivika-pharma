import { Hero } from '@/components/home/hero'
import { StatsBar } from '@/components/home/stats-bar'
import { DivisionsGrid } from '@/components/divisions-grid'
import { FeaturedProducts } from '@/components/home/featured-products'
import { WhyChoose } from '@/components/home/why-choose'
import { CtaBand } from '@/components/home/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <DivisionsGrid />
      <FeaturedProducts />
      <WhyChoose />
      <CtaBand />
    </>
  )
}
