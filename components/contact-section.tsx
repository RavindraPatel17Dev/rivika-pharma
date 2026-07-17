'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const CONTACT_INFO = [
  { icon: Phone, label: 'Call us', value: '9826440373', href: 'tel:9826440373' },
  { icon: Mail, label: 'Email us', value: 'rivikapharma@gmail.com', href: 'mailto:rivikapharma@gmail.com' },
  { icon: MapPin, label: 'Visit us', value: 'B-02 / 702, Tapti Parisar, Phase-01 Sindoda, Pigdamber, Indore (Mhow) Madhya Pradesh - 453331, India' },
  { icon: Clock, label: 'Work Hours', value: 'Mon - Sat, 9am - 7pm' },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
                Get in Touch
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Have a question? Contact us anytime
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Whether you are a healthcare professional, distributor or partner, our team
                is ready to help. Reach out and we will get back to you promptly.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {CONTACT_INFO.map((info, i) => {
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <info.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-0.5 font-semibold text-primary">{info.value}</p>
                    </div>
                  </div>
                )
                return (
                  <Reveal key={info.label} delay={i * 80}>
                    {info.href ? (
                      <a href={info.href} className="block transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="rounded-2xl bg-card p-6 shadow-xl ring-1 ring-border sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                    <Send className="size-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out to Rivika Pharma. Our team will get back to
                    you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" id="name" placeholder="Jane Doe" />
                    <Field label="Email" id="email" type="email" placeholder="jane@email.com" />
                  </div>
                  <Field label="Subject" id="subject" placeholder="How can we help?" />
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Write your message..."
                      className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-accent-orange text-accent-foreground hover:bg-accent-orange/90"
                  >
                    Send Message
                    <Send className="ml-1 size-4" />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-primary">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40"
      />
    </div>
  )
}
