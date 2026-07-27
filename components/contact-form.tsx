'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Front-end demo submission — wire to an API route / email service as needed.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-green" />
        <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-base"
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" name="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input-base"
            placeholder="Mobile number"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Email" name="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-base"
            placeholder="you@example.com"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Subject" name="subject">
          <input
            id="subject"
            name="subject"
            type="text"
            className="input-base"
            placeholder="Product / trade / general enquiry"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" name="message" required>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="input-base resize-none"
            placeholder="How can we help you?"
          />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange/90"
      >
        Send Enquiry
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string
  name: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      {children}
    </div>
  )
}
