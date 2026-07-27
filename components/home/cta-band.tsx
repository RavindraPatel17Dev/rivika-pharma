import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="bg-brand-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-balance font-heading text-2xl font-bold text-white md:text-3xl">
              Partner with Rivika Pharma
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Interested in our products, distribution or trade enquiries? Our
              team would be glad to assist you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange/90"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
