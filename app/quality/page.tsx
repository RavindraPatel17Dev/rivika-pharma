import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, BadgeCheck, FileCheck2, Microscope, Boxes, ClipboardCheck } from 'lucide-react'
import { PageBanner } from '@/components/page-banner'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Quality & Compliance',
  description:
    'Rivika Pharma is committed to quality and regulatory compliance — WHO-GMP sourced products with valid Drug License and FSSAI registration.',
}

const pillars = [
  { icon: Microscope, title: 'Stringent Testing', text: 'Products sourced from partners with rigorous in-process and finished-goods testing.' },
  { icon: Boxes, title: 'GMP-Certified Sourcing', text: 'Manufactured by WHO-GMP compliant bulk manufacturers across India.' },
  { icon: ClipboardCheck, title: 'Batch Traceability', text: 'Full documentation and traceability for every batch we distribute.' },
  { icon: FileCheck2, title: 'Regulatory Compliance', text: 'Valid Drug License and FSSAI registration held by the company.' },
]

export default function QualityPage() {
  return (
    <>
      <PageBanner
        title="Quality & Compliance"
        subtitle="Quality is not a step in our process — it is the foundation of everything we do."
        crumbs={[{ label: 'Quality' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border">
              <div className="relative aspect-[3/4] w-full">
                <Image src="/lab/lab-3.jpg" alt="Quality inspection on production line" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-md ring-1 ring-border">
              <div className="relative aspect-[3/4] w-full">
                <Image src="/lab/lab-1.jpg" alt="Pharmaceutical laboratory" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Our Commitment
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-brand-navy md:text-4xl">
              Trusted Quality, Every Single Batch
            </h2>
            <p className="mt-5 text-muted-foreground">
              We partner only with certified manufacturers who share our
              uncompromising standards. From raw materials to the finished pack,
              each product passes through defined quality checkpoints before it
              reaches you.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'WHO-GMP compliant manufacturing partners',
                'Documented quality checks and batch records',
                'Proper cold-chain and storage practices',
                'Ethical, transparent supply and distribution',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  )
}

function Reg({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary p-5">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 font-heading text-base font-bold text-brand-navy">
        {value}
      </dd>
    </div>
  )
}
