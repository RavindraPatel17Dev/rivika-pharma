import Link from 'next/link'
import Image from 'next/image'
import { Pill } from 'lucide-react'
import type { Product } from '@/lib/data'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} pack shot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-brand-blue">
          <Pill className="h-3.5 w-3.5" />
          {product.form}
        </span>
        <h3 className="mt-3 font-heading text-lg font-bold text-brand-navy">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-orange">
          {product.tagline}
        </p>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {product.composition}
        </p>
        <span className="mt-4 text-sm font-semibold text-brand-navy underline-offset-4 group-hover:underline">
          View details
        </span>
      </div>
    </Link>
  )
}
