import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // Ensure we have a valid request object
    if (!event || !event.request || !event.request.url) {
      return new Response('Invalid request', { status: 400 })
    }

    const url = new URL(event.request.url)
    
    // Handle favicon.ico specifically to avoid KV errors
    if (url.pathname === '/favicon.ico') {
      return new Response('', { status: 404 })
    }
    
    // Handle Next.js routing - create a new URL for the modified path
    let targetPath = url.pathname
    if (targetPath === '/') {
      targetPath = '/index.html'
    } else if (!targetPath.includes('.') && !targetPath.endsWith('/')) {
      targetPath = targetPath + '/index.html'
    } else if (targetPath.endsWith('/')) {
      targetPath = targetPath + 'index.html'
    }
    
    // Create modified request with the target path
    const modifiedUrl = new URL(event.request.url)
    modifiedUrl.pathname = targetPath
    
    const modifiedRequest = new Request(modifiedUrl.toString(), {
      method: event.request.method,
      headers: event.request.headers,
      body: event.request.body,
    })
    
    return await getAssetFromKV(event, {
      request: modifiedRequest,
    })
  } catch (e) {
    console.error('Worker error:', e)
    
    // Handle 404s and other errors
    if (e.status === 404 || (e.message && e.message.includes('could not find'))) {
      try {
        // Try to serve index.html for SPA behavior
        const indexUrl = new URL(event.request.url)
        indexUrl.pathname = '/index.html'
        const indexRequest = new Request(indexUrl.toString(), {
          method: event.request.method,
          headers: event.request.headers,
        })
        
        return await getAssetFromKV(event, {
          request: indexRequest,
        })
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError)
        return new Response('Page not found', { 
          status: 404,
          headers: { 'Content-Type': 'text/plain' }
        })
      }
    }
    
    return new Response(`Error: ${e.message || 'Unknown error'}`, { 
      status: e.status || 500,
      headers: { 'Content-Type': 'text/plain' }
    })
  }
} 