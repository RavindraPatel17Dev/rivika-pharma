'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Divisions', href: '/divisions' },
  { label: 'Products', href: '/products' },
  { label: 'Quality', href: '/quality' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* 🔥 HEADER */}
      <div className="mx-auto flex h-20 max-w-[1400px] items-center px-6 relative">
        
        {/* ✅ BIG LOGO */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/logo.jpeg"
            alt="Rivika Pharma"
            width={280}
            height={150}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* ✅ CENTER NAV */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-gray-700 hover:text-[#0b3c8c] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ✅ MOBILE BTN */}
        <button
          className="ml-auto lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 🔥 DARK BLUE STRAIGHT LINE (NO GAP) */}
      <div className="w-full h-[6px] bg-[#0b3c8c] -mt-1"></div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}