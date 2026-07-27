import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { divisions } from '@/lib/data'

export function DivisionsGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      {heading && (
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">
           Upcoming Therapeutic Divisions
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-brand-navy md:text-4xl">
            Focused Care Across Specialities
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our portfolio spans multiple therapy areas, each backed by quality
            manufacturing and everyday affordability.
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {divisions.map((d) => (
          <Link
            key={d.slug}
            href={`/divisions/${d.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-brand-navy-deep">
              <Image
                src={d.image || '/placeholder.svg'}
                alt={d.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-2 p-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-brand-navy">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.short}</p>
              </div>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-brand-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
