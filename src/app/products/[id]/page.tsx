import { Suspense } from 'react'
import ProductDetailClient from './client'

// Dynamic params will be handled at runtime
export async function generateStaticParams() {
  // Return empty array - products will be generated dynamically
  return []
}

// Enable dynamic rendering
export const dynamicParams = true

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <ProductDetailClient productId={params.id} />
    </Suspense>
  )
}
