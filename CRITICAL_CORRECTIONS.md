# 🚨 CRITICAL CORRECTIONS - READ THIS FIRST

**Document:** TEEKA4_IMPLEMENTATION_GUIDE.md Corrections
**Date:** November 26, 2025
**Priority:** CRITICAL - Read before starting implementation

---

## ⚠️ HOMEPAGE COMPONENTS CLARIFICATION

### ❌ FROZEN (DO NOT TOUCH - Static Images/Layout)

**Only these 3 components are frozen:**

1. **Homepage Hero Banner** (after nav menu)
   - File: `/src/components/HeroBanner.tsx`
   - The main banner image that appears immediately after navigation
   - Static image, text, and CTA buttons
   - **DO NOT MODIFY STRUCTURE OR STYLING**

2. **Wholesale Banner/CTA**
   - File: `/src/components/WholesaleCTA.tsx`
   - Static wholesale promotion section
   - **DO NOT MODIFY STRUCTURE OR STYLING**

3. **Video CTA**
   - File: `/src/components/VideoCTA.tsx`
   - Video background CTA section
   - **DO NOT MODIFY STRUCTURE OR STYLING**

### ✅ ADMIN-CONTROLLED (Dynamic from Backend - UPDATE DATA SOURCE)

**These sections ARE controlled by admin panel:**

1. **Featured Products** (`/src/components/SectionCarousel.tsx`)
   - **Images:** Controlled by admin via backend API
   - **Products:** Admin selects which products appear
   - **Backend:** `GET /api/homepage-sections?type=featured`
   - **What to do:** Update component to fetch from API
   - **DO NOT TOUCH:** Layout and styling structure
   - **DO TOUCH:** Replace hardcoded products with API data

2. **New Arrivals** (`/src/components/SectionCarousel.tsx`)
   - **Images:** Controlled by admin
   - **Backend:** `GET /api/homepage-sections?type=new_arrivals`
   - **What to do:** Fetch from API, display admin-selected products

3. **Best Sellers** (`/src/components/SectionCarousel.tsx`)
   - **Images:** Controlled by admin
   - **Backend:** `GET /api/homepage-sections?type=best_sellers`
   - **What to do:** Fetch from API

4. **Back in Stock** (`/src/components/SectionCarousel.tsx`)
   - **Images:** Controlled by admin
   - **Backend:** `GET /api/homepage-sections?type=back_in_stock`
   - **What to do:** Fetch from API

5. **Collections/Categories** (`/src/components/CollectionGrid.tsx`)
   - **Categories:** Bath & Body, Asian Beauty, Skincare, Sunscreen
   - **Images:** May be admin-controlled via category images
   - **Backend:** `GET /api/categories`
   - **What to do:** Fetch categories, link to shop with filter
   - **DO NOT TOUCH:** Grid layout structure
   - **DO TOUCH:** Replace hardcoded data with API

---

## 🏠 HOMEPAGE SECTIONS - BACKEND INTEGRATION

### How Homepage Sections Work

The backend already has a **Homepage Sections API** that admin controls:

```typescript
GET /api/homepage-sections

Response:
{
  success: true,
  data: [
    {
      _id: "...",
      sectionType: "featured",
      title: "Featured Products",
      subtitle: "Our top picks for you",
      products: [
        {
          _id: "prod123",
          name: "Vitamin C Serum",
          images: [
            {
              mediaId: {
                cloudinaryUrl: "https://res.cloudinary.com/.../image.jpg",
                altText: "Vitamin C Serum"
              },
              isPrimary: true
            }
          ],
          price: 15000,
          // ... full product data
        }
        // ... more products
      ],
      isActive: true,
      displayOrder: 1,
      maxProducts: 8
    },
    {
      sectionType: "new_arrivals",
      title: "New Arrivals",
      products: [...],
      isActive: true,
      displayOrder: 2
    },
    {
      sectionType: "best_sellers",
      title: "Best Sellers",
      products: [...],
      isActive: true,
      displayOrder: 3
    },
    {
      sectionType: "back_in_stock",
      title: "Back in Stock",
      products: [...],
      isActive: true,
      displayOrder: 4
    }
  ]
}
```

### What Cursor Must Do

**In `/src/app/page.tsx` (Homepage):**

```typescript
'use client'

import { useHomepageSections } from '@/lib/hooks/useHomepageSections'
import { SectionCarousel } from '@/components/SectionCarousel'
import { HeroBanner } from '@/components/HeroBanner'
import { WholesaleCTA } from '@/components/WholesaleCTA'
import { VideoCTA } from '@/components/VideoCTA'
import { CollectionGrid } from '@/components/CollectionGrid'

export default function HomePage() {
  const { sections, loading, error } = useHomepageSections()

  if (loading) return <HomepageSkeletonLoading />
  if (error) return <ErrorMessage error={error} />

  // Filter and sort active sections
  const activeSections = sections
    ?.filter(section => section.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <main>
      {/* FROZEN - Do not modify */}
      <HeroBanner />

      {/* ADMIN CONTROLLED - Dynamic sections */}
      {activeSections?.map(section => (
        <SectionCarousel
          key={section._id}
          title={section.title}
          subtitle={section.subtitle}
          products={section.products} // From admin selection
          sectionType={section.sectionType}
        />
      ))}

      {/* Collections - Link to shop with category filter */}
      <CollectionGrid />

      {/* FROZEN - Do not modify */}
      <WholesaleCTA />

      {/* FROZEN - Do not modify */}
      <VideoCTA />
    </main>
  )
}
```

**Update `/src/components/SectionCarousel.tsx`:**

```typescript
interface SectionCarouselProps {
  title: string
  subtitle?: string
  products: Product[] // From backend, NOT hardcoded
  sectionType: 'featured' | 'new_arrivals' | 'best_sellers' | 'back_in_stock'
}

export function SectionCarousel({ title, subtitle, products, sectionType }: SectionCarouselProps) {
  // KEEP existing layout/styling
  // ONLY replace hardcoded products with props.products

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

        {/* Use products from props (admin-selected) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product._id}
              product={product} // Images from Cloudinary via admin
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 🗂️ COLLECTIONS - LINK TO SHOP WITH FILTER

### Collections in Your System

You have these collections:
1. **Bath & Body**
2. **Asian Beauty**
3. **Skincare**
4. **Sunscreen**

### Collection Behavior

**When user clicks a collection:**
```
Bath & Body card clicked
  ↓
Navigate to: /shop?category=bath-body
  ↓
Shop page displays ONLY Bath & Body products
```

### Implementation

**Update `/src/components/CollectionGrid.tsx`:**

```typescript
'use client'

import { useCategories } from '@/lib/hooks/useCategories'
import Link from 'next/link'
import Image from 'next/image'

export function CollectionGrid() {
  const { categories, loading } = useCategories()

  // Filter for main collection categories
  const collections = categories?.filter(cat =>
    ['bath-body', 'asian', 'skincare', 'sunscreen'].includes(cat.slug)
  )

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

        {/* KEEP existing grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collections?.map(collection => (
            <Link
              key={collection._id}
              href={`/shop?category=${collection.slug}`} // Link to shop with filter
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <Image
                  src={collection.image || '/placeholder.jpg'}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-medium text-gray-900 group-hover:text-beauty-rose-gold">
                {collection.name}
              </h3>
              <p className="text-center text-sm text-gray-500">
                ({collection.productCount} products)
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Shop Page Receives Category Filter:**

```typescript
// /src/app/shop/page.tsx

export default function ShopPage({ searchParams }: { searchParams: { category?: string } }) {
  const categoryFilter = searchParams.category // e.g., "bath-body"

  const { products, loading } = useProducts({
    category: categoryFilter,
    // ... other filters
  })

  return (
    <div>
      <PageBanner imagePath="/shop-banner.jpg" title="Shop All Products" />

      {/* Show which category is active */}
      {categoryFilter && (
        <div className="bg-blue-50 p-4 mb-6">
          <p>Showing products in: <strong>{categoryName}</strong></p>
          <button onClick={clearCategoryFilter}>Clear filter</button>
        </div>
      )}

      {/* Rest of shop page */}
    </div>
  )
}
```

---

## 🔗 NAVIGATION MENU UPDATES (CRITICAL)

### Replace REWARDS with JEWELRY

**Current Navigation:**
```
About Us
Brands
Face
Bath & Body
Sales & Offers
Book a Consultation
REWARDS ❌ (REMOVE THIS)
Gift Cards
Wholesale
```

**New Navigation:**
```
About Us
Brands
Face
Bath & Body
Sales & Offers
Book a Consultation
JEWELRY ✅ (NEW - with dropdown)
Gift Cards
Wholesale
```

### JEWELRY Dropdown Structure

**JEWELRY dropdown must have:**
```
JEWELRY (parent)
├── Glasses
├── Watches
├── Necklaces
├── Earrings
└── Finger Rings
```

**Backend Structure:**

The backend should have a **Jewelry** parent category with subcategories:

```typescript
// Category structure in backend:
{
  _id: "cat_jewelry",
  name: "Jewelry",
  slug: "jewelry",
  parent: null,
  level: 0,
  children: [
    { _id: "cat_glasses", name: "Glasses", slug: "glasses", parent: "cat_jewelry", level: 1 },
    { _id: "cat_watches", name: "Watches", slug: "watches", parent: "cat_jewelry", level: 1 },
    { _id: "cat_necklaces", name: "Necklaces", slug: "necklaces", parent: "cat_jewelry", level: 1 },
    { _id: "cat_earrings", name: "Earrings", slug: "earrings", parent: "cat_jewelry", level: 1 },
    { _id: "cat_rings", name: "Finger Rings", slug: "finger-rings", parent: "cat_jewelry", level: 1 }
  ]
}
```

### Navigation Implementation

**Update `/src/lib/data.ts`:**

```typescript
export const navigationItems = [
  { name: 'About Us', href: '/about' },
  {
    name: 'Brands',
    href: '/brands',
    hasDropdown: false
  },
  {
    name: 'Face',
    href: '/face',
    hasDropdown: false
  },
  {
    name: 'Bath & Body',
    href: '/shop?category=bath-body',
    hasDropdown: false
  },
  {
    name: 'Sales & Offers',
    href: '/shop?featured=true',
    hasDropdown: false
  },
  {
    name: 'Book a Consultation',
    href: '/consultation',
    hasDropdown: false
  },
  {
    name: 'JEWELRY', // CHANGED FROM "REWARDS"
    href: '/shop?category=jewelry',
    hasDropdown: true, // DROPDOWN ENABLED
    dropdownItems: [] // Will be populated from backend
  },
  {
    name: 'Gift Cards',
    href: '/gift-cards',
    hasDropdown: false
  },
  {
    name: 'Wholesale',
    href: '/wholesale',
    hasDropdown: false
  }
]
```

**Navigation Component with Dynamic Jewelry Dropdown:**

```typescript
// /src/components/shared/Navigation.tsx

'use client'

import { useCategories } from '@/lib/hooks/useCategories'
import { navigationItems } from '@/lib/data'

export function Navigation() {
  const { categories } = useCategories()

  // Get jewelry subcategories from backend
  const jewelryCategory = categories?.find(cat => cat.slug === 'jewelry')
  const jewelrySubcategories = categories?.filter(cat => cat.parent === jewelryCategory?._id)

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationItems.map(item => (
        <div key={item.name} className="relative group">
          <Link href={item.href} className="hover:text-beauty-rose-gold">
            {item.name}
          </Link>

          {/* Dropdown for JEWELRY */}
          {item.name === 'JEWELRY' && jewelrySubcategories && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {jewelrySubcategories.map(subcat => (
                <Link
                  key={subcat._id}
                  href={`/shop?category=${subcat.slug}`}
                  className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-beauty-rose-gold"
                >
                  {subcat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
```

### Jewelry Navigation Flow

**User Journey:**
```
1. User hovers over "JEWELRY" in nav menu
   ↓
2. Dropdown shows:
   - Glasses
   - Watches
   - Necklaces
   - Earrings
   - Finger Rings
   ↓
3. User clicks "Watches"
   ↓
4. Navigate to: /shop?category=watches
   ↓
5. Shop page shows only watch products
   ↓
6. Breadcrumb: Home → Jewelry → Watches
```

**OR Browse All Jewelry:**
```
1. User clicks "JEWELRY" parent link
   ↓
2. Navigate to: /shop?category=jewelry
   ↓
3. Shop shows ALL jewelry products (all subcategories)
   ↓
4. Breadcrumb: Home → Jewelry
```

### Breadcrumb Implementation

```typescript
// /src/components/shared/Breadcrumb.tsx

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

// For jewelry subcategory page:
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Jewelry', href: '/shop?category=jewelry' },
    { label: 'Watches', href: '/shop?category=watches' },
    { label: productName } // Current page (no href)
  ]}
/>
```

---

## 📋 BACKEND EXPECTATIONS FOR FRONTEND

### What Backend Provides

**1. Homepage Sections (Already Exists):**
```typescript
GET /api/homepage-sections

Returns:
- Featured products (admin selected)
- New arrivals (admin selected)
- Best sellers (admin selected)
- Back in stock (admin selected)
- Each section includes full product data with images
```

**2. Categories (Already Exists):**
```typescript
GET /api/categories

Returns:
- All categories with parent-child relationships
- Bath & Body, Asian Beauty, Skincare, Sunscreen (for collections)
- Jewelry parent with subcategories (Glasses, Watches, etc.)
- Product counts per category
- Category images
```

**3. Products (Already Exists):**
```typescript
GET /api/products?category=watches

Returns:
- Products filtered by category
- Full product data including:
  * Images from Cloudinary (via mediaId.cloudinaryUrl)
  * Price, comparePrice
  * Stock status
  * Brand
  * Reviews
```

### What Backend Expects from Frontend

**1. Homepage:**
```typescript
// Frontend must:
✅ Call GET /api/homepage-sections
✅ Display sections in order (by displayOrder)
✅ Only show sections where isActive = true
✅ Use admin-selected products (section.products)
✅ Display product images from Cloudinary URLs
✅ Respect maxProducts limit per section
❌ Do NOT hardcode any products
❌ Do NOT hardcode any images
```

**2. Collections:**
```typescript
// Frontend must:
✅ Call GET /api/categories
✅ Filter for collection categories (bath-body, asian, skincare, sunscreen)
✅ Link to /shop?category={slug}
✅ Display category images (if available)
✅ Show product counts
❌ Do NOT hardcode collection data
```

**3. Navigation - Jewelry:**
```typescript
// Frontend must:
✅ Call GET /api/categories
✅ Find "Jewelry" parent category
✅ Get child categories (glasses, watches, necklaces, earrings, finger-rings)
✅ Build dropdown dynamically from backend data
✅ Link each subcategory to /shop?category={slug}
❌ Do NOT hardcode jewelry categories
```

**4. Shop Page with Category Filter:**
```typescript
// Frontend must:
✅ Read ?category={slug} from URL
✅ Call GET /api/products?category={slug}
✅ Display only products in that category
✅ Show active category in UI ("Showing: Watches")
✅ Allow clearing category filter
✅ Combine with other filters (price, brand, etc.)
```

**5. Product Images:**
```typescript
// Frontend must:
✅ Use product.images[].mediaId.cloudinaryUrl
✅ Find primary image: product.images.find(img => img.isPrimary)
✅ Fallback to first image if no primary
✅ Use next/image with Cloudinary domain
✅ Add alt text from mediaId.altText
❌ Do NOT use hardcoded image paths
❌ Do NOT use local /public/ images for products
```

---

## 🎯 CURSOR INSTRUCTIONS SUMMARY

### Do This:

1. ✅ **Homepage Hero, Wholesale CTA, Video CTA:** Keep structure/styling, no changes
2. ✅ **Featured/New Arrivals/Best Sellers/Back in Stock:** Update to fetch from `GET /api/homepage-sections`, keep layout
3. ✅ **Collections (Bath & Body, Asian, Skincare, Sunscreen):** Link to `/shop?category={slug}`
4. ✅ **Replace "REWARDS" with "JEWELRY"** in navigation
5. ✅ **Add Jewelry dropdown:** Fetch subcategories from backend (Glasses, Watches, Necklaces, Earrings, Finger Rings)
6. ✅ **Product images:** Always use Cloudinary URLs from backend (`product.images[].mediaId.cloudinaryUrl`)
7. ✅ **Category filtering:** Support `/shop?category={slug}` to display only category products
8. ✅ **Breadcrumbs:** Home → Jewelry → Watches → Product Name

### Don't Do This:

1. ❌ **Do NOT modify** Hero Banner component structure
2. ❌ **Do NOT modify** Wholesale CTA component structure
3. ❌ **Do NOT modify** Video CTA component structure
4. ❌ **Do NOT hardcode** products in Featured/New Arrivals/Best Sellers/Back in Stock
5. ❌ **Do NOT hardcode** product images
6. ❌ **Do NOT hardcode** jewelry categories in dropdown
7. ❌ **Do NOT use** local /public/ images for product photos

---

## 🔄 UPDATED IMPLEMENTATION CHECKLIST

```
Phase 1: Homepage Integration
[ ] Verify GET /api/homepage-sections works
[ ] Create useHomepageSections hook
[ ] Update /src/app/page.tsx to fetch sections
[ ] Update SectionCarousel to accept products prop
[ ] Remove hardcoded products from SectionCarousel
[ ] Test: Admin changes in panel reflect on homepage
[ ] Verify images load from Cloudinary
[ ] Keep Hero/Wholesale/Video untouched

Phase 2: Collections Integration
[ ] Verify GET /api/categories works
[ ] Create useCategories hook
[ ] Update CollectionGrid to fetch categories
[ ] Filter for: bath-body, asian, skincare, sunscreen
[ ] Link collections to /shop?category={slug}
[ ] Test: Clicking collection filters shop page

Phase 3: Navigation - Jewelry Dropdown
[ ] Update navigationItems in data.ts
[ ] Replace "REWARDS" with "JEWELRY"
[ ] Add hasDropdown: true to JEWELRY
[ ] Fetch jewelry subcategories from backend
[ ] Build dropdown dynamically (Glasses, Watches, etc.)
[ ] Link each subcategory to /shop?category={slug}
[ ] Test dropdown on hover
[ ] Test mobile menu includes jewelry subcategories

Phase 4: Shop Page Category Filtering
[ ] Read ?category from URL params
[ ] Pass category to GET /api/products
[ ] Display only filtered products
[ ] Show active category indicator
[ ] Add "Clear filter" button
[ ] Update breadcrumb based on category
[ ] Test: /shop?category=watches shows only watches

Phase 5: Product Images
[ ] Verify all products use mediaId.cloudinaryUrl
[ ] Find primary image or fallback to first
[ ] Configure next/image with Cloudinary domain
[ ] Add proper alt text
[ ] Test: No hardcoded image paths remain

Phase 6: Breadcrumbs
[ ] Build dynamic breadcrumbs for jewelry
[ ] Home → Jewelry → Watches → Product
[ ] Home → Bath & Body → Product
[ ] Test all navigation paths
```

---

## 📞 BACKEND REQUIREMENTS FOR ADMIN PANEL

### What Admin Panel Already Has:

✅ **Homepage Sections Management**
- Admin can create/edit sections (featured, new arrivals, etc.)
- Admin can add/remove products to each section
- Admin can reorder products within sections
- Admin can toggle sections active/inactive

✅ **Category Management**
- Admin can create parent categories (Jewelry)
- Admin can create subcategories (Watches, Glasses, etc.)
- Admin can assign products to categories

✅ **Product Management**
- Admin can upload product images to Cloudinary
- Admin can set primary image
- Admin can assign products to categories
- Admin can set product visibility

### What Backend Must Support:

**1. Category Hierarchy (Verify This Exists):**
```javascript
// Category model must have:
{
  parent: ObjectId (ref: Category) // For subcategories
  level: Number // 0 = parent, 1 = subcategory
  children: [ObjectId] // Virtual or actual field
}

// Jewelry structure:
Jewelry (parent, level: 0)
├── Glasses (child, level: 1, parent: jewelry_id)
├── Watches (child, level: 1, parent: jewelry_id)
├── Necklaces (child, level: 1, parent: jewelry_id)
├── Earrings (child, level: 1, parent: jewelry_id)
└── Finger Rings (child, level: 1, parent: jewelry_id)
```

**2. Product Category Assignment:**
```javascript
// Product model must support:
{
  category: ObjectId (ref: Category)
  // Product can be assigned to subcategory (e.g., Watches)
  // Querying parent category (Jewelry) returns all subcategory products
}
```

**3. Category Filtering Query:**
```javascript
// ProductController must support:
GET /api/products?category=jewelry
// Returns all products in Jewelry AND its subcategories

GET /api/products?category=watches
// Returns only products in Watches subcategory
```

---

## ✅ FINAL CHECKLIST FOR CURSOR

Before starting implementation, verify:

```
Understanding:
[ ] I understand Hero/Wholesale/Video are frozen (structure only)
[ ] I understand Featured/New/Best/Back are admin-controlled (images from backend)
[ ] I understand Collections link to shop with category filter
[ ] I understand JEWELRY replaces REWARDS with dropdown
[ ] I understand jewelry dropdown is dynamic from backend
[ ] I understand all product images come from Cloudinary (backend)
[ ] I understand breadcrumbs must reflect category hierarchy

Backend Integration:
[ ] I will use GET /api/homepage-sections for homepage
[ ] I will use GET /api/categories for navigation and collections
[ ] I will use GET /api/products?category={slug} for filtering
[ ] I will NOT hardcode any products
[ ] I will NOT hardcode any images
[ ] I will NOT hardcode jewelry categories

Implementation:
[ ] I will create useHomepageSections hook
[ ] I will create useCategories hook
[ ] I will update SectionCarousel to accept products prop
[ ] I will update CollectionGrid to link to shop
[ ] I will update Navigation to have jewelry dropdown
[ ] I will implement category filtering in shop page
[ ] I will build dynamic breadcrumbs
[ ] I will test all changes thoroughly
```

---

**CURSOR: Read this document BEFORE implementing TEEKA4_IMPLEMENTATION_GUIDE.md**

**These corrections are CRITICAL and override any conflicting information in the main guide.**

---

**Last Updated:** November 26, 2025
**Status:** Critical Corrections Applied
**Action Required:** Implement with these corrections in mind