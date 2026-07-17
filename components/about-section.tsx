import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { VALUES } from '@/lib/site-data'

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/research-lab.png"
                alt="Rivika Pharma research scientists at work"
                width={480}
                height={560}
                className="h-full w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="flex flex-col gap-4">
                <Image
                  src="/images/manufacturing.png"
                  alt="Rivika Pharma manufacturing facility"
                  width={480}
                  height={320}
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
                <div className="flex flex-1 flex-col justify-center rounded-2xl bg-accent-orange p-6 text-accent-foreground shadow-lg">
                  <p className="text-3xl font-extrabold">2025</p>
                  <p className="mt-1 text-sm font-medium opacity-90">
                    The year our journey to healthier lives began.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
                About Rivika Pharma
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                A Trusted Name in Global Healthcare - Rivika Pharma
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Rivika Pharma Private Limited is a dynamic and fast-growing pharmaceutical enterprise dedicated to providing high-quality, safe, and affordable healthcare solutions to society. Driven by scientific innovation and international compliance, our core objective is to formulate life-enhancing medicines that are accessible to everyone, everywhere.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={150 + i * 90}>
                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <value.icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{value.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
