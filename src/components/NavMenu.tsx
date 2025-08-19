'use client'

import { useState } from 'react'
import { navigationItems } from '@/lib/data'

export default function NavMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="bg-[#FFF8F3] pt-1 pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center pb-2">
          <div className="hidden lg:flex items-center space-x-0">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                                <a
                  href={item.href}
                  className="flex items-center py-3 px-4 text-sm font-medium transition-colors duration-200 relative font-montserrat uppercase whitespace-nowrap text-black hover:text-gray-700 group"
                >
                  <span className="relative">
                    {item.name}{item.hasDropdown && ' +'}
                    {/* Hover underline effect - directly under text */}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white z-50 min-w-[320px] w-[320px] border border-gray-200 shadow-lg">
                    <div className="py-4 px-6">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-3 text-sm text-gray-800 hover:text-black transition-colors duration-150 font-crimson"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="py-2 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </a>
                {item.hasDropdown && item.dropdownItems && (
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Thick border divider with no spacing */}
      <div className="border-b-2 border-gray-800/90"></div>
    </nav>
  )
} 