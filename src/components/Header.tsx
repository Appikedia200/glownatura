'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  HeartIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { navigationItems } from '@/lib/data'
import { useCart } from '@/lib/hooks'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Header() {
  const router = useRouter()
  const { itemCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [wishlistCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* HEADER - Positioning controlled by parent wrapper in layout.tsx */}
      <header className="relative bg-[#FFF8F3] border-b border-gray-100/30 w-full shadow-sm">
        {/* MOBILE & TABLET HEADER (below 992px - lg breakpoint) */}
        <div className="block lg:hidden bg-[#FFF8F3]">
          {/* Main Header Row - Compact for landscape, normal for portrait */}
          <div className="flex items-center justify-between px-3 py-2 min-h-[56px]">
            {/* Left: Hamburger Menu - ALWAYS VISIBLE BELOW 992px */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>

            {/* Center: Logo - BOLD & PROMINENT like desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="flex items-center">
                <Image
                  src="/images/logo/glownatura-logo.png"
                  alt="Glow Natura Logo"
                  width={200}
                  height={65}
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                  priority
                />
              </a>
            </div>

            {/* Right: Icons - Fixed Right Alignment, compact */}
            <div className="flex items-center space-x-1 flex-shrink-0">
              <Link href="/account" className="p-1.5 text-gray-900 hover:text-gray-700 transition-colors">
                <UserIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="/cart"
                className="relative p-1.5 text-gray-900 hover:text-gray-700 transition-colors"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-medium">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar - Compact */}
          <div className="px-3 pb-2 border-t border-gray-200">
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                if (searchQuery.trim()) {
                  window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`
                }
              }}
              className="relative mt-1.5"
            >
              <MagnifyingGlassIcon className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="type to search.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 text-sm bg-white"
              />
            </form>
          </div>
        </div>

        {/* DESKTOP HEADER (992px and above) */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-24 lg:h-28">
              
              {/* Search Bar - Desktop Left */}
              <div className="flex flex-1 max-w-[280px] lg:max-w-[320px] items-center">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (searchQuery.trim()) {
                      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`
                    }
                  }}
                  className="relative w-full"
                >
                  <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 lg:h-6 lg:w-6 text-gray-900 stroke-2" />
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 lg:pl-10 pr-3 py-2 lg:py-2.5 border-0 border-b border-gray-600 bg-transparent focus:outline-none focus:border-black focus:ring-0 text-sm placeholder-gray-400 font-light"
                  />
                </form>
              </div>

              {/* Logo - Center - Consistent 200x65 dimensions */}
              <div className="absolute left-1/2 transform -translate-x-1/2">           
                <a href="/" className="flex items-center">
                  <Image
                    src="/images/logo/glownatura-logo.png"
                    alt="Glow Natura Logo"
                    width={200}
                    height={65}
                    className="h-20 lg:h-24 xl:h-28 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
                    priority
                  />
                </a>
              </div>

              {/* Icons - Right */}
              <div className="flex items-center space-x-4 lg:space-x-6 flex-1 justify-end">
                <a href="/account" className="p-2 text-gray-900 hover:text-gray-700 transition-colors">
                  <UserIcon className="h-6 w-6 lg:h-7 lg:w-7 stroke-2" />
                </a>
                <a href="/wishlist" className="relative p-2 text-gray-900 hover:text-gray-700 transition-colors">
                  <HeartIcon className="h-6 w-6 lg:h-7 lg:w-7 stroke-2" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-medium">
                      {wishlistCount}
                    </span>
                  )}
                </a>
                <button 
                  onClick={() => setCartDrawerOpen(true)}
                  className="relative p-2 text-gray-900 hover:text-gray-700 transition-colors group"
                >
                  <ShoppingCartIcon className="h-6 w-6 lg:h-7 lg:w-7 stroke-2" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-medium group-hover:bg-gray-800 transition-colors">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer Menu - Teeka4 Style with Smooth Animations */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop - Full screen overlay with fade-in animation */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Side Drawer - Full Height (100vh) from Right with slide-in animation */}
          <div className="fixed top-0 right-0 h-[100vh] w-80 max-w-[85vw] bg-white z-[9999] lg:hidden shadow-2xl flex flex-col overflow-hidden animate-slideInRight">
            {/* Drawer Header - Fixed at top */}
            <div className="relative flex items-center justify-center px-4 py-5 border-b border-gray-200 bg-[#FFF8F3] flex-shrink-0">
              {/* Logo - Centered */}
              <div className="flex justify-center">
                <Image
                  src="/images/logo/glownatura-logo.png"
                  alt="Glow Natura Logo"
                  width={200}
                  height={65}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </div>
              
              {/* Close Button - Absolute positioning top-right */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-4 top-5 p-2 text-black hover:text-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6 stroke-2" />
              </button>
            </div>

            {/* Navigation Menu - Scrollable content area */}
            <div className="flex-1 overflow-y-auto bg-white">
              <nav className="py-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-4 px-6 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-black transition-all duration-200 border-b border-gray-100 last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      letterSpacing: '0.025em',
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Add custom animations via global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }

        /* Prevent content jump when header is fixed */
        body {
          padding-top: 0;
        }
      `}</style>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
    </>
  )
}
