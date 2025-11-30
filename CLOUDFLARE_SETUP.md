# 🚀 Cloudflare Pages Setup for Next.js

## ✅ CLOUDFLARE NOW SUPPORTS NEXT.JS FULLY

Cloudflare Pages supports:
- ✅ Next.js 13/14 App Router
- ✅ Server Components
- ✅ Client Components  
- ✅ API Routes (runs on Cloudflare Workers)
- ✅ Middleware
- ✅ Dynamic Routes (`[slug]`, `[id]`, etc.)
- ✅ ISR (Incremental Static Regeneration)
- ✅ SSR (Server-Side Rendering)

**NO CONVERSION NEEDED!** Deploy Next.js as-is.

---

## 📋 How to Deploy (GitHub Integration)

### Step 1: Connect GitHub to Cloudflare Pages

1. Go to: https://dash.cloudflare.com
2. Click: **Pages** → **Create a project**
3. Click: **Connect to Git**
4. Select: **GitHub**
5. Authorize Cloudflare to access your GitHub
6. Select repository: `Appikedia200/glownatura`

### Step 2: Configure Build Settings

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (leave blank or /)
Node version: 22.x
```

### Step 3: Environment Variables

Add these in Cloudflare Pages dashboard:

```
NEXT_PUBLIC_API_URL=https://backendglownaturas.onrender.com
NEXT_PUBLIC_SITE_NAME=Glow Natura
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=glownaturas
NODE_VERSION=22
```

### Step 4: Deploy

- Click **Save and Deploy**
- Cloudflare will:
  1. Clone your repo
  2. Run `npm install`
  3. Run `npm run build`  
  4. Deploy to Cloudflare Workers
  5. Your site will be live! 🎉

---

## 🔄 Auto-Deploy

Every time you push to `main` branch:
- GitHub triggers Cloudflare
- Cloudflare rebuilds automatically
- New version goes live

No manual deployment needed!

---

## 🌐 Custom Domain

1. Go to: Pages → glownatura → **Custom domains**
2. Click: **Set up a custom domain**
3. Enter: `glownatura.com` (or your domain)
4. Follow DNS instructions
5. SSL is automatic (free)

---

## ✅ Current Status

- ✅ All fixes completed (API, maintenance removed, CTAs working)
- ✅ Build passing locally (16 routes, 3 dynamic)
- ✅ Ready for Cloudflare Pages deployment
- ✅ No code changes needed - Cloudflare handles everything

---

## 🚨 Important Notes

**DO NOT:**
- ❌ Convert to static export (`output: 'export'`)
- ❌ Remove dynamic routes
- ❌ Change routing to query parameters
- ❌ Try to deploy `.next` folder manually

**Cloudflare handles all of this automatically!**

---

## 📞 If Deployment Fails

Check Cloudflare build logs for:
1. **Build command errors** → Ensure `npm run build` works locally
2. **Missing environment variables** → Add them in dashboard
3. **Node version** → Set to `22` in environment variables
4. **Wrong output directory** → Should be `.next` not `out`

---

**Last Updated:** November 30, 2025  
**Status:** Ready to deploy via GitHub integration

