import Image from 'next/image'
import { ArrowRight, CheckCircle2, Play } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { Reveal } from '@/components/reveal'

const HIGHLIGHTS = ['WHO-GMP Certified', 'ISO 9001:2015 Quality Management Standards', 'FSSAI Approved Nutraceutical Guidelines','100% Made in India Precision Healthcare']

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* soft decorative shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-accent-orange/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-1.5 text-sm font-medium text-primary">
              <span className="size-2 rounded-full bg-accent-green" />
              Trusted Medicines, Healthier Lives
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-pretty text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Advancing Health with{' '}
              <span className="text-accent-orange">Quality Medicines</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Rivika Pharma is committed to fulfilling the healthcare needs of people
              everywhere - offering trusted, affordable and high-quality medicines backed
              by science and compassion.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="#divisions"
                size="lg"
                className="group rounded-full bg-accent-orange text-accent-foreground hover:bg-accent-orange/90"
              >
                Explore Our Divisions
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href="#about"
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 text-primary hover:bg-background"
              >
                <Play className="mr-1 size-4 fill-current" />
                Our Story
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 className="size-5 text-accent-green" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-primary/10" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/hero-pharma.png"
                alt="Rivika Pharma pharmacist providing trusted healthcare"
                width={720}
                height={820}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating stat card
            <div className="animate-float-slow absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-xl ring-1 ring-border sm:block">
              <p className="text-3xl font-extrabold text-primary">1M+</p>
              <p className="text-sm text-muted-foreground">Lives touched</p>
            </div> */}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
