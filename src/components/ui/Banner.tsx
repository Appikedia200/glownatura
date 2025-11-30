import Image from 'next/image'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BannerProps {
  title: string
  breadcrumbs: BreadcrumbItem[]
  backgroundImage?: string
}

export default function Banner({ title, breadcrumbs, backgroundImage = '/images/banners/shop.png' }: BannerProps) {
  return (
    <div className="relative w-full h-[280px] md:h-[320px] bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content - LEFT aligned like Teeka4 */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm mb-3" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-white/70">›</span>}
                {crumb.href ? (
                  <Link 
                    href={crumb.href} 
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
          
          {/* Title - BOLD and PROMINENT */}
          <h1 className="text-4xl md:text-5xl font-bold font-playfair tracking-wide">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

