'use client'

import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import HeroSlider from "@/components/home/HeroSlider";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">

      {/* 🔥 Reduced bottom padding */}
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-0 md:px-6 md:pb-14 md:pt-0">

        <HeroSlider />

        {/* 🔥 Reduced top margin */}
        <div className="hero-content-rise mx-auto mt-6 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange-soft px-4 py-1 text-xs md:text-sm font-semibold text-brand-orange">
            <ShieldCheck className="h-4 w-4" />
            Made in India · Quality Assured
          </span>

          {/* 🔥 Reduced spacing */}
          <h1 className="mt-3 text-balance font-heading text-2xl md:text-4xl font-extrabold leading-tight text-brand-navy">
            Welcome to RIVIKA PHARMA PRIVATE LIMITED            </h1>

          {/* 🔥 Tight text block */}
          <div className="mt-4 max-w-2xl mx-auto text-left space-y-2">

            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              <span className="font-semibold text-brand-navy">
                RIVIKA PHARMA PRIVATE LIMITED
              </span>{' '}
              is committed to delivering high-quality, affordable and innovative pharmaceutical products that improve the quality of life. Our product portfolio includes Tablets, Capsules and Pediatric Syrups manufactured at WHO-GMP & ISO certified manufacturing facilities.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              We believe in quality, trust and long-term relationships with healthcare professionals and patients across India.
            </p>

            {/* 🔥 Divider closer */}
            <div className="mt-3 h-[1px] w-14 bg-brand-orange mx-auto"></div>
          </div>

          {/* 🔥 Tagline closer */}
          <div className="mt-3 max-w-2xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-brand-orange tracking-wide">
              Quality • Innovation • Affordability • Trust
            </p>
          </div>

          {/* 🔥 Buttons closer */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange/90"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-card px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-secondary"
            >
              About Rivika
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}