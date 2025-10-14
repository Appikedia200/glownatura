'use client'

export default function WholesaleCTA() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-6 md:py-8">
          <div className="text-center">
          
            {/* Main Text - Responsive for all device sizes */}
            <h2 className="text-[12px] xs:text-[13px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-black tracking-wide uppercase font-montserrat mb-4 md:mb-0 md:inline-block md:mr-8 px-1 sm:px-2 md:px-0 overflow-hidden" 
                style={{ 
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%'
                }}>
              <span className="inline-block">JOIN GLOW NATURA PLUS & BECOME A WHOLESALER</span>
            </h2>

            {/* Line break for mobile only */}
            <br className="md:hidden" />

            {/* Join Now CTA */}
            <a
                href="/maintenance" 
                className="inline-block text-[14px] sm:text-[16px] md:text-[18px] text-black hover:text-gray-600 transition-colors duration-200 tracking-wide uppercase font-montserrat border-b-[3px] border-black hover:border-gray-600 pb-1 md:inline"
                style={{ fontWeight: 600 }}
            >
              JOIN NOW
            </a>

          </div>
        </div>
      </section>
      
      {/* Full-width divider line - edge to edge */}
      <div className="w-full border-b border-gray-400"></div>
    </>
  )
} 