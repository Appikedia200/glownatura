// components/Header.tsx - TEEKA4 EXACT CLONE
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/hooks'
import CartDrawer from '@/components/cart/CartDrawer'

export default function MainHeader() {
  const { itemCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false)

  return (
    <>
      <div className="header-wrapper">
        {/* Row: Search - Logo - Icons */}
        <div className="header-main">
          {/* Search Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              if (searchQuery.trim()) {
                window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`
              }
            }}
            className="search-form"
          >
            <input
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </form>

          {/* Logo */}
          <Link href="/" className="header-logo">
            <img src="/images/logo/glownatura-logo.png" alt="GlowNatura" />
          </Link>

          {/* Icons */}
          <div className="header-icons">
            <Link href="/account" className="icon">👤</Link>
            <Link href="/wishlist" className="icon">♡</Link>
            <button onClick={() => setCartDrawerOpen(true)} className="icon cart-icon">
              🛒
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />

      <style jsx>{`
        .header-wrapper {
          background: #fff7ed;
          width: 100%;
        }

        .header-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 40px 22px 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .search-form {
          flex: 1;
          max-width: 300px;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px;
          border: none;
          border-bottom: 1px solid #999;
          background: transparent;
          font-size: 14px;
          outline: none;
        }

        .search-input::placeholder {
          color: #999;
        }

        .header-logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .header-logo img {
          height: 48px;
          width: auto;
        }

        .header-icons {
          display: flex;
          align-items: center;
          gap: 22px;
          flex: 1;
          justify-content: flex-end;
        }

        .icon {
          font-size: 22px;
          color: #222;
          text-decoration: none;
          cursor: pointer;
          border: none;
          background: none;
          position: relative;
        }

        .cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #000;
          color: #fff;
          font-size: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .header-main {
            padding: 16px 20px;
          }

          .search-form {
            max-width: 150px;
          }

          .header-logo img {
            height: 40px;
          }

          .header-icons {
            gap: 15px;
          }

          .icon {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  )
}
