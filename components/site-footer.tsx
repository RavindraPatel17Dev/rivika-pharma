import Image from 'next/image'
import { AtSign, Globe, MessageCircle, Share2 } from 'lucide-react'
import { DIVISIONS, NAV_LINKS } from '@/lib/site-data'

const SOCIALS = [
  { icon: Globe, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'Twitter', href: '#' },
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: AtSign, label: 'Instagram', href: '#' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-xl bg-background p-3">
              <Image
                src="/images/rivika-pharma-logo.jpg"
                alt="Rivika Pharma"
                width={160}
                height={54}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Trusted, affordable and high-quality medicines - delivering healthier lives
              to communities everywhere.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent-orange"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Divisions
            </h3>
            <ul className="mt-5 space-y-3">
              {DIVISIONS.slice(0, 5).map((division) => (
                <li key={division.name}>
                  <a
                    href="#divisions"
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent-orange"
                  >
                    {division.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Registered Office
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>B-02 / 702, Tapti Parisar, Phase-01
                Sindoda, Pigdamber, Indore (Mhow)
                Madhya Pradesh - 453331, India</li>
              <li>
                <a href="tel:18008910031" className="transition-colors hover:text-accent-orange">
                  Mob: 9826440373
                </a>
              </li>
              <li>
                <a
                  href="mailto:rivikapharma@gmail.com"
                  className="transition-colors hover:text-accent-orange"
                >
                  Email: rivikapharma@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 text-center">
          <p>© {new Date().getFullYear()} RIVIKA PHARMA PRIVATE LIMITED. All rights reserved.</p>

        </div>
      </div>
    </footer>
  )
}
