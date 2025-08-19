import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request, env, ctx) {
    try {
      // Serve static assets from KV
      return await getAssetFromKV(request, {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        mapRequestToAsset: (req) => {
          const url = new URL(req.url)
          
          // Handle Next.js static export routing
          if (url.pathname === '/') {
            url.pathname = '/index.html'
          } else if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
            url.pathname = url.pathname + '/index.html'
          } else if (url.pathname.endsWith('/')) {
            url.pathname = url.pathname + 'index.html'
          }
          
          return new Request(url.toString(), req)
        },
      })
    } catch (e) {
      // If asset not found, serve 404 page or redirect to home
      if (e.status === 404) {
        try {
          return await getAssetFromKV(request, {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
            mapRequestToAsset: () => new Request(new URL('/404.html', request.url).toString(), request)
          })
        } catch {
          // Fallback to index.html for SPA behavior
          return await getAssetFromKV(request, {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
            mapRequestToAsset: () => new Request(new URL('/index.html', request.url).toString(), request)
          })
        }
      }
      
      return new Response('Error: ' + e.message, { status: 500 })
    }
  }
} 