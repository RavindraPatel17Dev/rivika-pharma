import { Reveal } from '@/components/reveal'
import { STATS } from '@/lib/site-data'

export function StatsBar() {
  return (
    <section className="relative z-10 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4 lg:py-14">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="text-center"
            >
              <p className="text-4xl font-extrabold text-primary-foreground lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
