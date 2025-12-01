'use client'

import { promoMessages } from '@/lib/data'

export default function ScrollingPromoBar() {
  return (
    <div className="promo-bar">
      <div className="promo-slider">
        {/* Duplicate messages for seamless loop */}
        {[...promoMessages, ...promoMessages].map((message, index) => (
          <span key={index}>
            {message.link ? (
              <a 
                href={message.link}
                className="promo-item"
              >
                {message.text}
              </a>
            ) : (
              <span className="promo-item">{message.text}</span>
            )}
            <span className="dot">•</span>
          </span>
        ))}
      </div>
      
      <style jsx>{`
        .promo-bar {
          height: 40px;
          background: #faeecf;
          overflow: hidden;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .promo-slider {
          display: flex;
          align-items: center;
          height: 100%;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        
        .promo-item {
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #1a1a1a;
          padding: 0 12px;
          text-decoration: none;
        }
        
        .promo-item:hover {
          color: #000;
        }
        
        .dot {
          color: #1a1a1a;
          font-size: 8px;
          padding: 0 4px;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
