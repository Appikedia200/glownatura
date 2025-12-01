'use client'

import { promoMessages } from '@/lib/data'

export default function ScrollingPromoBar() {
  return (
    // PROFESSIONAL: Sticky promo bar matching Teeka4 - same bg as header, premium typography
    <div className="sticky top-0 z-[1000] bg-[#FFF8F3] border-b-0 py-2.5 overflow-hidden">
      <div className="marquee whitespace-nowrap inline-block text-[11px] uppercase font-semibold tracking-wider">
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
