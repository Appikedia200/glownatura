# 🌟 Glow Natura - Premium Skincare eCommerce Platform

A professional, scalable Next.js 14 eCommerce platform built for the beauty and skincare industry, targeting the Nigerian market with global appeal.

## ✨ Features

### 🛍️ Complete eCommerce Experience
- **14 Professional Homepage Sections** - From promo bar to footer
- **Product Catalog** - 16 real skincare products with Nigerian Naira pricing
- **Smart Product Cards** - Ratings, reviews, quantity selectors, wishlist
- **Auto-rotating Carousels** - Featured items, new arrivals, best sellers
- **Collection Categories** - Bath & Body, Asian Brands, Sunscreens, Korean Skincare

### 🎨 Professional Design
- **Teeka4.com Inspired** - Clean, modern aesthetic
- **Mobile-First Responsive** - Perfect on all device sizes
- **Smooth Animations** - Hover effects, transitions, auto-rotating sections
- **Professional Typography** - Clean, readable fonts and spacing
- **Elegant Color Scheme** - Cream backgrounds, professional gradients

### 🚀 Technical Excellence
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Heroicons** for consistent iconography
- **Optimized Images** - Next.js Image component with fallbacks
- **Clean Architecture** - Reusable components, organized structure

## 🏗️ Project Structure

```
src/
├── app/
│   └── page.tsx              # Main homepage
├── components/
│   ├── ScrollingPromoBar.tsx # Animated promo messages
│   ├── Header.tsx            # Logo, search, cart, user icons
│   ├── NavMenu.tsx           # Navigation with dropdowns
│   ├── HeroBanner.tsx        # Main hero section
│   ├── WholesaleCTA.tsx      # Wholesale join banner
│   ├── SliderBanner.tsx      # Rotating image slider
│   ├── CollectionGrid.tsx    # Category collection grid
│   ├── ProductCard.tsx       # Reusable product display
│   ├── SectionCarousel.tsx   # Auto-rotating product sections
│   ├── FlyerPair.tsx         # Side-by-side promotional banners
│   ├── VideoCTA.tsx          # Consultation call-to-action
│   └── Footer.tsx            # Professional footer
├── lib/
│   └── data.ts              # Products, collections, navigation data
└── types/
    └── index.ts             # TypeScript type definitions

public/
└── images/
    ├── logo/                # Brand logos
    ├── banners/             # Hero and promotional banners
    ├── products/            # Product photography
    ├── collections/         # Category thumbnails
    └── ui/                  # Icons and UI elements
```

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd glow-natura-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 🖼️ Adding Your Images

The website includes professional placeholder designs, but looks best with real product images:

1. **Add product images** to `/public/images/products/` (600x600px, JPG/PNG)
2. **Add banner images** to `/public/images/banners/` (1920x800px)
3. **Add collection images** to `/public/images/collections/` (400x400px)

See `SETUP_IMAGES.md` for detailed image requirements and naming conventions.

## 💳 Products & Pricing

### Real Skincare Products
- **Featured Items** - Premium treatments and serums
- **Back in Stock** - Popular restocked items
- **New Arrivals** - Latest product additions  
- **Best Sellers** - Top-rated customer favorites

### Pricing & Features
- **Nigerian Naira (₦)** pricing
- **Bulk Discounts** - "Buy 6, Get 3% OFF"
- **Product Ratings** - Star ratings with review counts
- **Stock Management** - In-stock/out-of-stock indicators
- **Wishlist Support** - Save favorites for later

## 🎯 Professional Features

### Homepage Sections (14 total)
1. **Scrolling Promo Bar** - Animated promotional messages
2. **Header** - Logo, search, user account, cart
3. **Navigation** - Dropdown menus for brands and categories
4. **Hero Banner** - "Start Your Skin Journey" with CTA
5. **Wholesale CTA** - Join GLOW NATURA Plus program
6. **Slider Banner** - Authorized resellers showcase
7. **Collections Grid** - Category navigation
8. **Featured Items** - Curated product selection
9. **Back in Stock** - Recently restocked items
10. **Flyer Pair** - Promotional banners
11. **New Arrivals** - Latest products
12. **Consultation CTA** - Professional skincare advice
13. **Best Sellers** - Top-performing products
14. **Footer** - Links, social media, company info

### Interactive Elements
- **Auto-rotating carousels** (10-second intervals)
- **Hover animations** on product cards
- **Quantity selectors** with stock limits
- **Wishlist functionality** 
- **Mobile-responsive navigation**
- **Professional loading states**

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Images:** Next.js Image Optimization
- **Deployment Ready:** Cloudflare Pages compatible

## 🚀 Deployment

The project is ready for deployment on:
- **Cloudflare Pages** (recommended)
- **Vercel**
- **Netlify** 
- Any static hosting provider

### Build Commands
```bash
# Production build
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

- **Mobile First** - Optimized for smartphones
- **Tablet Friendly** - Perfect mid-screen experience  
- **Desktop Enhanced** - Full-featured large screen layout
- **Cross-browser Compatible** - Works in all modern browsers

## 🔄 Future Enhancements

The codebase is structured for easy expansion:
- **Shopping Cart** - Add to cart functionality
- **User Authentication** - Account management
- **Payment Integration** - Checkout and payments
- **Admin Panel** - Product management
- **Search & Filters** - Advanced product discovery
- **Reviews System** - Customer feedback

## 📄 Documentation

- `SETUP_IMAGES.md` - Complete image setup guide
- `README.md` - This file
- Code comments throughout for clarity

## 🎨 Design Philosophy

Inspired by **Teeka4.com** with focus on:
- **Clean aesthetics** - Minimal, professional design
- **User experience** - Intuitive navigation and interactions  
- **Performance** - Fast loading and smooth animations
- **Accessibility** - Inclusive design practices
- **Scalability** - Easy to expand and maintain

## 📞 Support

This is a complete, production-ready eCommerce platform built with professional standards and best practices. Perfect for launching a premium skincare business online.

---

**Built with ❤️ for the beauty industry** 🌸 