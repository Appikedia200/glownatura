# GLOW NATURA Image Setup Guide

This guide explains how to set up images for your professional GLOW NATURA skincare eCommerce website.

## 📂 Image Folder Structure

```
public/images/
├── logo/               # Brand logos and icons
├── banners/           # Promotional slider banners (4 banners)
├── products/          # Product photography (16 products)
├── collections/       # Category thumbnails + Hero image
└── ui/               # Icons, patterns, decorative elements
```

## 🎯 Required Images for Full Website

### 1. Hero Section Image (1 image)
- **Path**: `/images/collections/Start-your-journey.png`
- **Size**: 1920x600px (or similar landscape ratio)
- **Content**: Your actual "Start Your Skin Journey" banner image
- **Note**: This should match the style you showed in your sample images

### 2. Authorized Reseller Banners (4 images)
- **Paths**: 
  - `/images/banners/reseller-1.jpg`
  - `/images/banners/reseller-2.jpg`
  - `/images/banners/reseller-3.jpg`
  - `/images/banners/reseller-4.jpg`
- **Size**: 1920x500px each
- **Style**: **Thick solid background colors** with **product reflections**
- **Content**: 3 products per banner, slanted arrangement like your samples
- **Colors**: Different background colors (yellow, green, purple, blue)

### 3. Collection Thumbnails (4 images)
- **Paths**:
  - `/images/collections/bath-body.jpg`
  - `/images/collections/asian-brands.jpg`
  - `/images/collections/sunscreens.jpg`
  - `/images/collections/korean-skincare.jpg`
- **Size**: 400x400px each
- **Content**: Category representative images

### 4. Product Images (16 products)

#### Featured Items (4 products)
- `/images/products/skeenlogic-cleanser.jpg` - Skeenlogic AHA/BHA Cleanser
- `/images/products/kabazel-azelaic.jpg` - Kabazel Azelaic Acid Gel
- `/images/products/kabinone-hydroquinone.jpg` - Kabinone Hydroquinone Cream
- `/images/products/timeless-vitamin-c.jpg` - Timeless Vitamin C Serum

#### Back in Stock (4 products)
- `/images/products/good-molecules-serum.jpg` - Good Molecules Discoloration Serum
- `/images/products/ordinary-glycolic.jpg` - The Ordinary Glycolic Acid Toner
- `/images/products/anua-peach-serum.jpg` - Anua Peach Niacin Serum
- `/images/products/koji-white-soap.jpg` - Koji White Kojic Acid Soap

#### New Arrivals (4 products)
- `/images/products/medix-body-cream.jpg` - Medix Niacinamide Body Cream
- `/images/products/medix-retinol-cream.jpg` - Medix Retinol Body Cream
- `/images/products/skintivity-sunscreen.jpg` - Skintivity Physical Sunscreen
- `/images/products/skintivity-mineral.jpg` - Skintivity Mineral Sunscreen

#### Best Sellers (4 products)
- `/images/products/dr-teals-body-wash.jpg` - Dr Teal's Glow Body Wash
- `/images/products/missha-sun-gel.jpg` - Missha Aqua Sun Gel
- `/images/products/dr-teals-lotion.jpg` - Dr Teal's Vitamin C Lotion
- `/images/products/balance-vitamin-c.jpg` - Balance Vitamin C Serum

**Product Image Requirements:**
- **Size**: 600x600px
- **Format**: JPG or PNG
- **Quality**: High-resolution, professional product photography
- **Background**: Clean, preferably white or neutral

## 🎨 Special Banner Design Requirements

### Authorized Reseller Banners
Based on your sample images, these banners should have:

1. **Thick Solid Background Colors** (not photos)
   - Banner 1: Yellow/Orange gradient
   - Banner 2: Green/Teal gradient  
   - Banner 3: Purple/Pink gradient
   - Banner 4: Blue/Cyan gradient

2. **Product Arrangement**
   - 3 products per banner
   - Slanted/rotated placement
   - Different heights for visual interest

3. **Reflection Effects**
   - Products should have mirror reflections below them
   - Reflections should be semi-transparent
   - Blurred effect on reflections

4. **Style Notes**
   - Clean, professional product photography
   - Consistent lighting across all products
   - Products should "float" above the background

## 🚀 Quick Start

1. **Save your hero image as**: `Start-your-journey.png` in `/collections/`
2. **Create 4 banner images** with thick backgrounds and reflections  
3. **Add product photos** following the exact naming convention
4. **Add collection thumbnails** for categories
5. **Test website** - images should load immediately!

## 🔄 Current Placeholder Designs

The website already includes beautiful placeholder designs:
- **Hero Section**: Uses your `Start-your-journey.png` when available
- **Banners**: Thick gradient backgrounds with 3D product mockups and reflections
- **Products**: Elegant fallbacks with gradient backgrounds
- **Collections**: Category-specific styled placeholders

## ✅ Priority Order

1. **Hero Image** - `Start-your-journey.png` (Most important!)
2. **Product Photos** - All 16 product images
3. **Banner Images** - 4 reseller banners with reflections
4. **Collection Images** - 4 category thumbnails

## 📝 Technical Notes

- Hero image path changed to `/collections/` folder
- Banner system now supports 4 banners (was 3)
- Reflection effects are built into the banner component
- All images auto-optimized by Next.js
- Fallbacks ensure site looks professional before images are added

Your GLOW NATURA website will look absolutely stunning once these images are in place! The reflection effects and thick backgrounds will match perfectly with your sample images. 🌟 