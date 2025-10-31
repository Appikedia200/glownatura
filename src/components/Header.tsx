'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  HeartIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { navigationItems } from '@/lib/data'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItemCount] = useState(0)
  const [wishlistCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-[#FFF8F3] border-b border-gray-100/30">
        {/* MOBILE & TABLET HEADER - RESPONSIVE FOR ALL NON-DESKTOP DEVICES */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between px-3 xs:px-4 sm:px-6 py-2 xs:py-3">
            {/* Left: Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 xs:p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5 xs:h-6 xs:w-6" />
            </button>

            {/* Center: Logo - MUCH BIGGER for mobile */}
            <div className="flex-1 flex justify-center">
              <a href="/" className="flex items-center">
                <Image
                  src="/images/logo/glownatura-logo.png"
                  alt="Glow Natura Logo"
                  width={320}
                  height={105}
                  className="h-20 xs:h-24 sm:h-28 w-auto object-contain"
                  priority
                />
              </a>
            </div>

            {/* Right: Icons - Responsive spacing */}
            <div className="flex items-center space-x-1 xs:space-x-2">
              <a href="/maintenance" className="p-1 xs:p-2 text-gray-900 hover:text-gray-700 transition-colors">
                <UserIcon className="h-5 w-5 xs:h-6 xs:w-6" />
              </a>
              <a href="/maintenance" className="relative p-1 xs:p-2 text-gray-900 hover:text-gray-700 transition-colors">
                <ShoppingCartIcon className="h-5 w-5 xs:h-6 xs:w-6" />
                <span className="absolute -top-0.5 xs:-top-1 -right-0.5 xs:-right-1 bg-black text-white text-xs rounded-full w-3 h-3 xs:w-4 xs:h-4 flex items-center justify-center text-[8px] xs:text-[10px] font-medium">
                  0
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Search Bar - Responsive padding */}
          <div className="px-3 xs:px-4 sm:px-6 pb-2 xs:pb-3 border-b border-gray-200">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2 xs:left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 xs:h-4 xs:w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-1.5 xs:py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-xs xs:text-sm"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP HEADER - ONLY VISIBLE ON LARGER SCREENS */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
              
              {/* Search Bar - Desktop Left */}
              <div className="flex flex-1 max-w-[280px] lg:max-w-[320px] items-center">
                <div className="relative w-full">
                  <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 lg:h-6 lg:w-6 text-gray-900 stroke-2" />
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 lg:pl-10 pr-3 py-2 lg:py-2.5 border-0 border-b border-gray-600 bg-transparent focus:outline-none focus:border-black focus:ring-0 text-sm placeholder-gray-400 font-light"
                  />
                </div>
              </div>

              {/* Logo - Center - MUCH BIGGER and BOLDER */}
              <div className="absolute left-1/2 transform -translate-x-1/2">           
           <a href="/" className="flex items-center">
              <Image
                src="/images/logo/glownatura-logo.png"
                alt="Glow Natura Logo"
                    width={380}
                    height={124}
                    className="h-24 lg:h-32 xl:h-36 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </a>
          </div>

          {/* Icons - Right */}
              <div className="flex items-center space-x-4 lg:space-x-6 flex-1 justify-end">
                <a href="/maintenance" className="p-2 text-gray-900 hover:text-gray-700 transition-colors">
                  <UserIcon className="h-6 w-6 lg:h-7 lg:w-7 stroke-2" />
                </a>
                <a href="/maintenance" className="relative p-2 text-gray-900 hover:text-gray-700 transition-colors">
                  <HeartIcon className="h-6 w-6 lg:h-7 lg:w-7 stroke-2" />
              {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] font-medium">
                  {wishlistCount}
                </span>
              )}
            </a>
                <a href="/maintenance" className="relative p-2 text-gray-900 hover:text-gray-700 transition-colors group">
                  <ShoppingCartIcon className="h-6 w-6 lg:h-7 lg:w-7 stroke-2" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-medium group-hover:bg-gray-800 transition-colors">
                0
              </span>
            </a>
          </div>
        </div>
          </div>
        </div>
      </header>

      {/* Teeka4-Style Mobile Side Drawer Menu */}
        {mobileMenuOpen && (
        <>
          {/* Backdrop - Full screen overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Side Drawer - Full Height from Right with Fixed positioning */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-[9999] md:hidden shadow-2xl flex flex-col overflow-hidden">
            {/* Drawer Header - Fixed at top */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200 bg-[#FFF8F3] flex-shrink-0">
              {/* Logo - Much Bigger and Centered */}
              <div className="flex-1 flex justify-center pr-8">
                        <Image
                            src="/images/logo/glownatura-logo.png"
                            alt="Glow Natura Logo"
                            width={200}
                            height={65}
                            className="h-12 w-auto object-contain"
                            priority
                          />
              </div>
              
              {/* Close Button - Absolute positioning */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-4 top-4 p-2 text-black hover:text-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6 stroke-2" />
              </button>
            </div>

            {/* Navigation Menu - Scrollable content area */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-4 px-4 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-black transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      letterSpacing: '0.025em'
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
    </>
  )
}