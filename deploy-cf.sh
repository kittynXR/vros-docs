#!/bin/bash

# Deploy script for Cloudflare Pages
# Project: catnet

echo "🚀 Deploying documentation to Cloudflare Pages..."

# Change to docs-website directory
cd "$(dirname "$0")"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the documentation site
echo "🔨 Building documentation site..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

# Deploy to Cloudflare Pages
echo "☁️  Deploying to Cloudflare Pages (project: catnet)..."
npx wrangler pages deploy build --project-name=catnet --branch=main

# Check deployment status
if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Check the deployment URL printed above (pages.dev) and/or the custom domain: https://docs.vros.cat"
else
    echo "❌ Deployment failed! Please check your Cloudflare credentials."      
    echo "💡 Run 'wrangler login' if you haven't authenticated yet."
fi
