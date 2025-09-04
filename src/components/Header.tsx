'use client'

import { useState } from 'react'
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

            {/* Center: Logo - Responsive sizing */}
            <div className="flex-1 flex justify-center">
              <a href="/" className="flex items-center">
                <Image
                  src="/images/logo/jbeauty-logo.png"
                  alt="JBEAUTY Logo"
                  width={180}
                  height={58}
                  className="h-10 xs:h-12 sm:h-14 w-auto object-contain"
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

              {/* Logo - Center - Much Bigger logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2">           
           <a href="/" className="flex items-center">
              <Image
                src="/images/logo/jbeauty-logo.png"
                alt="JBEAUTY Logo"
                    width={220}
                    height={72}
                    className="h-16 lg:h-20 xl:h-24 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
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
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[50] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Side Drawer - Full Height from Right */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[60] transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#FFF8F3]">
              {/* Logo - Centered */}
              <div className="flex-1 flex justify-center">
                <Image
                  src="/images/logo/jbeauty-logo.png"
                  alt="JBEAUTY Logo"
                  width={180}
                  height={58}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
              
              {/* Close Button - Top Right Corner */}
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-black hover:text-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6 stroke-2" />
              </button>
            </div>

            {/* Navigation Menu - Teeka4 Style */}
            <div className="p-6">
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-4 px-4 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200 border-b border-gray-100 last:border-b-0"
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