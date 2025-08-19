'use client'

export default function WholesaleCTA() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex items-center justify-center gap-8">
            
            {/* Main Text */}
            <div>
              <h2 className="text-[18px] md:text-[20px] lg:text-[22px] text-black tracking-wide uppercase font-montserrat" 
                  style={{ fontWeight: 600 }}>
                JOIN JBEAUTY PLUS & BECOME A WHOLESALER
              </h2>
            </div>

            {/* Join Now CTA */}
            <div>
              <a 
                href="/maintenance" 
                className="text-[16px] md:text-[18px] text-black hover:text-gray-600 transition-colors duration-200 tracking-wide uppercase font-montserrat border-b-[3px] border-black hover:border-gray-600 pb-1"
                style={{ fontWeight: 600 }}
              >
                JOIN NOW
              </a>
            </div>

          </div>
        </div>
      </section>
      
      {/* Full-width divider line - edge to edge */}
      <div className="w-full border-b border-gray-400"></div>
    </>
  )
} 