import ScrollingPromoBar from '@/components/ScrollingPromoBar'
import Header from '@/components/Header'
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* 1. Scrolling Promo Bar - Always stays at top */}
      <ScrollingPromoBar />
      
      <div className="pt-[40px]">
        {/* Combined Header Section - Sticky as one unit */}
        <div className="sticky top-[40px] z-[9998] bg-[#FFF8F3] border-t border-gray-200 shadow-sm">
          {/* 2. Main Header */}
          <Header />

          {/* 3. Navigation Menu */}
          <NavMenu />
        </div>

        {/* Main Content */}
        <main>
        
        {/* Hero Section with Background Image */}
        <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/AboutUS/aboutus-bg.png"
              alt="About JBeauty - Skincare Products"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center h-full">
                
                {/* Left Side - Empty for product image visibility on desktop, content on mobile */}
                <div className="md:hidden">
                  {/* Mobile Content */}
                  <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg text-center">
                    <h1 
                      className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
                      style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
                    >
                      About Us
                    </h1>
                    
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p 
                        className="text-sm sm:text-base"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Welcome to Jbeauty, your all-in-one digital destination for skincare and self-care.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block"></div>
                
                {/* Right Side - Desktop Content */}
                <div className="hidden md:block">
                  <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 lg:p-12 rounded-lg shadow-lg">
                    <h1 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8"
                      style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
                    >
                      About Us
                    </h1>
                    
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p 
                        className="text-base md:text-lg"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Welcome to Jbeauty, your all-in-one digital destination for skincare and self-care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
            
            {/* Purpose, Mission, Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
              
              {/* Our Purpose */}
              <div className="text-center sm:text-left">
                <h2 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4"
                  style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
                >
                  Our Purpose
                </h2>
                <p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  To make wellness and self-care attainable for everyone.
                </p>
              </div>

              {/* Our Mission */}
              <div className="text-center sm:text-left">
                <h2 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4"
                  style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
                >
                  Our Mission
                </h2>
                <p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  We are committed to closing the gaps in skincare access across Nigeria by providing expert-led education, personalized consultations, and a diverse selection of trusted skincare products.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-12 sm:mb-16 text-center sm:text-left">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6"
                style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
              >
                Our Vision
              </h2>
              <p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto sm:mx-0"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                To emerge as Africa's foremost digital hub for skincare learning, consultations, and product solutions—celebrated for our commitment to quality, innovation, and customer delight.
              </p>
            </div>

            {/* Our Approach */}
            <div className="mb-12 sm:mb-16 text-center sm:text-left">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6"
                style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
              >
                Our Approach
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <p 
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800"
                  style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
                >
                  Learn. Consult. Experience.
                </p>
                <p 
                  className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto sm:mx-0"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Through this three-fold method, we ensure that you don't just purchase skincare items—you gain knowledge, appreciation, and confidence in caring for your skin.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-[#F8F6F3] to-[#F0EDE8] rounded-lg p-6 sm:p-8 md:p-10 text-center">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4"
                style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }}
              >
                Ready to Start Your Skincare Journey?
              </h2>
              <p 
                className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Get personalized skincare recommendations and expert guidance from our specialists.
              </p>
              <a 
                href="https://wa.me/2348162523436"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
                Contact Us on WhatsApp
              </a>
            </div>

          </div>
        </section>

        </main>
      </div>

      <Footer />
    </>
  )
} 