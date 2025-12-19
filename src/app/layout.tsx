import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boise-chiropractors.com'),
  title: {
    default: 'Chiropractors in Boise | Back Pain & Neck Pain Relief Idaho',
    template: '%s | Boise Chiropractors',
  },
  description: 'Expert chiropractic care in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. Back pain relief, neck pain treatment, sports injuries, auto accident recovery. Licensed chiropractors. Call (208) 505-9352.',
  keywords: [
    'chiropractors Boise',
    'back pain relief Boise Idaho',
    'neck pain treatment Meridian',
    'chiropractic adjustments Nampa',
    'sports injury chiropractor near me',
    'auto accident injury Caldwell',
    'spinal adjustment Eagle Idaho',
    'chiropractic care Treasure Valley',
    'sciatica treatment Boise',
    'headache relief chiropractor',
    'car accident chiropractor Idaho',
    'wellness chiropractic care',
  ],
  authors: [{ name: 'Boise Chiropractors' }],
  openGraph: {
    title: 'Chiropractic Services | Boise, Meridian, Nampa Idaho',
    description: 'Professional chiropractic care in the Treasure Valley. Back pain, neck pain, sports injuries, and auto accident recovery specialists.',
    url: 'https://boise-chiropractors.com',
    siteName: 'Boise Chiropractors',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://boise-chiropractors.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581QKP6ZE5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-581QKP6ZE5');
          `}
        </Script>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
