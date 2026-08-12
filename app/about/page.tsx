import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, Leaf } from 'lucide-react'
import { PageBanner } from '@/components/page-banner'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Rivika Pharma Private Limited is a Central India–based, Made in India pharmaceutical company committed to quality, affordable healthcare — caring beyond medicine.',
}

const values = [
  { icon: Heart, title: 'Patient First', text: 'Every decision begins with the wellbeing of the people we serve.' },
  { icon: Leaf, title: 'Quality & Safety', text: 'Uncompromising standards from sourcing to the shelf.' },
  { icon: Target, title: 'Accessibility', text: 'Affordable formulations that put good health within reach.' },
  { icon: Eye, title: 'Integrity', text: 'Ethical, transparent and responsible in everything we do.' },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Rivika Pharma"
        subtitle="Caring beyond medicine — a Made in India pharmaceutical company built on quality, trust and compassion."
        crumbs={[{ label: 'About' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-heading text-lg font-semibold uppercase tracking-widest text-brand-orange">   
              Who We Are
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-brand-navy md:text-4xl">
              A New Chapter in Indian Healthcare
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                {company.name} is an Central India pharmaceutical company
                dedicated to making quality, affordable medicines available to
                families across India. We market a thoughtfully curated range of
                formulations manufactured by trusted, certified bulk
                manufacturers.
              </p>
              <p>
                Guided by our philosophy of{' '}
                <span className="font-semibold text-brand-navy">
                  “Caring Beyond Medicine,”
                </span>{' '}
                we focus on real, everyday health needs — from digestive comfort
                and infection control to nerve, bone, respiratory and paediatric
                care.
              </p>
              <p>
                Every product we bring to market reflects our commitment to
                safety, efficacy and value — proudly Made in India, for India.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <div className="relative aspect-[4/2.5] w-full">
              <Image
                src="/hero-reception.jpeg"
                alt="Rivika Pharma office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 md:px-6 md:py-16">
          <div className="rounded-3xl bg-brand-navy p-8 text-white md:p-10">
            <Target className="h-8 w-8 text-brand-orange" />
            <h3 className="mt-4 font-heading text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-white/80">
              To improve lives by delivering high-quality, affordable and
              reliable pharmaceutical products, backed by genuine care and
              ethical practices.
            </p>
          </div>

           <div className="rounded-3xl bg-brand-navy p-8 text-white md:p-10">
            <Eye className="h-8 w-8 text-brand-orange" />
            <h3 className="mt-4 font-heading text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-white/80">
              To become a trusted name in Indian healthcare, recognised for
              quality, integrity and a patient-first approach that extends
              beyond medicine.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Our Core Values
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-navy md:text-4xl">
            What Drives Us Every Day
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand-navy">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
