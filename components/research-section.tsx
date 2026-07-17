import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { Reveal } from '@/components/reveal'

export function ResearchSection() {
  return (
    <section id="research" className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <Image
          src="/images/research-lab.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
            Why Rivika Pharma?
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Innovating today for a healthier tomorrow
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80 space-y-3 text-left">
            <span className="block">
              <strong>Caring Beyond Medicine:</strong> We go beyond merely manufacturing pharmaceuticals; we actively nurture health and human lives.
            </span>

            <span className="block">
              <strong>Premium Global Packaging:</strong> Utilizing advanced Alu-Alu and blister packaging parameters to shield medicine stability against environmental degradation.
            </span>

            <span className="block">
              <strong>Trusted by Clinicians:</strong> Formulated strictly according to modern clinical guidelines, making us a preferred choice for medical practitioners.
            </span>

            <span className="block">
              <strong>100% Made in India:</strong> Proudly manufactured in state-of-the-art domestic facilities aligning with global pharmaceutical standards.
            </span>

          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="#contact"
              size="lg"
              className="group rounded-full bg-accent-orange text-accent-foreground hover:bg-accent-orange/90"
            >
              Partner With Us
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink
              href="#divisions"
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              View Portfolio
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
