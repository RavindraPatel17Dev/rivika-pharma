import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Rivika Pharma Private Limited | Caring Beyond Medicine',
    template: '%s | Rivika Pharma',
  },
  description:
    'Rivika Pharma Private Limited, Indore — a Made in India pharmaceutical company delivering quality, affordable medicines across gastro, anti-infective, respiratory, neuro, ortho, paediatric and wellness therapies.',
  keywords: [
    'Rivika Pharma',
    'pharmaceutical company India',
    'Indore pharma',
    'Made in India medicines',
    'PANZORIV-DSR',
    'MOXRIV-CV 625',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0e2f6e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${poppins.variable}`}>
      <body className="bg-background font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
