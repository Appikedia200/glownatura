import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    const url = new URL(event.request.url)
    
    // Handle Next.js routing
    if (url.pathname === '/') {
      url.pathname = '/index.html'
    } else if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
      url.pathname = url.pathname + '/index.html'
    } else if (url.pathname.endsWith('/')) {
      url.pathname = url.pathname + 'index.html'
    }
    
    const modifiedRequest = new Request(url.toString(), event.request)
    
    return await getAssetFromKV(event, {
      request: modifiedRequest,
    })
  } catch (e) {
    // Handle 404s
    if (e.status === 404) {
      try {
        // Try to serve 404.html
        const notFoundUrl = new URL(event.request.url)
        notFoundUrl.pathname = '/404.html'
        const notFoundRequest = new Request(notFoundUrl.toString(), event.request)
        
        return await getAssetFromKV(event, {
          request: notFoundRequest,
        })
      } catch {
        // Fallback to index.html for SPA behavior
        const indexUrl = new URL(event.request.url)
        indexUrl.pathname = '/index.html'
        const indexRequest = new Request(indexUrl.toString(), event.request)
        
        return await getAssetFromKV(event, {
          request: indexRequest,
        })
      }
    }
    
    return new Response(`Error: ${e.message}`, { 
      status: e.status || 500,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
} 