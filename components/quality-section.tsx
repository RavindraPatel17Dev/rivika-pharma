import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { QUALITY_POINTS } from '@/lib/site-data'

export function QualitySection() {
  return (
    <section id="quality" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
                Our Operational Philosophy
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Quality is the cornerstone of everything we make
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                At Rivika Pharma, quality is not an act; it is an embedded culture. We partner exclusively with state-of-the-art manufacturing facilities that utilize advanced automated machinery, closed-loop processing systems, and highly specialized climate controls to protect formulation integrity at every stage of production.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {QUALITY_POINTS.map((point, i) => (
                <Reveal key={point} delay={150 + i * 80} as="li">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-primary">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/manufacturing.png"
                alt="Rivika Pharma state-of-the-art manufacturing facility"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="animate-float-slow absolute -right-5 -top-5 hidden rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl sm:block">
              <p className="text-2xl font-extrabold">WHO-GMP</p>
              <p className="text-xs opacity-80">Certified facilities</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
