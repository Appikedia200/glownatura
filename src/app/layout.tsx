import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Montserrat, Outfit, Crimson_Text, Gupter, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import ScrollingPromoBar from '@/components/ScrollingPromoBar'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600'],
  display: 'swap',
})

const gupter = Gupter({
  subsets: ['latin'],
  variable: '--font-gupter',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-libre',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jbeauty.com'),
  title: {
    default: 'JBEAUTY - Premium Skincare & Professional Beauty Solutions',
    template: '%s | JBEAUTY'
  },
  description: 'Transform your skin with JBEAUTY&apos;s premium skincare collection. Professional-grade formulations, dermatologist-tested products, and expert skincare solutions for radiant, healthy skin.',
  keywords: ['skincare', 'premium skincare', 'dermatologist tested', 'professional skincare', 'beauty solutions', 'skin treatment', 'anti-aging', 'skincare routine'],
  authors: [{ name: 'JBEAUTY' }],
  creator: 'JBEAUTY',
  publisher: 'JBEAUTY',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'JBEAUTY - Premium Skincare & Professional Beauty Solutions',
    description: 'Transform your skin with JBEAUTY&apos;s premium skincare collection. Professional-grade formulations for radiant, healthy skin.',
    siteName: 'JBEAUTY',
    images: [{
      url: '/images/logo/jbeauty-logo.png',
      width: 1200,
      height: 630,
      alt: 'JBEAUTY - Premium Skincare & Professional Beauty Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JBEAUTY - Premium Skincare & Professional Beauty Solutions',
    description: 'Transform your skin with JBEAUTY&apos;s premium skincare collection. Professional-grade formulations for radiant, healthy skin.',
    images: ['/images/logo/jbeauty-logo.png'],
    creator: '@jbeauty',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${outfit.variable} ${crimsonText.variable} ${gupter.variable} ${libreBaskerville.variable} scroll-smooth`}
    >
      <body className={`${inter.className} antialiased min-h-screen bg-beauty-cream`}>
        <div id="portal-root" />
        
        {/* Global Header - Fixed at top for all pages */}
        <ScrollingPromoBar />
        <div className="sticky top-[40px] z-50 bg-[#FFF8F3]">
          <Header />
          <NavMenu />
        </div>
        
        {children}
      </body>
    </html>
  )
} 