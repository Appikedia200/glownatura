// components/ScrollingPromoBar.tsx - TEEKA4 EXACT CLONE
'use client'

import Link from "next/link"

export const promoMessages = [
  { text: "BUY MORE SAVE MORE - CLICK HERE", link: "/shop?featured=true" },
  { text: "GET REWARDED FOR SHOPPING - CLICK HERE", link: "/rewards" },
  { text: "FREE SHIPPING ON ORDERS OVER ₦25,000", link: "/shipping-info" },
  { text: "JOIN GLOW NATURA PLUS FOR EXCLUSIVE DEALS", link: "/shop?featured=true" }
]

export default function PromoBar() {
  return (
    <>
      <div className="promo-bar">
        <div className="promo-track">
          {[...promoMessages, ...promoMessages].map((item, i) => (
            <div key={i} className="promo-item">
              <Link href={item.link}>{item.text}</Link>
              <span className="dot">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .promo-bar {
          height: 40px;
          background: #faeecf;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 999;
        }

        .promo-track {
          display: flex;
          animation: promoScroll 22s linear infinite;
        }

        .promo-item {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 0 24px;
        }

        .promo-item a {
          color: #222;
          text-decoration: none;
        }

        .dot {
          margin-left: 24px;
          margin-right: 24px;
          font-size: 18px;
          line-height: 0;
          color: #222;
        }

        @keyframes promoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  )
}
