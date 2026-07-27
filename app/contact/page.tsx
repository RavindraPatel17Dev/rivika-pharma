import type { Metadata } from 'next'
import { MapPin, Mail, Phone, Building2 } from 'lucide-react'
import { PageBanner } from '@/components/page-banner'
import { ContactForm } from '@/components/contact-form'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Rivika Pharma Private Limited, Indore. Reach us for product, distribution and trade enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We’d love to hear from you. Reach out for product, distribution or general enquiries."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-brand-navy">
              Registered Office
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team is available to assist you during business hours.
            </p>

            <ul className="mt-8 space-y-6">
              <ContactItem icon={Building2} label="Company">
                {company.name}
              </ContactItem>
              <ContactItem icon={MapPin} label="Address">
                {company.address}
              </ContactItem>
              <ContactItem icon={Mail} label="Email">
                <a href={`mailto:${company.email}`} className="hover:text-brand-orange">
                  {company.email}
                </a>
              </ContactItem>
             
            </ul>

           
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Rivika Pharma location map"
            src="https://www.google.com/maps?q=Pigdamber%20Pardeshipura%20Indore%20Mhow%20Madhya%20Pradesh%20453331&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{children}</p>
      </div>
    </li>
  )
}
