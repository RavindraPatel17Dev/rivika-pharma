import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { divisions, getDivision, getProductsByDivision } from '@/lib/data'
import { PageBanner } from '@/components/page-banner'
import { ProductCard } from '@/components/product-card'

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const division = getDivision(slug)
  if (!division) return { title: 'Division Not Found' }
  return {
    title: `${division.name} Division`,
    description: division.description,
  }
}

export default async function DivisionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const division = getDivision(slug)
  if (!division) notFound()

  const divisionProducts = getProductsByDivision(slug)

  return (
    <>
      <PageBanner
        title={`${division.name} Division`}
        subtitle={division.description}
        crumbs={[{ label: 'Divisions', href: '/divisions' }, { label: division.name }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-brand-navy-deep shadow-xl ring-1 ring-border">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={division.image || '/placeholder.svg'}
                alt={division.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">
              {division.short}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-brand-navy md:text-3xl">
              Care that makes a difference
            </h2>
            <p className="mt-4 text-muted-foreground">{division.description}</p>
            <p className="mt-4 text-muted-foreground">
              Explore the {division.name.toLowerCase()} formulations from our
              launch portfolio below — each crafted for quality, safety and
              everyday reliability.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-deep"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 font-heading text-2xl font-bold text-brand-navy">
            Products in this Division
          </h2>
          {divisionProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {divisionProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              Products in this division are coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
