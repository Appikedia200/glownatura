import { Suspense } from 'react'
import BrandPageClient from './client'

// Dynamic params will be handled at runtime
export async function generateStaticParams() {
  // Return empty array - brands will be generated dynamically
  return []
}

// Enable dynamic rendering
export const dynamicParams = true

export default function BrandPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <BrandPageClient brandSlug={params.slug} />
    </Suspense>
  )
}
