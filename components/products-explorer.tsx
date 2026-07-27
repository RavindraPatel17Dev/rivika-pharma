'use client'

import { useState } from 'react'
import { products, divisions } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

export function ProductsExplorer() {
  const [active, setActive] = useState<string>('all')

  const filtered =
    active === 'all'
      ? products
      : products.filter((p) => p.divisions.includes(active))

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
      <div className="mb-10 flex flex-wrap gap-2">
        <FilterButton
          label="All Products"
          active={active === 'all'}
          onClick={() => setActive('all')}
        />
        {divisions.map((d) => (
          <FilterButton
            key={d.slug}
            label={d.name}
            active={active === d.slug}
            onClick={() => setActive(d.slug)}
          />
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  )
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? 'bg-brand-navy text-white'
          : 'border border-border bg-card text-brand-navy hover:bg-secondary'
      }`}
    >
      {label}
    </button>
  )
}
