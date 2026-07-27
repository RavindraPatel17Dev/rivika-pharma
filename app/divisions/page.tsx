import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { DivisionsGrid } from '@/components/divisions-grid'

export const metadata: Metadata = {
  title: 'Therapeutic Divisions',
  description:
    'Rivika Pharma operates across therapeutic divisions including gastro-intestinal, anti-microbial, respiratory, neuro, orthopaedic, paediatric, gynaecology and nutraceutical wellness.',
}

export default function DivisionsPage() {
  return (
    <>
      <PageBanner
        title=" Upcoming Therapeutic Divisions"
        subtitle="Focused therapy areas backed by quality manufacturing and everyday affordability."
        crumbs={[{ label: 'Divisions' }]}
      />
      <DivisionsGrid heading={false} />
    </>
  )
}
