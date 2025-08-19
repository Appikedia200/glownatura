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

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItemCount] = useState(0)
  const [wishlistCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#FFF8F3] border-b border-gray-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Search Bar - Desktop only */}
          <div className="hidden md:flex flex-1 max-w-[280px] lg:max-w-[320px] items-center">
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

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center md:flex-none md:absolute md:left-1/2 md:transform md:-translate-x-1/2">           
           <a href="/" className="flex items-center">
              <Image
                src="/images/logo/jbeauty-logo.png"
                alt="JBEAUTY Logo"
                width={110}
                height={36}
                className="md:w-[120px] md:h-[38px] lg:w-[130px] lg:h-[42px] object-contain hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </a>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 flex-1 md:flex-none justify-end">
            
            {/* Mobile Search Icon */}
            <button className="md:hidden p-2 text-gray-900 hover:text-gray-700 transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6 stroke-2" />
            </button>

            {/* User Account */}
            <a href="/maintenance" className="p-1.5 md:p-2 text-gray-900 hover:text-gray-700 transition-colors">
              <UserIcon className="h-6 w-6 md:h-7 md:w-7 stroke-2" />
            </a>

            {/* Wishlist */}
            <a href="/maintenance" className="relative p-1.5 md:p-2 text-gray-900 hover:text-gray-700 transition-colors">
              <HeartIcon className="h-6 w-6 md:h-7 md:w-7 stroke-2" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] font-medium">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Shopping Cart */}
            <a href="/maintenance" className="relative p-1.5 md:p-2 text-gray-900 hover:text-gray-700 transition-colors group">
              <ShoppingCartIcon className="h-6 w-6 md:h-7 md:w-7 stroke-2" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] font-medium group-hover:bg-gray-800 transition-colors">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
              <input
                type="text"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-900 focus:ring-0 text-sm placeholder-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}