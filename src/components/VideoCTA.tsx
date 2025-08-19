'use client'

import Link from 'next/link'

export default function VideoCTA() {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/images/banners/specialist-video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Warm Chocolate/Sepia Overlay for Better Tone */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-amber-700/40"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading - Exact Teeka4 Line Breaks */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-libre font-light mb-6 md:mb-8 leading-tight">
            Talk To An Experienced<br />
            Specialist Anytime, Anywhere
        </h2>

          {/* CTA Button - Using Libre Font */}
                    <Link
            href="/maintenance"
            className="inline-block bg-white text-black px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm font-libre font-medium uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 rounded-sm"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  )
} 