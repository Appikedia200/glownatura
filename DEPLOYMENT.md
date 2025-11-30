# 🚀 Deployment Guide - Glow Natura Frontend

## Current Deployment Status

**Platform:** Cloudflare Pages  
**Project Name:** glownatura  
**Latest Production URL:** https://b6eba447.glownatura.pages.dev  
**Custom Domain:** (To be configured in Cloudflare dashboard)

---

## ✅ How to Deploy (Manual Method)

### Step 1: Build the Application
```bash
npm run build
```

This creates the `out/` folder with optimized static files.

### Step 2: Deploy to Cloudflare Pages
```bash
npx wrangler pages deploy out --project-name=glownatura --branch=main
```

### Step 3: Verify Deployment
Check the deployment URL provided in the terminal output.

---

## 🔄 Auto-Deploy Setup (Recommended)

### Option 1: GitHub Integration (Easiest)

1. **Go to Cloudflare Dashboard:**
   - Navigate to: https://dash.cloudflare.com
   - Click: Pages → glownatura → Settings → Builds & deployments

2. **Connect GitHub Repository:**
   - Click "Connect to Git"
   - Select repository: `Appikedia200/glownatura`
   - Set production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `out`

3. **Environment Variables (Add in Cloudflare Dashboard):**
   ```
   NEXT_PUBLIC_API_URL=https://backendglownaturas.onrender.com
   NEXT_PUBLIC_SITE_NAME=Glow Natura
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=glownaturas
   ```

4. **Deploy:**
   - Every `git push` to `main` will auto-deploy! 🎉

---

## 📋 Deployment Checklist

Before deploying, ensure:

- [x] `npm run build` completes successfully
- [x] No TypeScript errors
- [x] No ESLint errors
- [x] Environment variables are set in `wrangler.toml`
- [x] `out/` folder is generated
- [x] Test locally with `npm run dev` first

---

## 🛠️ Troubleshooting

### Issue: "Failed to load homepage content"
**Cause:** API response handling error  
**Fix:** Check `src/lib/api/services/homepage.service.ts` - ensure no double `.data` access

### Issue: "Maintenance page still showing"
**Cause:** Old build cached in `out/` folder  
**Fix:** Delete `out/` folder and rebuild:
```bash
Remove-Item -Path ".\out" -Recurse -Force  # PowerShell
npm run build
```

### Issue: "Latest build failed" in Cloudflare
**Cause:** Cloudflare trying to use Workers deploy instead of Pages  
**Fix:** Use the correct command:
```bash
npx wrangler pages deploy out --project-name=glownatura --branch=main
```

### Issue: Changes not reflecting on live site
**Cause:** Cloudflare doesn't auto-deploy from Git pushes (unless GitHub integration is set up)  
**Fix:** Manually deploy after each Git push OR set up GitHub integration

---

## 🌐 Custom Domain Setup

1. **Go to Cloudflare Dashboard:**
   - Pages → glownatura → Custom domains

2. **Add Domain:**
   - Add your domain (e.g., `glownatura.com`)
   - Follow DNS setup instructions

3. **SSL:**
   - Cloudflare provides free SSL automatically

---

## 📊 Deployment History

View all deployments:
```bash
npx wrangler pages deployment list --project-name=glownatura
```

---

## 🎯 Production URLs

**Latest Deployment:** https://b6eba447.glownatura.pages.dev  
**Project Dashboard:** https://dash.cloudflare.com/e912f7e5a1f1adebcaeca1496ea76b4b/pages/view/glownatura

---

## 💡 Best Practices

1. **Always test locally** before deploying
2. **Run `npm run build`** to catch errors early
3. **Delete `out/` folder** before rebuilding for fresh deployments
4. **Set up GitHub integration** for auto-deployments
5. **Monitor Cloudflare dashboard** for build status
6. **Use environment variables** in Cloudflare dashboard, not in code

---

## 🔒 Security

- Never commit `.env.local` to Git
- All sensitive keys in Cloudflare environment variables
- API keys stored in backend, not frontend

---

**Last Updated:** November 30, 2025  
**Maintained By:** Glow Natura Development Team

