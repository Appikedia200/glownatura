'use client'

import { promoMessages } from '@/lib/data'

export default function ScrollingPromoBar() {
  return (
    // PROFESSIONAL: Sticky promo bar matching Teeka4 - gold/cream background
    <div className="sticky top-0 z-[1000] bg-[#FBE7A1] border-b border-gray-200 py-2.5 overflow-hidden">
      <div className="marquee whitespace-nowrap inline-block text-[13px] uppercase font-medium tracking-wide">
        {/* Duplicate messages for seamless loop */}
        {[...promoMessages, ...promoMessages].map((message, index) => (
          <span key={index} className="inline-block" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {message.link ? (
              <a 
                href={message.link}
                className="hover:text-gray-600 transition-colors px-6 text-black"
              >
                {message.text}
              </a>
            ) : (
              <span className="px-6 text-black">{message.text}</span>
            )}
            <span className="text-black mx-3 font-bold">•</span>
          </span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee {
          animation: marquee 30s linear infinite;
        }
        
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
