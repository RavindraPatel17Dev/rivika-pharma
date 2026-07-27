import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import { company, divisions } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-lg bg-white p-3">
            <Image
              src="/logo.jpg"
              alt="Rivika Pharma"
              width={280}
              height={150}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {company.name} - committed to caring beyond medicine with quality,
            affordable and Made in India formulations.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-brand-orange">About Us</Link></li>
            <li><Link href="/quality" className="hover:text-brand-orange">Quality & Compliance</Link></li>
            <li><Link href="/products" className="hover:text-brand-orange">Our Products</Link></li>
            <li><Link href="/contact" className="hover:text-brand-orange">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Divisions
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {divisions.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link href={`/divisions/${d.slug}`} className="hover:text-brand-orange">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Reach Us
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-orange" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-orange">
                {company.email}
              </a>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">

          <p className="mt-2 text-xs text-white/50 text-center">        
              © {new Date().getFullYear()} {company.name}. All rights reserved. Proudly Made in India.
          </p>

        </div>
      </div>
    </footer>
  )
}
