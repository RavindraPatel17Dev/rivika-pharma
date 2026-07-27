import type { Metadata } from 'next'
import { PageBanner } from '@/components/page-banner'
import { ProductsExplorer } from '@/components/products-explorer'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore Rivika Pharma’s launch portfolio of quality, Made in India formulations across gastro, anti-infective, respiratory, neuro, ortho, paediatric and wellness therapies.',
}

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Our Products"
        subtitle="A focused launch portfolio of trusted formulations — filter by therapeutic division to find what you need."
        crumbs={[{ label: 'Products' }]}
      />
      <ProductsExplorer />
    </>
  )
}
