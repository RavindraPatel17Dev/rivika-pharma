import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageBanner({
  title,
  subtitle,
  crumbs = [],
}: {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-white/60">
          <Link href="/" className="hover:text-brand-orange">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4" />
              {c.href ? (
                <Link href={c.href} className="hover:text-brand-orange">{c.label}</Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-balance font-heading text-3xl font-extrabold text-white md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-pretty text-white/70">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
