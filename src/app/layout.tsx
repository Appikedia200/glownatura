import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Montserrat, Outfit, Crimson_Text, Gupter, Libre_Baskerville } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import ScrollingPromoBar from '@/components/ScrollingPromoBar'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
import WhatsAppFloat from '@/components/WhatsAppFloat'

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
  metadataBase: new URL('https://glownatura.com'),
  title: {
    default: 'Glow Natura - Premium Skincare & Professional Beauty Solutions',
    template: '%s | Glow Natura'
  },
  description: 'Transform your skin with Glow Natura&apos;s premium skincare collection. Professional-grade formulations, dermatologist-tested products, and expert skincare solutions for radiant, healthy skin.',
  keywords: ['skincare', 'premium skincare', 'dermatologist tested', 'professional skincare', 'beauty solutions', 'skin treatment', 'anti-aging', 'skincare routine'],
  authors: [{ name: 'Glow Natura' }],
  creator: 'Glow Natura',
  publisher: 'Glow Natura',
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
    title: 'Glow Natura - Premium Skincare & Professional Beauty Solutions',
    description: 'Transform your skin with Glow Natura&apos;s premium skincare collection. Professional-grade formulations for radiant, healthy skin.',
    siteName: 'Glow Natura',
    images: [{
      url: '/images/logo/glownatura-logo.png',
      width: 1200,
      height: 630,
      alt: 'Glow Natura - Premium Skincare & Professional Beauty Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glow Natura - Premium Skincare & Professional Beauty Solutions',
    description: 'Transform your skin with Glow Natura&apos;s premium skincare collection. Professional-grade formulations for radiant, healthy skin.',
    images: ['/images/logo/glownatura-logo.png'],
    creator: '@glownatura',
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
      <body className={`${inter.className} antialiased min-h-screen bg-beauty-cream overflow-x-hidden`}>
        <div id="portal-root" />
        
        {/* Promo Bar - Separate from header */}
        <ScrollingPromoBar />
        
        {/* Unified Header + Nav - ONE PIECE like Teeka4 */}
        <header className="sticky top-0 z-50 bg-[#FFF8F3] border-b border-gray-200 w-full">
          <Header />
          <div className="hidden lg:block">
            <NavMenu />
          </div>
        </header>
        
        {/* MAIN CONTENT - NO padding, header is sticky */}
        <main className="pt-0">
          {children}
        </main>

        {/* WhatsApp Float Button - Admin Controlled */}
        <WhatsAppFloat />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          expand={true}
          richColors
          closeButton
          duration={5000}
          toastOptions={{
            style: {
              fontFamily: 'var(--font-inter)',
            },
          }}
        />
      </body>
    </html>
  )
} 