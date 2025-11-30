'use client'

import { promoMessages } from '@/lib/data'

export default function ScrollingPromoBar() {
  return (
    <div className="relative bg-[#FBE7A1] text-black py-3 overflow-hidden w-full border-t border-b border-gray-200">
      <div className="marquee whitespace-nowrap inline-block text-[13px] uppercase font-semibold tracking-wider">
        {/* Duplicate the messages for seamless loop */}
        {[...promoMessages, ...promoMessages].map((message, index) => (
          <span key={index} className="inline-block">
            {message.link ? (
              <a 
                href={message.link}
                className="hover:font-bold transition-all duration-200 px-6"
              >
                {message.text}
              </a>
            ) : (
              <span className="px-6">{message.text}</span>
            )}
            <span className="text-black mx-3 font-bold">•</span>
          </span>
        ))}
      </div>
      
      {/* More prominent border line under promo bar like Teeka4 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-400/70 shadow-sm"></div>
      
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