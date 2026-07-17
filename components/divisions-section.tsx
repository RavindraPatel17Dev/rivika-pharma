"use client"

import { Reveal } from '@/components/reveal'
import { DIVISIONS } from '@/lib/site-data'
import Link from "next/link";
import { usePathname } from "next/navigation";


export function DivisionsSection() {
  const pathname = usePathname();

  return (
    <section id="divisions" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
            Therapeutic Divisions
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Comprehensive care across every specialty
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our diverse portfolio spans key therapeutic areas.
          </p>
        </Reveal>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((division, i) => {
            const isActive = pathname === `/divisions/${division.id}`;

            return (
              <Reveal key={division.id} delay={(i % 3) * 90}>
                <Link
                  href={`/divisions/${division.id}`}
                  className="block h-full"
                >
                  <article
                    className={`group flex h-full min-h-[260px] flex-col rounded-3xl border p-6 transition-all duration-300
            ${isActive
                        ? "border-primary bg-gradient-to-br from-primary/15 to-white shadow-xl"
                        : "border-slate-200 bg-white shadow-md hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                      }`}
                  >
                    {/* Icon */}

                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all
              ${isActive
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                        }`}
                    >
                      <division.icon className="h-8 w-8" />
                    </div>

                    {/* Title */}

                    <h3 className="text-xl font-bold text-slate-900">
                      {division.name}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-base text-slate-600">
                      {division.description}
                    </p>

                    {/* Button */}

                    <span className="mt-auto pt-6 text-sm font-semibold text-primary transition group-hover:text-orange-500">
                      More Details →
                    </span>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>

    </section>
  )
}