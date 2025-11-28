import { Suspense } from 'react'
import FaceSubcategoryClient from './client'

// Pre-generate all face subcategory paths
export async function generateStaticParams() {
  return [
    { subcategory: 'cleansers' },
    { subcategory: 'toners' },
    { subcategory: 'serums' },
    { subcategory: 'moisturizers' },
    { subcategory: 'sunscreen' },
    { subcategory: 'face-masks' },
    { subcategory: 'eye-care' },
    { subcategory: 'lip-care' },
  ]
}

export default function FaceSubcategoryPage({ params }: { params: { subcategory: string } }) {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </main>
    }>
      <FaceSubcategoryClient subcategory={params.subcategory} />
    </Suspense>
  )
}
