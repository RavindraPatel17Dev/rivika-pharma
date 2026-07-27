import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Package, FlaskConical, Layers } from 'lucide-react'
import { products, getDivision } from '@/lib/data'
import { PageBanner } from '@/components/page-banner'
import { ProductCard } from '@/components/product-card'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: `${product.name} — ${product.composition}. ${product.tagline}`,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.divisions.some((d) => product.divisions.includes(d)),
    )
    .slice(0, 3)

  return (
    <>
      <PageBanner
        title={product.name}
        subtitle={product.tagline}
        crumbs={[{ label: 'Products', href: '/products' }, { label: product.name }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary p-4">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={`${product.name} pack shot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.divisions.map((d) => {
                const div = getDivision(d)
                if (!div) return null
                return (
                  <Link
                    key={d}
                    href={`/divisions/${div.slug}`}
                    className="rounded-full bg-brand-orange-soft px-3 py-1 text-xs font-semibold text-brand-orange hover:bg-brand-orange/20"
                  >
                    {div.name}
                  </Link>
                )
              })}
            </div>

            <h2 className="mt-4 font-heading text-2xl font-bold text-brand-navy">
              {product.name}
            </h2>

            <dl className="mt-6 space-y-5">
              <InfoRow icon={FlaskConical} label="Composition" value={product.composition} />
              <InfoRow icon={Layers} label="Dosage Form" value={product.form} />
              <InfoRow icon={Package} label="Packaging" value={product.pack} />
            </dl>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-base font-bold text-brand-navy">
                Key Indications
              </h3>
              <ul className="mt-4 space-y-3">
                {product.indications.map((ind) => (
                  <li key={ind} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    {ind}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              This information is intended for general awareness only and is not
              a substitute for professional medical advice. This is a
              prescription product — please use only as directed by a registered
              medical practitioner.
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
            <h2 className="mb-8 font-heading text-2xl font-bold text-brand-navy">
              Related Products
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-navy">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm font-medium text-foreground">{value}</dd>
      </div>
    </div>
  )
}
