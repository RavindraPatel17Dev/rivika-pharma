import Image from 'next/image'
import { ShieldCheck, FlaskConical, HandHeart, BadgeIndianRupee } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    text: 'Every product is sourced from certified, WHO-GMP compliant manufacturing partners and rigorously checked.',
  },
  {
    icon: FlaskConical,
    title: 'Science-Backed Formulations',
    text: 'Thoughtfully developed molecules and combinations addressing real, everyday health needs.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Affordable & Accessible',
    text: 'We believe quality healthcare should be within everyone’s reach — value without compromise.',
  },
  {
    icon: HandHeart,
    title: 'Caring Beyond Medicine',
    text: 'A patient-first philosophy that goes beyond the prescription to genuine care and support.',
  },
]

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-border">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/lab/lab-2.jpg"
                alt="Pharmaceutical manufacturing line"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 hidden w-44 rounded-2xl bg-brand-orange p-5 text-white shadow-lg sm:block animate-float-soft">
            <p className="font-heading text-2xl font-extrabold">Made in India</p>
            <p className="mt-1 text-xs text-white/90">Proudly serving Indian families</p>
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">
            Why Rivika Pharma
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-brand-navy md:text-4xl">
            Built on Quality, Driven by Care
          </h2>
          <p className="mt-4 text-muted-foreground">
            As a growing Indian pharmaceutical company, we combine reliable
            manufacturing partnerships with a deep commitment to patient
            wellbeing.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-navy">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-brand-navy">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
