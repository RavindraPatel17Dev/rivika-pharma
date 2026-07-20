import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rivika Pharma | Trusted Medicines for Healthier Lives',
  description:
    'Rivika Pharma is a modern pharmaceutical company delivering high-quality, affordable and accessible medicines across cardiology, neurology, gynaecology, nutraceuticals and more.',
  keywords: [
    'Rivika Pharma',
    'pharmaceutical company',
    'medicines',
    'healthcare',
    'quality medicines',
    'pharma India',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Rivika Pharma | Trusted Medicines for Healthier Lives',
    description:
      'High-quality, affordable and accessible medicines backed by science and rigorous quality standards.',
    type: 'website',
  },
}

// export const viewport: Viewport = {
//   themeColor: '#0f2b5b',
//   width: 'device-width',
//   initialScale: 1,
// }

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff', // 🔥 FORCE LIGHT UI
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="en" className={`${jakarta.variable} ${manrope.variable} bg-background`}>
    // <html lang="en"className={`${jakarta.variable} ${manrope.variable} bg-white`}>
    //   {/* <body className="font-sans antialiased"> */}
    //   <body className="font-sans antialiased bg-white text-black">
    //     {children}
    //     {process.env.NODE_ENV === 'production' && <Analytics />}
    //   </body>
    // </html>

    <html lang="en" className="light">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}
