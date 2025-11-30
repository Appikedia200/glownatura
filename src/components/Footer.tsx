'use client'

import { useSettings } from '@/lib/hooks/useSettings'

export default function Footer() {
  const { settings } = useSettings()

  return (
    <footer className="bg-[#B8C5B8] text-gray-800 px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto bg-[#B8C5B8] rounded-3xl p-6 md:p-8 lg:p-12">
        
        {/* Desktop: 4-Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Social */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">GLOW NATURA</h3>
            <p className="text-gray-700 mb-8 text-sm leading-relaxed">
              Subscribe to our mailing list to get the new updates!
            </p>
            
            {/* DYNAMIC SOCIAL ICONS - Admin Controlled */}
            <div className="flex space-x-4 flex-wrap">
              {settings?.socialMedia?.facebook && (
                <a 
                  href={settings.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/>
                  </svg>
                </a>
              )}
              
              {settings?.socialMedia?.twitter && (
                <a 
                  href={settings.socialMedia.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
              
              {settings?.socialMedia?.instagram && (
                <a 
                  href={settings.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              
              {settings?.socialMedia?.youtube && (
                <a 
                  href={settings.socialMedia.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
              
              {settings?.socialMedia?.tiktok && (
                <a 
                  href={settings.socialMedia.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-4 text-base uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-700 hover:text-gray-900 text-sm">About Us</a></li>
              <li><a href="/shop" className="text-gray-700 hover:text-gray-900 text-sm">Shop</a></li>
              <li><a href="/brands" className="text-gray-700 hover:text-gray-900 text-sm">Brands</a></li>
              <li><a href="/consultation" className="text-gray-700 hover:text-gray-900 text-sm">Book Consultation</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="font-semibold text-black mb-4 text-base uppercase">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-700 hover:text-gray-900 text-sm">Contact Us</a></li>
              <li><a href="/faq" className="text-gray-700 hover:text-gray-900 text-sm">FAQ</a></li>
              <li><a href="/shipping" className="text-gray-700 hover:text-gray-900 text-sm">Shipping</a></li>
              <li><a href="/returns" className="text-gray-700 hover:text-gray-900 text-sm">Returns</a></li>
            </ul>
          </div>

          {/* Column 4: My Account */}
          <div>
            <h4 className="font-semibold text-black mb-4 text-base uppercase">My Account</h4>
            <ul className="space-y-2">
              <li><a href="/account" className="text-gray-700 hover:text-gray-900 text-sm">My Account</a></li>
              <li><a href="/cart" className="text-gray-700 hover:text-gray-900 text-sm">Shopping Cart</a></li>
              <li><a href="/wishlist" className="text-gray-700 hover:text-gray-900 text-sm">Wishlist</a></li>
              <li><a href="/orders" className="text-gray-700 hover:text-gray-900 text-sm">Order History</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Glow Natura. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}
