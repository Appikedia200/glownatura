#!/bin/bash
# Cloudflare Pages Build Script for Next.js Static Export

echo "🚀 Starting build process..."

# Install dependencies
npm ci

# Build the Next.js app
npm run build

echo "✅ Build complete! Output directory: ./out"

