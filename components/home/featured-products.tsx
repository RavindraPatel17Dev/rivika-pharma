import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { OurBrands } from "@/components/home/OurBrands";
export function FeaturedProducts() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Our Brands
            </p>

            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-brand-navy md:text-4xl">
              Trusted Formulations for Everyday Health
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-card px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-card/60"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ✅ Correct placement */}
        <div className="mt-10">
          <OurBrands />
        </div>

      </div>
    </section>
  )
}