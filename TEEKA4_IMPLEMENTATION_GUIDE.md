# 🎯 GlowNatura - Professional Teeka4.com Clone Implementation Guide

**Project:** GlowNatura Beauty & Skincare eCommerce Platform
**Reference:** Teeka4.com (Exact UX Match Required)
**Date:** November 26, 2025
**Status:** Professional Production Implementation
**Developer:** Cursor AI (Strict Adherence Required)

---

## 🚨 CRITICAL INSTRUCTION FOR CURSOR

This is a **PROFESSIONAL, PRODUCTION-GRADE** implementation. You must:

1. ✅ **Scan the entire codebase** before making any changes
2. ✅ **Produce a detailed multi-step plan** before execution
3. ✅ **Ask for confirmation** before applying multi-file edits
4. ✅ **Follow Clean Architecture principles** (DRY, KISS, SOLID)
5. ✅ **Match Teeka4.com EXACTLY** - not approximately, EXACTLY
6. ✅ **Test responsiveness** on mobile, tablet, desktop
7. ✅ **Maintain existing backend integration** from the backend review
8. ✅ **Never duplicate code** - reuse components
9. ✅ **Use TypeScript strict mode** throughout
10. ✅ **Optimize for performance** (Core Web Vitals)

**Quality Standard:** Facebook/Google engineering level
**Acceptance Criteria:** Pixel-perfect match to Teeka4.com

---

## 📋 PROJECT OVERVIEW

### Vision
Recreate **Teeka4.com's user experience** with:
- ✅ Identical quality and polish
- ✅ Same filtering system
- ✅ Same layout and spacing
- ✅ Same responsiveness behavior
- ✅ Same brand/category logic
- ✅ Full backend integration (65 API endpoints)
- ✅ Admin panel controlled content

### Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.3+ (Strict Mode)
- **Styling:** TailwindCSS 3.3+
- **State:** React Context API
- **HTTP Client:** Axios with interceptors
- **Backend:** Express.js (65 endpoints, Clean Architecture)
- **Database:** MongoDB (via backend)
- **Images:** Cloudinary (via backend)
- **Admin Panel:** Separate repository (enterprise-grade)

### Current State Analysis
- ✅ Backend: Production-ready, 65 API endpoints
- ✅ Admin Panel: Enterprise-grade, TypeScript
- ⚠️ Frontend: Prototype with hardcoded data
- ❌ No backend integration yet
- ❌ Code duplication (1,460 lines)
- ❌ Missing core features (cart, checkout, filters)

---

## 🔒 FROZEN COMPONENTS (DO NOT MODIFY)

**CRITICAL:** Cursor must **NEVER** touch or alter these homepage sections:

### Protected Homepage Sections
```
❌ DO NOT TOUCH:
├── Homepage hero banner
├── Homepage wholesale CTA section
├── Homepage video CTA section
├── Homepage featured products carousel
├── Homepage categories grid
├── Homepage banner text, alignment, padding
└── Homepage images and assets

Files:
- /src/components/HeroBanner.tsx (FROZEN)
- /src/components/WholesaleCTA.tsx (FROZEN)
- /src/components/VideoCTA.tsx (FROZEN)
- /src/components/SectionCarousel.tsx (FROZEN - but update to use backend data)
- /src/components/CollectionGrid.tsx (FROZEN layout - update data source)
- /src/app/page.tsx (FROZEN structure - update data fetching only)
```

**What you CAN do:**
- ✅ Update data fetching to use backend APIs
- ✅ Pass dynamic data from backend to these components
- ✅ Fix bugs in data integration

**What you CANNOT do:**
- ❌ Change component structure
- ❌ Modify layouts or spacing
- ❌ Alter banner images or text
- ❌ Rewrite these components

---

## 🎨 GLOBAL PAGE BANNER SYSTEM

### Specification
Every top-level category page must include a **full-width banner** loaded from `/public/`.

### Banner Requirements

| Page | Banner Path | Title | Alt Text |
|------|-------------|-------|----------|
| Shop | `/public/shop-banner.jpg` | "Shop All Products" | "Shop beauty products" |
| Face | `/public/face-banner.jpg` | "Face Care" | "Face care products" |
| Brands | `/public/brands-banner.jpg` | "Shop by Brand" | "Beauty brands" |
| Skin Concerns | `/public/concerns-banner.jpg` | "Skin Concerns" | "Skin concern solutions" |

### Banner Component Specifications

**Visual Requirements (Match Teeka4 Exactly):**
```typescript
// Banner specifications
Height:
  - Mobile: 200px
  - Tablet: 300px
  - Desktop: 400px

Layout:
  - Full-bleed (edge-to-edge)
  - Responsive image (next/image)
  - Centered title overlay
  - Dark overlay for text readability (opacity: 0.4)

Title Styling:
  - Font: Playfair Display
  - Size:
    * Mobile: 2rem (32px)
    * Tablet: 3rem (48px)
    * Desktop: 4rem (64px)
  - Color: White (#FFFFFF)
  - Weight: 700 (Bold)
  - Text-align: Center
  - Text-shadow: 0 2px 4px rgba(0,0,0,0.5)
  - Letter-spacing: 0.025em

Positioning:
  - Title: Absolute centered (both horizontal and vertical)
  - Image: Object-fit cover
  - Priority loading: true (above the fold)
```

### Implementation
```typescript
// CREATE: /src/components/shared/PageBanner.tsx
interface PageBannerProps {
  imagePath: string
  title: string
  altText: string
}

export function PageBanner({ imagePath, title, altText }: PageBannerProps) {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
      <Image
        src={imagePath}
        alt={altText}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-playfair text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center tracking-wide"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {title}
        </h1>
      </div>
    </div>
  )
}
```

---

## 🛍️ SHOP PAGE REQUIREMENTS (TEEKA4 EXACT MATCH)

### Reference: Teeka4.com Shop Page Analysis

**URL:** https://teeka4.com/shop
**Must Match:** Layout, spacing, functionality, UX flow

### 4.1 Price Slider (CRITICAL FEATURE)

**Specification:**
```typescript
Component: Range Slider (dual thumb)
Library: @shadcn/ui slider or rc-slider
Min: ₦0
Max: ₦500,000 (dynamic from backend max price)
Step: ₦1,000
Default: [₦0, ₦500,000]

Visual:
- Track color: #F8BBD9 (beauty-blush)
- Active track: #E8B4B8 (beauty-rose-gold)
- Thumb: 16px circle, white border
- Height: 6px
- Current range display above slider
- Format: "₦5,000 - ₦50,000"

Behavior:
- Debounce: 500ms after user stops dragging
- Auto-fetch products when range changes
- Show loading skeleton during fetch
- Persist in URL query params (?minPrice=5000&maxPrice=50000)
- Reset button to clear filter
```

**Implementation:**
```typescript
// CREATE: /src/components/shop/PriceRangeSlider.tsx

interface PriceRangeSliderProps {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export function PriceRangeSlider({ min, max, value, onChange }: PriceRangeSliderProps) {
  const [localValue, setLocalValue] = useState(value)

  // Debounce to prevent excessive API calls
  const debouncedOnChange = useMemo(
    () => debounce(onChange, 500),
    [onChange]
  )

  const handleChange = (newValue: [number, number]) => {
    setLocalValue(newValue)
    debouncedOnChange(newValue)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm font-medium">
        <span>{formatNairaPrice(localValue[0])}</span>
        <span>{formatNairaPrice(localValue[1])}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={1000}
        value={localValue}
        onValueChange={handleChange}
        className="w-full"
      />
      <button
        onClick={() => handleChange([min, max])}
        className="text-xs text-beauty-rose-gold hover:underline"
      >
        Reset price filter
      </button>
    </div>
  )
}
```

### 4.2 Filter System (Accordion Style - Teeka4 Match)

**Categories Filter:**
```typescript
Type: Multi-select checkboxes
Style: Accordion (collapsible)
Initial: Expanded on desktop, collapsed on mobile
Items: Dynamic from backend /api/categories

Visual (Match Teeka4):
- Checkbox: 18px, rounded, beauty-rose-gold when checked
- Label: font-size 14px, text-gray-700
- Count: (24) in gray, lighter weight
- Hover: background-gray-50
- Spacing: 12px between items
- Max height: 300px with scroll
- Search: If > 10 categories, add search input

Backend Integration:
- Fetch: GET /api/categories
- Response: { success: true, data: Category[] }
- Filter: ?category=<categoryId>
```

**Skin Concerns Filter:**
```typescript
Type: Multi-select checkboxes
Style: Accordion
Backend field: product.concerns (string[])
Values: ["Acne", "Aging", "Dark Spots", "Dryness", "Oily Skin", "Sensitivity", "Wrinkles"]

Filter logic:
- OR within concerns (product matches ANY selected concern)
- AND with other filters (category, brand, price)
- Backend query: ?concerns=Acne,Aging
```

**Brands Filter:**
```typescript
Type: Multi-select checkboxes
Style: Accordion
Backend field: product.brand (string)
Dynamic: Fetch unique brands from backend
Endpoint: GET /api/products/brands (NEW - see backend section)

Visual:
- Alphabetically sorted
- Show product count per brand
- Search box if > 15 brands
- Filter: ?brand=CeraVe,TheOrdinary
```

**Skin Type Filter:**
```typescript
Type: Multi-select checkboxes
Style: Accordion
Backend field: product.skinType (string[])
Values: ["Oily", "Dry", "Combination", "Sensitive", "Normal", "All"]

Filter: ?skinType=Oily,Combination
```

### 4.3 Sorting Options (Exact Teeka4 Behavior)

**Dropdown Specification:**
```typescript
Position: Top right, above product grid
Style: Custom select dropdown
Options:
  1. "Featured" (default) → ?sort=-featured.featuredOrder
  2. "Latest" → ?sort=-createdAt
  3. "Price: Low to High" → ?sort=price
  4. "Price: High to Low" → ?sort=-price
  5. "Best Rating" → ?sort=-averageRating

Visual:
- Width: 200px
- Height: 40px
- Border: 1px solid gray-300
- Rounded: 6px
- Chevron icon: right side
- Hover: border-gray-400
- Focus: ring beauty-rose-gold

Implementation:
- Use @shadcn/ui Select component
- Update URL query param ?sort=
- Trigger refetch on change
```

### 4.4 Page Size Selector

**Specification:**
```typescript
Position: Next to sort dropdown
Options: [16, 32, 64]
Default: 16
Label: "Show:"

Visual:
- Inline with sort
- Smaller select (120px width)
- Same styling as sort dropdown

Backend:
- Query: ?limit=16
- Works with pagination: ?page=2&limit=32
```

### 4.5 Product Grid Layout (Match Teeka4)

**Grid Specifications:**
```typescript
Columns:
- Mobile (< 640px): 2 columns
- Tablet (640px - 1024px): 3 columns
- Desktop (> 1024px): 4 columns

Gap: 24px (1.5rem)
Card aspect ratio: 3:4 (image) + content below

Product Card (Match Teeka4):
├── Image Container (aspect-ratio: 3/4)
│   ├── Product image (object-cover)
│   ├── Wishlist icon (top-right, absolute)
│   ├── Badge: "New" | "Featured" | "Sale" (top-left)
│   └── Quick view button (hover overlay)
├── Product Info (p-4)
│   ├── Brand (text-xs, uppercase, gray-500)
│   ├── Product name (text-sm, font-medium, 2 lines max, truncate)
│   ├── Star rating + review count
│   ├── Price section
│   │   ├── Current price (text-lg, font-bold)
│   │   ├── Compare price (text-sm, line-through, gray-400)
│   │   └── Discount badge (if applicable)
│   └── Add to cart button (full width, primary color)

Hover Effects:
- Image: scale(1.05), 300ms transition
- Card: shadow-lg
- Add to cart: appears from bottom (slide-up animation)

Loading State:
- Skeleton cards (12 cards)
- Shimmer effect
- Same grid layout
```

### 4.6 No Results State

**Specification:**
```typescript
Trigger: products.length === 0 after API response
Layout: Centered message in main content area

Content:
├── Icon: SearchX (lucide-react) - 64px, gray-400
├── Heading: "No products found"
│   └── Font: 2xl, semibold, gray-900
├── Message: "No products match your current selection."
│   └── Font: base, gray-600
└── Actions
    ├── Button: "Clear all filters" (primary)
    └── Link: "Browse all products" (secondary)

Styling:
- Center: flex items-center justify-center
- Min height: 400px
- Spacing: space-y-6
```

### 4.7 Mobile Filter Behavior

**Mobile Specifications (< 1024px):**
```typescript
Sidebar: Hidden by default
Trigger: "Filters" button (sticky at top)

Filter Drawer:
- Position: Fixed, right side
- Width: 90vw (max 400px)
- Height: 100vh
- Animation: slide-in-right, 300ms
- Backdrop: black/50
- Close: X button (top-right) or backdrop click
- Apply button: Sticky at bottom, "Apply Filters (24)"
- Reset button: Next to apply

Behavior:
- Body scroll lock when open
- Preserve scroll position
- Show active filter count in trigger button
- Close on apply
```

### Complete Shop Page Layout

```typescript
// /src/app/shop/page.tsx structure

<div className="container mx-auto px-4 py-8">
  {/* Banner */}
  <PageBanner
    imagePath="/public/shop-banner.jpg"
    title="Shop All Products"
    altText="Shop beauty products"
  />

  {/* Breadcrumb */}
  <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />

  {/* Main Content */}
  <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 mt-8">
    {/* Sidebar - Desktop */}
    <aside className="hidden lg:block">
      <div className="sticky top-4 space-y-6">
        <PriceRangeSlider />
        <FilterAccordion title="Categories" items={categories} />
        <FilterAccordion title="Skin Concerns" items={concerns} />
        <FilterAccordion title="Brands" items={brands} />
        <FilterAccordion title="Skin Type" items={skinTypes} />
      </div>
    </aside>

    {/* Main Products Area */}
    <main>
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <MobileFilterButton count={activeFiltersCount} />
          <span className="text-sm text-gray-600">
            {totalProducts} products
          </span>
        </div>
        <div className="flex items-center gap-4">
          <PageSizeSelector />
          <SortDropdown />
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        <ProductGridSkeleton count={12} />
      ) : products.length === 0 ? (
        <NoResultsState onClearFilters={handleClearFilters} />
      ) : (
        <ProductGrid products={products} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  </div>

  {/* Mobile Filter Drawer */}
  <MobileFilterDrawer
    isOpen={filtersOpen}
    onClose={handleCloseFilters}
    onApply={handleApplyFilters}
  />
</div>
```

---

## 🏷️ BRAND PAGE LOGIC (TEEKA4 EXACT)

### Reference: Teeka4.com/brands/cerave

**Breadcrumb Structure:**
```
Home → Brands → CeraVe → Product Name
```

### Brand Page Requirements

**URL Structure:**
```
/brands → Brand listing page
/brands/[slug] → Individual brand page (e.g., /brands/cerave)
/brands/[slug]/[productSlug] → Product detail (or use /products/[id])
```

**Brand Listing Page (`/brands`):**
```typescript
Layout:
├── PageBanner (imagePath="/public/brands-banner.jpg")
├── Breadcrumb (Home → Brands)
├── Brand Grid
│   ├── Search/Filter brands (if > 20)
│   ├── Alphabetical grouping (A, B, C...)
│   └── Brand Cards (logo, name, product count)

Brand Card:
- Logo: 120x120px, centered
- Name: Below logo, centered
- Product count: "(24 products)"
- Hover: shadow-lg, scale(1.02)
- Link to: /brands/[slug]

Backend:
- GET /api/brands (NEW - see backend section)
- Response: { success: true, data: Brand[] }

Brand Interface:
interface Brand {
  _id: string
  name: string
  slug: string
  logo?: string // Cloudinary URL
  description?: string
  productCount: number
  isActive: boolean
}
```

**Individual Brand Page (`/brands/[slug]`):**
```typescript
Layout:
├── PageBanner (brand logo overlay, or default brands-banner)
├── Breadcrumb (Home → Brands → CeraVe)
├── Brand Header
│   ├── Brand logo (if available)
│   ├── Brand name (h1)
│   └── Brand description (if available)
├── Filter Sidebar (same as Shop)
│   ├── Price Range
│   ├── Categories
│   ├── Skin Concerns
│   └── Skin Type
├── Product Grid (filtered by brand)
└── Pagination

Backend Query:
GET /api/products?brand=CeraVe&page=1&limit=16

Features:
- All shop page filters apply
- Pre-filtered by brand (non-removable)
- Same sorting options
- Same grid layout
- URL: /brands/cerave?category=face&minPrice=5000
```

**Brand Filter Component:**
```typescript
// In shop page sidebar
<FilterAccordion title="Brands">
  {brands.map(brand => (
    <Link
      href={`/brands/${brand.slug}`}
      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded"
    >
      {brand.logo && (
        <Image src={brand.logo} width={24} height={24} alt={brand.name} />
      )}
      <span>{brand.name}</span>
      <span className="ml-auto text-xs text-gray-500">
        ({brand.productCount})
      </span>
    </Link>
  ))}
</FilterAccordion>
```

---

## 🧴 FACE CATEGORY PAGE (TEEKA4 EXACT)

### Reference: Teeka4.com/face

**Breadcrumb Structure:**
```
Home → Face → [Subcategory] → Product Name
```

### Face Page Requirements

**URL Structure:**
```
/face → Face category landing
/face/[subcategory] → e.g., /face/cleansers, /face/sunscreen
```

**Face Categories (Subcategories):**
```typescript
const faceCategories = [
  { name: 'Cleansers', slug: 'cleansers', icon: '🧼' },
  { name: 'Toners', slug: 'toners', icon: '💧' },
  { name: 'Serums', slug: 'serums', icon: '💫' },
  { name: 'Moisturizers', slug: 'moisturizers', icon: '🧴' },
  { name: 'Sunscreen', slug: 'sunscreen', icon: '☀️' },
  { name: 'Face Masks', slug: 'face-masks', icon: '🎭' },
  { name: 'Eye Care', slug: 'eye-care', icon: '👁️' },
  { name: 'Lip Care', slug: 'lip-care', icon: '💋' },
  { name: 'Acne Treatment', slug: 'acne-treatment', icon: '💊' },
  { name: 'Anti-Aging', slug: 'anti-aging', icon: '✨' },
]
```

**Face Landing Page (`/face`):**
```typescript
Layout:
├── PageBanner (imagePath="/public/face-banner.jpg", title="Face Care")
├── Breadcrumb (Home → Face)
├── Category Description
│   └── "Discover our complete range of face care products..."
├── Subcategory Grid (Teeka4 style)
│   └── Cards for each subcategory
└── Featured Face Products (optional)

Subcategory Card:
- Image: Category representative image
- Icon: Emoji or icon
- Name: Category name
- Product count: "(45 products)"
- Size:
  * Mobile: 2 columns
  * Tablet: 3 columns
  * Desktop: 4 columns
- Hover: lift effect
- Click: Navigate to /face/[slug]
```

**Subcategory Page (`/face/[subcategory]`):**
```typescript
Layout:
├── PageBanner (dynamic title: "Cleansers", "Sunscreen", etc.)
├── Breadcrumb (Home → Face → Cleansers)
├── Filter Sidebar
│   ├── Price Range
│   ├── Brands
│   ├── Skin Concerns
│   └── Skin Type
├── Product Grid (filtered by category)
└── Pagination

Backend Query:
GET /api/products?category=face-cleansers&page=1&limit=16

Implementation:
- Reuse ShopPage layout
- Pass category filter as prop
- Same filtering, sorting, pagination
- Different banner and breadcrumb
```

**Backend Category Structure:**
```typescript
// Categories in backend must support parent-child relationship

Category Schema Enhancement (if needed):
interface Category {
  _id: string
  name: string
  slug: string
  parent?: string // Parent category ID
  level: number // 0 = top-level, 1 = subcategory
  image?: string
  icon?: string
  description?: string
  displayOrder: number
  isActive: boolean
  productCount: number
}

Example:
{
  _id: "cat001",
  name: "Face",
  slug: "face",
  parent: null,
  level: 0,
  children: ["cat002", "cat003", ...] // Cleansers, Toners, etc.
}

{
  _id: "cat002",
  name: "Cleansers",
  slug: "cleansers",
  parent: "cat001", // Face
  level: 1
}
```

---

## 🧬 SKIN CONCERNS PAGE

### Reference: Similar to Face category logic

**URL Structure:**
```
/concerns → Concerns landing
/concerns/[concern] → e.g., /concerns/acne, /concerns/aging
```

**Skin Concerns List:**
```typescript
const skinConcerns = [
  { name: 'Acne & Blemishes', slug: 'acne', icon: '🔴', color: '#ef4444' },
  { name: 'Aging & Wrinkles', slug: 'aging', icon: '⏰', color: '#8b5cf6' },
  { name: 'Dark Spots', slug: 'dark-spots', icon: '🌑', color: '#6b7280' },
  { name: 'Dryness', slug: 'dryness', icon: '🏜️', color: '#f59e0b' },
  { name: 'Oily Skin', slug: 'oily-skin', icon: '💧', color: '#3b82f6' },
  { name: 'Sensitivity', slug: 'sensitivity', icon: '🌸', color: '#ec4899' },
  { name: 'Dullness', slug: 'dullness', icon: '😴', color: '#9ca3af' },
  { name: 'Large Pores', slug: 'large-pores', icon: '🕳️', color: '#64748b' },
]
```

**Concerns Landing Page:**
```typescript
Layout:
├── PageBanner (imagePath="/public/concerns-banner.jpg", title="Skin Concerns")
├── Breadcrumb (Home → Skin Concerns)
├── Concern Cards Grid
│   └── Each concern as clickable card
└── Educational content (optional)

Concern Card:
- Icon/Image: Large centered icon
- Color accent: Border or background tint
- Name: Concern name
- Description: Brief description
- Product count: "(32 products)"
- CTA: "Shop Solutions"
```

**Individual Concern Page:**
```typescript
Layout:
├── PageBanner (dynamic: "Acne Solutions")
├── Breadcrumb (Home → Skin Concerns → Acne)
├── Concern Info
│   ├── Icon
│   ├── Description
│   └── Educational tips
├── Filter Sidebar (same as shop)
├── Product Grid (filtered by concern)
└── Pagination

Backend Query:
GET /api/products?concerns=Acne&page=1&limit=16

Breadcrumb: Home → Skin Concerns → Acne → Product Name
```

---

## 🔧 BACKEND FEATURES CURSOR MUST ADD

### Current Backend Status
✅ **Existing (65 endpoints):** Products, Categories, Orders, Cart, Reviews, Media, Auth
❌ **Missing:** Brand endpoints, enhanced filtering, concern-based queries

### Backend Additions Required

#### 1. Brand Endpoints

**CREATE: `/src/presentation/http/routes/brand.routes.js`**
```javascript
GET    /api/brands           // List all brands (with product counts)
GET    /api/brands/:slug     // Get brand by slug
POST   /api/brands           // Create brand (admin only)
PUT    /api/brands/:id       // Update brand (admin only)
DELETE /api/brands/:id       // Delete brand (admin only)
```

**CREATE: `/src/infrastructure/database/mongodb/models/Brand.js`**
```javascript
const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  logo: { type: ObjectId, ref: 'Media' }, // Cloudinary image
  description: String,
  website: String,
  isActive: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  }
}, { timestamps: true })

// Virtual for product count
BrandSchema.virtual('productCount', {
  ref: 'Product',
  localField: 'name',
  foreignField: 'brand',
  count: true
})
```

**UPDATE: Product model**
```javascript
// Change brand from String to ObjectId reference
brand: {
  type: ObjectId,
  ref: 'Brand'
}
// OR keep as String but ensure consistency
```

#### 2. Enhanced Product Filtering

**UPDATE: `/src/presentation/http/controllers/ProductController.js`**

Add support for:
```javascript
// Multiple filters simultaneously
GET /api/products?category=face&brand=CeraVe&concerns=Acne&skinType=Oily&minPrice=5000&maxPrice=50000&sort=-createdAt&page=1&limit=16

// Brand filtering
?brand=CeraVe (single)
?brand=CeraVe,TheOrdinary (multiple, OR logic)

// Concern filtering
?concerns=Acne,Aging (multiple, OR logic)

// Skin type filtering
?skinType=Oily,Combination (multiple, OR logic)

// Category with subcategories
?category=face (parent category, includes all subcategories)
?category=face-cleansers (specific subcategory)

// Price range
?minPrice=5000&maxPrice=50000

// Sorting
?sort=-createdAt (newest)
?sort=price (price low to high)
?sort=-price (price high to low)
?sort=-averageRating (best rated)
?sort=-featured.featuredOrder (featured first)
```

**Implementation:**
```javascript
// Build dynamic query
const buildProductQuery = (filters) => {
  const query = {}

  // Category filter (support parent and child)
  if (filters.category) {
    // Check if parent category, get all child categories
    const category = await Category.findOne({ slug: filters.category })
    if (category.level === 0) {
      const childCategories = await Category.find({ parent: category._id })
      query.category = { $in: [category._id, ...childCategories.map(c => c._id)] }
    } else {
      query.category = category._id
    }
  }

  // Brand filter (multiple with OR)
  if (filters.brand) {
    const brands = filters.brand.split(',')
    query.brand = { $in: brands }
  }

  // Skin concerns (multiple with OR)
  if (filters.concerns) {
    const concerns = filters.concerns.split(',')
    query.concerns = { $in: concerns }
  }

  // Skin type (multiple with OR)
  if (filters.skinType) {
    const skinTypes = filters.skinType.split(',')
    query.skinType = { $in: skinTypes }
  }

  // Price range
  if (filters.minPrice || filters.maxPrice) {
    query.price = {}
    if (filters.minPrice) query.price.$gte = Number(filters.minPrice)
    if (filters.maxPrice) query.price.$lte = Number(filters.maxPrice)
  }

  // Status filter (default: active only)
  query.status = filters.status || 'active'

  return query
}

// Build sort object
const buildSortObject = (sortParam) => {
  switch(sortParam) {
    case '-createdAt': return { createdAt: -1 }
    case 'price': return { price: 1 }
    case '-price': return { price: -1 }
    case '-averageRating': return { averageRating: -1 }
    case '-featured.featuredOrder': return { 'featured.featuredOrder': -1, createdAt: -1 }
    default: return { 'featured.featuredOrder': -1, createdAt: -1 }
  }
}
```

#### 3. Price Range Endpoint

**CREATE: GET `/api/products/price-range`**
```javascript
// Returns min and max prices for current filter set
// Used to set slider bounds dynamically

Response:
{
  success: true,
  data: {
    min: 2500,
    max: 125000,
    currency: "NGN"
  }
}

// With filters:
GET /api/products/price-range?category=face&brand=CeraVe
// Returns price range only for face products by CeraVe
```

#### 4. Category Hierarchy Support

**UPDATE: Category endpoints**
```javascript
GET /api/categories?includeChildren=true
// Returns categories with nested children

Response:
{
  success: true,
  data: [
    {
      _id: "cat001",
      name: "Face",
      slug: "face",
      children: [
        { _id: "cat002", name: "Cleansers", slug: "cleansers", productCount: 24 },
        { _id: "cat003", name: "Toners", slug: "toners", productCount: 15 }
      ],
      productCount: 145 // Total including children
    }
  ]
}
```

#### 5. Search Improvements

**UPDATE: `/api/products` search**
```javascript
// Current: Basic text search
// Add: Search in brand, category, concerns too

GET /api/products?search=vitamin%20C

Search in:
- product.name
- product.description
- product.keywords
- product.brand
- product.ingredients
- category.name
```

### Backend Implementation Checklist

Cursor must check if these exist, and create if missing:

```
Backend Additions:
[ ] Brand model (/src/infrastructure/database/mongodb/models/Brand.js)
[ ] Brand routes (/src/presentation/http/routes/brand.routes.js)
[ ] Brand controller (/src/presentation/http/controllers/BrandController.js)
[ ] Brand service (/src/application/use-cases/brands/)
[ ] Enhanced product filtering (update ProductController)
[ ] Price range endpoint (GET /api/products/price-range)
[ ] Category hierarchy support (update CategoryController)
[ ] Multi-filter query builder
[ ] Brand aggregation for product counts
[ ] Concern-based filtering
[ ] Improved search (brand + category + concerns)
```

**IMPORTANT:**
- ✅ Follow existing backend Clean Architecture pattern
- ✅ Add to existing controllers, don't create duplicates
- ✅ Update admin panel to support brand management
- ✅ Add database indexes for performance
- ✅ Handle errors gracefully
- ✅ Add validation for all new endpoints

---

## 📱 RESPONSIVENESS REQUIREMENTS (CRITICAL)

### Breakpoints (Tailwind Standard)
```typescript
xs:  475px   // Extra small phones
sm:  640px   // Small devices
md:  768px   // Tablets
lg:  1024px  // Desktops
xl:  1280px  // Large desktops
2xl: 1536px  // Extra large screens
```

### Mobile First Approach
All components must be designed mobile-first, then enhanced for larger screens.

### Specific Responsive Requirements

#### Logo
```typescript
Location: /public/logo/ (use existing logo files)

Sizing:
- Mobile: h-12 (48px)
- Tablet: h-16 (64px)
- Desktop: h-20 (80px)

Implementation:
<Image
  src="/logo/logo.png"
  alt="GlowNatura"
  width={80}
  height={80}
  className="h-12 sm:h-16 lg:h-20 w-auto"
  priority
/>
```

#### Navigation
```typescript
Mobile (< 1024px):
- Hamburger menu (top right)
- Full-screen drawer
- Stacked links
- Search bar full width

Desktop (>= 1024px):
- Horizontal navigation bar
- Dropdowns for categories
- Inline search bar
- User icons (wishlist, cart, account)
```

#### Product Grid
```typescript
Columns by breakpoint:
- < 640px: 2 columns (grid-cols-2)
- 640px - 1024px: 3 columns (grid-cols-3)
- >= 1024px: 4 columns (grid-cols-4)

Gap:
- Mobile: gap-4 (16px)
- Desktop: gap-6 (24px)
```

#### Filter Sidebar
```typescript
Mobile (< 1024px):
- Hidden by default
- Drawer from right
- Full height
- 90vw width (max 400px)
- Sticky "Apply" button at bottom

Desktop (>= 1024px):
- Permanent sidebar
- 280px fixed width
- Sticky positioning (top-4)
- Scroll independently
```

#### Page Banner
```typescript
Height responsive:
- Mobile: h-48 (192px)
- Tablet: h-64 (256px)
- Desktop: h-80 (320px)

Title size:
- Mobile: text-2xl
- Tablet: text-4xl
- Desktop: text-5xl
```

#### Typography Scale
```typescript
Headings:
- H1: text-2xl sm:text-3xl lg:text-4xl
- H2: text-xl sm:text-2xl lg:text-3xl
- H3: text-lg sm:text-xl lg:text-2xl

Body:
- Base: text-sm sm:text-base
- Small: text-xs sm:text-sm
```

#### Touch Targets
```
Minimum: 44x44px (iOS/Android standard)
Buttons: min-h-[44px]
Checkboxes/radios: w-5 h-5 (20px) with larger touch area (p-2)
```

#### Spacing
```typescript
Container padding:
- Mobile: px-4 (16px)
- Tablet: px-6 (24px)
- Desktop: px-8 (32px)

Section spacing:
- Mobile: py-8 (32px)
- Desktop: py-12 (48px)
```

### Testing Requirements
Cursor must ensure all pages work on:
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- Samsung Galaxy (360px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop 1440px
- Desktop 1920px

**Test checklist:**
- [ ] No horizontal scroll
- [ ] All text readable
- [ ] All buttons tappable
- [ ] Images load correctly
- [ ] No layout shift
- [ ] Fast loading
- [ ] Smooth animations
- [ ] Proper keyboard navigation

---

## 🧩 COMPONENT ARCHITECTURE

### Reusable Components (DRY Principle)

All components must be reusable, single-responsibility, and well-typed.

#### Core Shared Components

**1. PageBanner**
```typescript
// /src/components/shared/PageBanner.tsx
interface PageBannerProps {
  imagePath: string
  title: string
  altText: string
  height?: 'sm' | 'md' | 'lg' // Optional custom height
  overlay?: boolean // Dark overlay toggle
}

Usage:
<PageBanner
  imagePath="/shop-banner.jpg"
  title="Shop All Products"
  altText="Shop banner"
/>
```

**2. Breadcrumb**
```typescript
// /src/components/shared/Breadcrumb.tsx
interface BreadcrumbItem {
  label: string
  href?: string // Omit for current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

Usage:
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Brands', href: '/brands' },
    { label: 'CeraVe' }
  ]}
/>

Visual (Match Teeka4):
Home > Brands > CeraVe
- Separator: > (gray-400)
- Links: text-beauty-rose-gold hover:underline
- Current: text-gray-900 font-medium
- Mobile: text-xs, Desktop: text-sm
```

**3. ProductCard**
```typescript
// /src/components/product/ProductCard.tsx
interface ProductCardProps {
  product: Product
  priority?: boolean // Image loading priority
  onAddToCart?: (productId: string, quantity: number) => void
  onToggleWishlist?: (productId: string) => void
}

Features:
- Lazy load images (except priority)
- Wishlist toggle (top-right heart icon)
- Quick view (hover overlay)
- Add to cart (slide up on hover)
- Stock status badge
- Discount badge
- Star rating
- Link to product detail
```

**4. ProductGrid**
```typescript
// /src/components/product/ProductGrid.tsx
interface ProductGridProps {
  products: Product[]
  loading?: boolean
  emptyMessage?: string
  columns?: { mobile: number, tablet: number, desktop: number }
}

Default columns: { mobile: 2, tablet: 3, desktop: 4 }

Usage:
<ProductGrid products={products} loading={loading} />
```

**5. FilterAccordion**
```typescript
// /src/components/shop/FilterAccordion.tsx
interface FilterItem {
  label: string
  value: string | number
  count?: number
  checked?: boolean
}

interface FilterAccordionProps {
  title: string
  items: FilterItem[]
  onChange: (selectedValues: string[]) => void
  searchable?: boolean // Add search if > 10 items
  defaultOpen?: boolean
}

Visual:
- Collapsible header with chevron
- Checkbox list
- Item count in gray
- Search input (if searchable)
- Max height 300px with scroll
```

**6. Pagination**
```typescript
// /src/components/shared/Pagination.tsx
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number // Pages to show on each side
}

Visual (Match Teeka4):
[<] [1] [2] [3] ... [8] [9] [10] [>]
- Active page: bg-beauty-rose-gold text-white
- Hover: bg-gray-100
- Arrows: disabled if first/last
- Mobile: Show fewer pages
```

**7. LoadingSkeleton**
```typescript
// /src/components/shared/LoadingSkeleton.tsx

ProductCardSkeleton: Shimmer effect, same dimensions as ProductCard
ProductGridSkeleton: Grid of skeletons
PageSkeleton: Full page skeleton
```

**8. NoResults**
```typescript
// /src/components/shared/NoResults.tsx
interface NoResultsProps {
  title?: string
  message?: string
  actionLabel?: string
  onAction?: () => void
}

Default:
title: "No products found"
message: "Try adjusting your filters"
actionLabel: "Clear filters"
```

**9. MobileFilterDrawer**
```typescript
// /src/components/shop/MobileFilterDrawer.tsx
interface MobileFilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode // Filter components
  activeCount: number
  onApply: () => void
  onReset: () => void
}

Features:
- Slide from right
- Backdrop
- Sticky header with close button
- Scrollable filter content
- Sticky footer with Apply/Reset buttons
- Body scroll lock
- Escape key to close
```

**10. SortDropdown**
```typescript
// /src/components/shop/SortDropdown.tsx
interface SortOption {
  label: string
  value: string
}

const sortOptions: SortOption[] = [
  { label: 'Featured', value: '-featured.featuredOrder' },
  { label: 'Latest', value: '-createdAt' },
  { label: 'Price: Low to High', value: 'price' },
  { label: 'Price: High to Low', value: '-price' },
  { label: 'Best Rating', value: '-averageRating' },
]

Props:
interface SortDropdownProps {
  value: string
  onChange: (value: string) => void
}
```

### Component File Structure

```
src/components/
├── shared/              # Reusable across entire app
│   ├── PageBanner.tsx
│   ├── Breadcrumb.tsx
│   ├── Pagination.tsx
│   ├── LoadingSkeleton.tsx
│   ├── NoResults.tsx
│   ├── ImageWithLoader.tsx
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   └── Footer.tsx
│
├── product/             # Product-specific
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductDetail.tsx
│   ├── ProductImageGallery.tsx
│   ├── ProductInfo.tsx
│   ├── RelatedProducts.tsx
│   └── QuickView.tsx
│
├── shop/                # Shop/filter specific
│   ├── FilterAccordion.tsx
│   ├── PriceRangeSlider.tsx
│   ├── MobileFilterDrawer.tsx
│   ├── FilterSidebar.tsx
│   ├── SortDropdown.tsx
│   ├── PageSizeSelector.tsx
│   └── ActiveFilters.tsx
│
├── cart/                # Cart specific
│   ├── CartDrawer.tsx
│   ├── CartItem.tsx
│   ├── CartSummary.tsx
│   └── CartEmpty.tsx
│
├── brand/               # Brand specific
│   ├── BrandCard.tsx
│   ├── BrandGrid.tsx
│   └── BrandHeader.tsx
│
├── category/            # Category specific
│   ├── CategoryCard.tsx
│   ├── CategoryGrid.tsx
│   └── SubcategoryList.tsx
│
└── (existing frozen components)
    ├── HeroBanner.tsx
    ├── WholesaleCTA.tsx
    ├── VideoCTA.tsx
    ├── SectionCarousel.tsx
    └── CollectionGrid.tsx
```

---

## 📄 PAGE STRUCTURE & ROUTING

### Complete Page List

```
Pages Cursor Must Implement:

Public Pages:
├── / (Homepage) - UPDATE data fetching only
├── /shop - NEW (main shop page)
├── /shop/[category] - NEW (category filtered)
├── /products/[id] - NEW (product detail)
├── /face - NEW (face landing)
├── /face/[subcategory] - NEW (face category)
├── /brands - NEW (brand listing)
├── /brands/[slug] - NEW (brand page)
├── /concerns - NEW (concerns listing)
├── /concerns/[slug] - NEW (concern page)
├── /cart - NEW (shopping cart)
├── /checkout - NEW (checkout flow)
├── /checkout/success - NEW (order confirmation)
├── /search - NEW (search results)
├── /about - EXISTS (no changes)
├── /consultation - EXISTS (update if needed)
└── /maintenance - EXISTS (temporary placeholder)

Account Pages (Future):
├── /account - Placeholder (link to login)
├── /account/orders - Placeholder
├── /account/wishlist - Placeholder
└── /login - Placeholder (or implement)
```

### Route Implementation Priority

**Phase 1 (Essential):**
1. /shop (main shop with all filters)
2. /products/[id] (product detail)
3. /cart (shopping cart)
4. /brands (brand listing)
5. /brands/[slug] (brand page)

**Phase 2 (Important):**
6. /face (face category)
7. /face/[subcategory] (face subcategories)
8. /concerns (concerns listing)
9. /concerns/[slug] (concern pages)
10. /search (search results)

**Phase 3 (Nice to have):**
11. /checkout (checkout flow)
12. /checkout/success (confirmation)
13. /shop/[category] (dynamic categories)

### File Structure for Routes

```
src/app/
├── (protected)/              # Future: Auth-required pages
│   └── account/
│       ├── page.tsx
│       ├── orders/
│       └── wishlist/
│
├── shop/
│   ├── page.tsx             # Main shop page
│   ├── [category]/
│   │   └── page.tsx         # Category filtered (optional)
│   └── layout.tsx           # Shared shop layout (optional)
│
├── products/
│   └── [id]/
│       └── page.tsx         # Product detail page
│
├── face/
│   ├── page.tsx             # Face landing
│   └── [subcategory]/
│       └── page.tsx         # Face subcategory
│
├── brands/
│   ├── page.tsx             # Brand listing
│   └── [slug]/
│       └── page.tsx         # Individual brand
│
├── concerns/
│   ├── page.tsx             # Concerns listing
│   └── [slug]/
│       └── page.tsx         # Individual concern
│
├── cart/
│   └── page.tsx             # Shopping cart
│
├── checkout/
│   ├── page.tsx             # Checkout form
│   └── success/
│       └── page.tsx         # Order confirmation
│
├── search/
│   └── page.tsx             # Search results
│
├── about/
│   └── page.tsx             # Existing
│
├── consultation/
│   └── page.tsx             # Existing
│
├── maintenance/
│   └── page.tsx             # Existing
│
├── page.tsx                 # Homepage (UPDATE only)
└── layout.tsx               # Root layout (UPDATE providers)
```

---

## 🎨 VISUAL MATCHING (TEEKA4 EXACT)

### Design Tokens (Extract from Teeka4)

Cursor must match these exact values from Teeka4:

**Colors:**
```typescript
// Update tailwind.config.js if needed
colors: {
  primary: '#E8B4B8',      // Beauty rose-gold
  secondary: '#F8BBD9',    // Beauty blush
  accent: '#2D2D2D',       // Charcoal
  background: '#FFF8F3',   // Cream

  // Grays (Teeka4 match)
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
}
```

**Typography:**
```typescript
// Fonts (match Teeka4)
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Playfair Display', 'Georgia', 'serif'],
  heading: ['Montserrat', 'sans-serif'],
}

// Sizes (match Teeka4)
fontSize: {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
}
```

**Spacing (Teeka4 match):**
```typescript
Card padding: p-4 (16px)
Grid gap: gap-6 (24px)
Section margin: my-12 (48px)
Container max-width: max-w-7xl (1280px)
```

**Shadows (Teeka4 match):**
```typescript
Card hover: shadow-lg
Dropdown: shadow-xl
Button: shadow-md
Drawer: shadow-2xl
```

**Border Radius:**
```typescript
Card: rounded-lg (8px)
Button: rounded-md (6px)
Input: rounded-md (6px)
Image: rounded-lg (8px)
Badge: rounded-full
```

**Transitions:**
```typescript
Default: transition-all duration-300 ease-in-out
Hover scale: hover:scale-105
Opacity fade: transition-opacity duration-200
```

### Component Styling Specifics

**Product Card (Exact Teeka4):**
```typescript
Card:
- Border: none
- Shadow: shadow-sm (default), shadow-lg (hover)
- Padding: p-4
- Rounded: rounded-lg
- Background: white
- Transition: all 300ms

Image Container:
- Aspect ratio: 3/4
- Object fit: cover
- Rounded: rounded-t-lg
- Hover: scale(1.05)

Wishlist Icon:
- Position: absolute top-2 right-2
- Size: 24px
- Color: gray-400 (default), red-500 (active)
- Background: white
- Rounded: full
- Padding: p-2
- Shadow: shadow-md

Product Name:
- Font: font-sans
- Size: text-sm
- Weight: font-medium
- Color: text-gray-900
- Lines: 2 max (line-clamp-2)
- Margin: mt-2

Brand:
- Font: font-sans
- Size: text-xs
- Weight: font-normal
- Color: text-gray-500
- Transform: uppercase
- Margin: mb-1

Price:
- Current: text-lg font-bold text-gray-900
- Compare: text-sm line-through text-gray-400
- Layout: flex items-baseline gap-2

Rating:
- Stars: gold-400 (filled), gray-300 (empty)
- Count: text-xs text-gray-500 ml-1
- Layout: flex items-center gap-1

Add to Cart Button:
- Position: absolute bottom (on hover)
- Width: full
- Height: 44px
- Background: primary
- Color: white
- Font: font-medium text-sm
- Rounded: rounded-b-lg
- Transform: translateY(100%) → translateY(0)
- Transition: 300ms
```

**Filter Accordion (Exact Teeka4):**
```typescript
Header:
- Padding: py-3 px-4
- Border bottom: 1px gray-200
- Font: text-sm font-semibold
- Cursor: pointer
- Hover: bg-gray-50

Content:
- Padding: p-4
- Max height: 300px
- Overflow: auto
- Scrollbar: thin, gray-300

Checkbox:
- Size: 18px
- Rounded: rounded-sm
- Border: 2px gray-300
- Checked: bg-primary border-primary
- Transition: all 200ms

Label:
- Font: text-sm
- Color: text-gray-700
- Cursor: pointer
- Padding: py-2
- Hover: bg-gray-50
- Full width clickable

Count:
- Color: text-gray-400
- Font: text-xs
- Position: ml-auto
```

**Mobile Filter Drawer (Exact Teeka4):**
```typescript
Backdrop:
- Background: black/50
- Backdrop blur: blur-sm
- Transition: opacity 300ms

Drawer:
- Position: fixed right-0
- Width: 90vw (max 400px)
- Height: 100vh
- Background: white
- Shadow: shadow-2xl
- Transform: translateX(100%) → translateX(0)
- Transition: transform 300ms ease-out

Header:
- Padding: p-4
- Border bottom: 1px gray-200
- Sticky top
- Background: white
- Title: text-lg font-semibold

Content:
- Padding: p-4
- Overflow: auto
- Height: calc(100vh - 140px) // Header + footer

Footer:
- Padding: p-4
- Border top: 1px gray-200
- Sticky bottom
- Background: white
- Buttons: flex gap-2

Apply Button:
- Width: flex-1
- Background: primary
- Color: white
- Height: 44px
- Rounded: rounded-md
- Font: font-medium

Reset Button:
- Width: flex-1
- Background: white
- Color: primary
- Border: 1px primary
- Height: 44px
- Rounded: rounded-md
```

---

## 🚀 IMPLEMENTATION CHECKLIST

### Pre-Implementation

```
Before coding, Cursor must:
[ ] Read entire codebase
[ ] Review FRONTEND_REVIEW_AND_INTEGRATION_PLAN.md
[ ] Understand existing backend integration setup
[ ] Identify all files that need modification
[ ] Create detailed implementation plan
[ ] Ask for user confirmation
[ ] Set up development branch
```

### Phase 1: Foundation (Hours 1-3)

```
[ ] Verify backend API is accessible
[ ] Test all 65 endpoints
[ ] Confirm authentication works
[ ] Check Cloudinary image loading
[ ] Set up environment variables
[ ] Install any missing dependencies
[ ] Create component structure
[ ] Set up TypeScript types
```

### Phase 2: Shared Components (Hours 4-6)

```
[ ] PageBanner component (+ tests)
[ ] Breadcrumb component
[ ] ProductCard component (backend integrated)
[ ] ProductGrid component
[ ] LoadingSkeleton components
[ ] NoResults component
[ ] Pagination component
[ ] ImageWithLoader component (replace duplicates)
```

### Phase 3: Shop Page (Hours 7-10)

```
[ ] Shop page layout
[ ] FilterSidebar component
[ ] PriceRangeSlider component
[ ] FilterAccordion component
[ ] SortDropdown component
[ ] PageSizeSelector component
[ ] MobileFilterDrawer component
[ ] ActiveFilters display
[ ] Backend integration (GET /api/products with filters)
[ ] URL query param sync
[ ] Pagination
[ ] Loading states
[ ] Empty states
[ ] Mobile responsive testing
```

### Phase 4: Product Detail Page (Hours 11-13)

```
[ ] Product detail page layout
[ ] ProductImageGallery component
[ ] ProductInfo component
[ ] AddToCart integration (real backend)
[ ] Wishlist integration
[ ] Reviews display
[ ] Review form
[ ] Related products
[ ] Breadcrumb
[ ] SEO metadata
[ ] Social sharing
[ ] Mobile responsive
```

### Phase 5: Brand Pages (Hours 14-16)

```
[ ] Check if Brand model exists in backend
[ ] Create Brand endpoints if missing
[ ] Brand listing page (/brands)
[ ] BrandCard component
[ ] BrandGrid component
[ ] Individual brand page (/brands/[slug])
[ ] Brand header
[ ] Brand description
[ ] Brand product grid (filtered)
[ ] Breadcrumb
[ ] SEO
```

### Phase 6: Face Category (Hours 17-19)

```
[ ] Face landing page (/face)
[ ] Subcategory cards
[ ] Face subcategory pages (/face/[subcategory])
[ ] Category description
[ ] Category banner
[ ] Product filtering by category
[ ] Breadcrumb
[ ] SEO
```

### Phase 7: Skin Concerns (Hours 20-21)

```
[ ] Concerns landing page
[ ] ConcernCard component
[ ] Individual concern pages
[ ] Concern filtering
[ ] Educational content
[ ] Breadcrumb
```

### Phase 8: Cart & Checkout (Hours 22-25)

```
[ ] Cart page layout
[ ] CartItem component
[ ] CartSummary component
[ ] Update quantity (backend integrated)
[ ] Remove item (backend integrated)
[ ] Cart empty state
[ ] CartDrawer (mini cart in header)
[ ] Checkout page
[ ] Checkout form validation
[ ] Order submission (backend)
[ ] Success page
[ ] Order confirmation email trigger
```

### Phase 9: Search (Hours 26-27)

```
[ ] Search results page
[ ] Search input integration (header)
[ ] Instant search dropdown (optional)
[ ] Search with filters
[ ] Search suggestions
[ ] No results state
```

### Phase 10: Polish & Optimization (Hours 28-30)

```
[ ] Remove all code duplication
[ ] Delete unused files (products.ts, SliderBanner.tsx, etc.)
[ ] Optimize images
[ ] Add loading states everywhere
[ ] Error handling
[ ] Toast notifications
[ ] Accessibility (a11y)
[ ] Keyboard navigation
[ ] SEO metadata all pages
[ ] Performance optimization
[ ] Core Web Vitals check
```

### Phase 11: Testing (Hours 31-33)

```
Responsive Testing:
[ ] iPhone SE (375px)
[ ] iPhone 12 Pro (390px)
[ ] Samsung Galaxy (360px)
[ ] iPad (768px)
[ ] iPad Pro (1024px)
[ ] Desktop 1440px
[ ] Desktop 1920px

Functional Testing:
[ ] All filters work
[ ] Sorting works
[ ] Pagination works
[ ] Add to cart works
[ ] Wishlist works
[ ] Checkout works
[ ] Search works
[ ] Navigation works
[ ] Breadcrumbs correct
[ ] Images load from Cloudinary
[ ] Backend data displays correctly

Performance Testing:
[ ] Lighthouse score > 90
[ ] First Contentful Paint < 1.8s
[ ] Time to Interactive < 3.8s
[ ] Cumulative Layout Shift < 0.1
[ ] No console errors
[ ] No console warnings
```

### Phase 12: Backend Validation (Hours 34-35)

```
Backend Checklist:
[ ] Brand endpoints exist
[ ] Brand model exists
[ ] Enhanced product filtering works
[ ] Price range endpoint works
[ ] Category hierarchy supported
[ ] Multi-filter queries work
[ ] Pagination works
[ ] Sorting works
[ ] Search improved
[ ] All endpoints return correct data
[ ] Error handling works
[ ] Admin panel updated (if needed)
```

### Phase 13: Final Review (Hours 36)

```
Code Quality:
[ ] No duplicate code
[ ] DRY principle followed
[ ] KISS principle followed
[ ] SOLID principles followed
[ ] TypeScript strict mode passes
[ ] No 'any' types (except when necessary)
[ ] All components documented
[ ] All functions have JSDoc
[ ] Clean code standards

Visual Review:
[ ] Matches Teeka4 exactly
[ ] Typography correct
[ ] Spacing correct
[ ] Colors correct
[ ] Shadows correct
[ ] Borders correct
[ ] Animations smooth
[ ] No layout shift

Frozen Components:
[ ] Homepage hero untouched
[ ] Wholesale CTA untouched
[ ] Video CTA untouched
[ ] Featured products structure untouched (data updated)
[ ] Categories structure untouched (data updated)
```

---

## 📁 FILE & COMPONENT LIST

### Files Cursor Must CREATE

```
New Components:
src/components/shared/
├── PageBanner.tsx                    # Global page banners
├── Breadcrumb.tsx                    # Navigation breadcrumbs
├── Pagination.tsx                    # Pagination controls
├── NoResults.tsx                     # Empty state
├── ImageWithLoader.tsx               # Unified image loading
└── LoadingSkeleton.tsx               # Loading skeletons

src/components/product/
├── ProductGrid.tsx                   # Product grid layout
├── ProductImageGallery.tsx           # Image gallery with zoom
├── ProductInfo.tsx                   # Product information display
├── RelatedProducts.tsx               # Related products section
└── QuickView.tsx                     # Quick view modal

src/components/shop/
├── FilterSidebar.tsx                 # Desktop filter sidebar
├── FilterAccordion.tsx               # Collapsible filter sections
├── PriceRangeSlider.tsx             # Price range slider
├── MobileFilterDrawer.tsx           # Mobile filter drawer
├── SortDropdown.tsx                 # Sort dropdown
├── PageSizeSelector.tsx             # Page size selector
└── ActiveFilters.tsx                # Active filters display

src/components/brand/
├── BrandCard.tsx                    # Brand card
├── BrandGrid.tsx                    # Brand grid layout
└── BrandHeader.tsx                  # Brand page header

src/components/category/
├── CategoryCard.tsx                 # Category card
├── CategoryGrid.tsx                 # Category grid
└── SubcategoryList.tsx              # Subcategory list

src/components/cart/
├── CartDrawer.tsx                   # Mini cart drawer
├── CartItem.tsx                     # Cart item component
├── CartSummary.tsx                  # Cart summary/totals
└── CartEmpty.tsx                    # Empty cart state

New Pages:
src/app/shop/
├── page.tsx                         # Main shop page
└── layout.tsx                       # Shop layout (optional)

src/app/products/
└── [id]/
    └── page.tsx                     # Product detail page

src/app/brands/
├── page.tsx                         # Brand listing
└── [slug]/
    └── page.tsx                     # Individual brand page

src/app/face/
├── page.tsx                         # Face landing
└── [subcategory]/
    └── page.tsx                     # Face subcategory

src/app/concerns/
├── page.tsx                         # Concerns landing
└── [slug]/
    └── page.tsx                     # Individual concern

src/app/cart/
└── page.tsx                         # Cart page

src/app/checkout/
├── page.tsx                         # Checkout
└── success/
    └── page.tsx                     # Order confirmation

src/app/search/
└── page.tsx                         # Search results

New Utilities:
src/lib/utils/
├── url-params.ts                    # URL query param helpers
├── filters.ts                       # Filter utility functions
└── product-helpers.ts               # Product formatting helpers
```

### Files Cursor Must MODIFY

```
Update Existing:
src/app/
├── page.tsx                         # UPDATE: Use backend for homepage data
└── layout.tsx                       # UPDATE: Add providers

src/components/
├── Header.tsx                       # UPDATE: Integrate cart count, wishlist count
├── ProductCard.tsx                  # UPDATE: Real backend integration
├── SectionCarousel.tsx              # UPDATE: Use backend data
└── CollectionGrid.tsx               # UPDATE: Use backend categories

src/lib/
├── data.ts                          # UPDATE: Remove products, keep UI constants only
└── types/index.ts                   # UPDATE: Add new types (Brand, etc.)

Backend (if needed):
backend/src/infrastructure/database/mongodb/models/
└── Brand.js                         # CREATE: Brand model

backend/src/presentation/http/routes/
└── brand.routes.js                  # CREATE: Brand routes

backend/src/presentation/http/controllers/
├── BrandController.js               # CREATE: Brand controller
└── ProductController.js             # UPDATE: Enhanced filtering

backend/src/application/use-cases/
└── brands/                          # CREATE: Brand use cases
```

### Files Cursor Must DELETE

```
Remove Duplicates:
src/lib/
└── products.ts                      # DELETE: Unused, 552 lines

src/components/
├── ImageLoader.tsx                  # DELETE: Replaced by ImageWithLoader
└── SliderBanner.tsx                 # DELETE: Unused, 183 lines

Remove if duplicate navigation is found:
src/components/
└── NavMenu.tsx                      # DELETE: If duplication confirmed
```

---

## 🔌 BACKEND ADDITIONS LIST

### Endpoints Cursor Must Check/Create

#### 1. Brand Endpoints (Priority: HIGH)

```javascript
// Check if these exist, create if not:

GET    /api/brands
GET    /api/brands/:slug
POST   /api/brands              // Admin only
PUT    /api/brands/:id          // Admin only
DELETE /api/brands/:id          // Admin only

// Model:
Brand {
  _id: ObjectId
  name: String (required, unique)
  slug: String (required, unique)
  logo: ObjectId (ref: Media)
  description: String
  website: String
  isActive: Boolean
  displayOrder: Number
  seo: { metaTitle, metaDescription, keywords }
  createdAt: Date
  updatedAt: Date
}

// Virtual:
productCount: Number (count of products with this brand)
```

#### 2. Enhanced Product Filtering (Priority: HIGH)

```javascript
// Update ProductController to support:

GET /api/products?brand=CeraVe,TheOrdinary&concerns=Acne,Aging&skinType=Oily&category=face&minPrice=5000&maxPrice=50000&sort=-createdAt&page=1&limit=16

Query parameters:
- brand: String (single) or Array (multiple, OR logic)
- concerns: Array (OR logic)
- skinType: Array (OR logic)
- category: String (support parent → children)
- minPrice: Number
- maxPrice: Number
- sort: String (-createdAt, price, -price, -averageRating, -featured.featuredOrder)
- page: Number
- limit: Number
- search: String (enhanced to include brand, category)

Response format:
{
  success: true,
  data: Product[],
  pagination: {
    page: 1,
    limit: 16,
    total: 245,
    totalPages: 16
  }
}
```

#### 3. Price Range Endpoint (Priority: MEDIUM)

```javascript
GET /api/products/price-range?category=face&brand=CeraVe

Response:
{
  success: true,
  data: {
    min: 2500,
    max: 125000,
    currency: "NGN"
  }
}

// Returns min/max prices for filtered set
// Used to set price slider bounds dynamically
```

#### 4. Category Hierarchy (Priority: MEDIUM)

```javascript
// Update Category model to support parent-child:

Category {
  _id: ObjectId
  name: String
  slug: String
  parent: ObjectId (ref: Category) // NEW
  level: Number // NEW: 0 = top-level, 1 = subcategory
  children: [ObjectId] // Virtual
  // ... existing fields
}

// Update GET /api/categories to support:
GET /api/categories?includeChildren=true

Response:
{
  success: true,
  data: [
    {
      _id: "cat001",
      name: "Face",
      slug: "face",
      level: 0,
      children: [
        { _id: "cat002", name: "Cleansers", slug: "cleansers", productCount: 24 },
        { _id: "cat003", name: "Toners", slug: "toners", productCount: 15 }
      ],
      productCount: 145
    }
  ]
}
```

#### 5. Unique Values Endpoints (Priority: LOW)

```javascript
// Helpful for building filter options dynamically

GET /api/products/brands
Response: { success: true, data: ["CeraVe", "The Ordinary", ...] }

GET /api/products/concerns
Response: { success: true, data: ["Acne", "Aging", "Dark Spots", ...] }

GET /api/products/skin-types
Response: { success: true, data: ["Oily", "Dry", "Combination", ...] }

// These aggregate unique values from products collection
```

#### 6. Search Enhancement (Priority: MEDIUM)

```javascript
// Update search to include:
GET /api/products?search=vitamin+c

Search in:
- product.name (existing)
- product.description (existing)
- product.keywords (existing)
- product.brand (NEW)
- product.ingredients (NEW)
- category.name (NEW - join)

// Full-text search with relevance scoring
```

### Backend Implementation Guide for Cursor

**If backend endpoints are missing:**

1. **Check existing backend structure:**
   ```bash
   # Cursor should scan:
   backend/src/infrastructure/database/mongodb/models/
   backend/src/presentation/http/routes/
   backend/src/presentation/http/controllers/
   backend/src/application/use-cases/
   ```

2. **Follow Clean Architecture pattern:**
   - Create model in `/models/`
   - Create use cases in `/application/use-cases/`
   - Create controller in `/controllers/`
   - Create routes in `/routes/`
   - Register routes in `app.js`

3. **Use existing patterns:**
   - Copy structure from `Product` or `Category` implementation
   - Follow same validation patterns
   - Use same error handling
   - Match response format

4. **Test endpoints:**
   ```bash
   # Cursor should test with curl or similar:
   curl http://localhost:5000/api/brands
   curl http://localhost:5000/api/products?brand=CeraVe
   ```

5. **Update admin panel:**
   - If Brand model is added, admin panel needs brand management
   - Check admin panel repo and add CRUD pages

---

## 🎓 DEVELOPMENT PROCESS

### Step-by-Step Process Cursor Must Follow

#### Step 1: Analysis (30 minutes)

```
1. Scan entire frontend codebase
2. Read FRONTEND_REVIEW_AND_INTEGRATION_PLAN.md
3. Read this document (TEEKA4_IMPLEMENTATION_GUIDE.md)
4. Understand backend API structure
5. Identify all files to modify
6. Identify all files to create
7. Identify all files to delete
8. Check backend for missing endpoints
9. Create detailed implementation plan
10. Present plan to user for approval
```

#### Step 2: Setup (15 minutes)

```
1. Create feature branch: git checkout -b teeka4-shop-implementation
2. Verify backend is running and accessible
3. Test key endpoints (products, categories, cart)
4. Check environment variables
5. Install any missing dependencies
6. Set up component folder structure
```

#### Step 3: Incremental Implementation

```
FOR EACH COMPONENT:
  1. Create component file
  2. Write TypeScript interfaces
  3. Implement component logic
  4. Add styling (Tailwind, match Teeka4)
  5. Add loading states
  6. Add error states
  7. Make responsive
  8. Test on mobile/tablet/desktop
  9. Commit with clear message

FOR EACH PAGE:
  1. Create page file
  2. Set up layout structure
  3. Integrate components
  4. Connect to backend API
  5. Add breadcrumb
  6. Add SEO metadata
  7. Add loading skeleton
  8. Add error handling
  9. Test all states (loading, error, empty, success)
  10. Test responsiveness
  11. Commit with clear message
```

#### Step 4: Integration Testing

```
1. Test all pages in sequence (user flow)
2. Test filters on shop page
3. Test sorting and pagination
4. Test add to cart from multiple pages
5. Test wishlist functionality
6. Test search
7. Test navigation and breadcrumbs
8. Test on different screen sizes
9. Check for console errors
10. Check network requests (no unnecessary calls)
```

#### Step 5: Performance Optimization

```
1. Optimize images (next/image)
2. Lazy load below-fold content
3. Debounce expensive operations
4. Cache API responses (if appropriate)
5. Code split large pages
6. Remove unused code
7. Minimize bundle size
8. Run Lighthouse audit
9. Fix performance issues
10. Achieve Lighthouse score > 90
```

#### Step 6: Final Review

```
1. Check against Teeka4 visually (side-by-side)
2. Verify all filters work
3. Verify all links work
4. Verify no duplicate code
5. Verify TypeScript strict passes
6. Verify responsive on all breakpoints
7. Verify frozen components untouched
8. Verify backend integration works
9. Verify SEO metadata present
10. Verify accessibility (a11y)
```

#### Step 7: Documentation

```
1. Update README.md
2. Document any new environment variables
3. Document component usage
4. Add code comments where needed
5. Update API integration docs
6. Create testing guide
7. Document known issues (if any)
```

#### Step 8: Commit & Push

```
1. Review all changes
2. Ensure no debug code left
3. Ensure no console.logs left
4. Clean commit history (squash if needed)
5. Write clear commit messages
6. Push to feature branch
7. Create pull request
8. Add detailed PR description
```

---

## ✅ ACCEPTANCE CRITERIA

### Visual Acceptance

- [ ] Shop page matches Teeka4 layout exactly
- [ ] Product cards match Teeka4 style exactly
- [ ] Filters match Teeka4 design exactly
- [ ] Typography matches Teeka4
- [ ] Spacing matches Teeka4
- [ ] Colors match Teeka4
- [ ] Hover effects match Teeka4
- [ ] Animations match Teeka4 smoothness
- [ ] Mobile layout matches Teeka4 mobile

### Functional Acceptance

- [ ] All filters work correctly
- [ ] Price slider works smoothly
- [ ] Sorting works correctly
- [ ] Pagination works correctly
- [ ] Add to cart works (real backend)
- [ ] Wishlist works (localStorage or backend)
- [ ] Search works correctly
- [ ] All breadcrumbs correct
- [ ] All links work (no broken links)
- [ ] Cart persists across sessions

### Responsive Acceptance

- [ ] Works on iPhone SE (375px)
- [ ] Works on standard mobile (390px)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1440px)
- [ ] Works on large desktop (1920px)
- [ ] No horizontal scroll on any device
- [ ] Touch targets minimum 44px
- [ ] Mobile filter drawer works smoothly

### Performance Acceptance

- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1
- [ ] No unnecessary API calls
- [ ] Images optimized
- [ ] Bundle size reasonable

### Code Quality Acceptance

- [ ] No code duplication
- [ ] DRY principle followed
- [ ] KISS principle followed
- [ ] SOLID principles followed
- [ ] TypeScript strict mode passes
- [ ] No 'any' types (except when necessary)
- [ ] All components reusable
- [ ] Clean Architecture followed

### Backend Integration Acceptance

- [ ] All data from backend (no hardcoded)
- [ ] Admin panel changes reflect on frontend
- [ ] Brand management works
- [ ] Category management works
- [ ] Product management works
- [ ] Homepage sections controlled by admin
- [ ] Images from Cloudinary load correctly
- [ ] Error handling works

### Frozen Component Acceptance

- [ ] Homepage hero banner untouched
- [ ] Homepage wholesale CTA untouched
- [ ] Homepage video CTA untouched
- [ ] Homepage featured products structure untouched
- [ ] Homepage categories structure untouched
- [ ] Only data fetching updated in frozen components

---

## 🎯 SUCCESS METRICS

### User Experience Metrics

```
Goal: Match or exceed Teeka4 UX
- Page load time: < 2 seconds
- Filter response time: < 500ms
- Search response time: < 300ms
- Add to cart time: < 200ms
- Smooth animations: 60fps
- Zero layout shift
- Zero console errors
```

### Business Metrics

```
Goal: Fully functional e-commerce
- Users can browse all products
- Users can filter effectively
- Users can add to cart
- Cart persists across sessions
- Users can complete checkout
- Admin can manage all content
- All product data from backend
```

### Technical Metrics

```
Goal: Production-ready code
- Code coverage: > 80% (if tests implemented)
- Lighthouse score: > 90
- TypeScript errors: 0
- ESLint warnings: 0
- Bundle size: < 500KB (gzipped)
- API response time: < 1s
- Image optimization: WebP, lazy loading
```

---

## 📞 SUPPORT & RESOURCES

### Reference Materials

1. **Teeka4.com** - Visual reference (match exactly)
2. **FRONTEND_REVIEW_AND_INTEGRATION_PLAN.md** - Backend integration guide
3. **Backend Repository** - API documentation
4. **Admin Panel Repository** - Content management reference
5. **Tailwind CSS Docs** - Styling reference
6. **Next.js 14 Docs** - Framework reference

### Backend API

```
Base URL: https://backendglownaturas.onrender.com
Timeout: 60 seconds (Render.com cold starts)
Auth: Bearer token in Authorization header
Endpoints: 65+ endpoints available
Documentation: See backend README.md
```

### Design Tokens

```
Colors: See tailwind.config.js
Fonts: Inter (body), Playfair Display (headings), Montserrat (accent)
Spacing: 4px base unit (Tailwind default)
Breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1536)
```

### Questions & Issues

If Cursor encounters issues:

1. **Missing Backend Endpoint:**
   - Check if it should exist
   - Create if following existing pattern
   - Document in PR

2. **Unclear Requirement:**
   - Ask user for clarification
   - Reference Teeka4 for visual guidance
   - Make best judgment if minor

3. **Performance Issue:**
   - Profile with React DevTools
   - Check network requests
   - Optimize images, code-split

4. **TypeScript Error:**
   - Check type definitions
   - Update types to match backend
   - Use strict mode

5. **Responsive Issue:**
   - Test on actual devices
   - Use browser DevTools
   - Check Tailwind breakpoints

---

## 🎉 FINAL NOTES

### Critical Reminders for Cursor

1. **NEVER modify frozen homepage components**
2. **ALWAYS match Teeka4 visually - pixel perfect**
3. **ALWAYS use backend data - no hardcoding**
4. **ALWAYS make responsive - mobile first**
5. **ALWAYS follow DRY - no duplication**
6. **ALWAYS use TypeScript strict mode**
7. **ALWAYS test on multiple screen sizes**
8. **ALWAYS handle loading and error states**
9. **ALWAYS optimize for performance**
10. **ALWAYS ask before major architectural changes**

### Quality Standards

This is a **professional, production-grade** implementation:
- Code quality: Facebook/Google level
- Visual quality: Pixel-perfect Teeka4 match
- UX quality: Smooth, fast, delightful
- Architecture: Clean, maintainable, scalable

### Timeline

**Estimated: 30-36 hours of focused work**
- Planning: 2 hours
- Implementation: 25 hours
- Testing: 4 hours
- Polish: 3 hours
- Review: 2 hours

### Success Definition

**Success = User says:** "This looks and works exactly like Teeka4, but with our branding and backend."

---

**Generated:** November 26, 2025
**Version:** 1.0
**Status:** Ready for Professional Implementation
**Developer:** Cursor AI (Execute with Excellence)

---

**NOW BEGIN IMPLEMENTATION. MAKE IT PERFECT. 🚀**