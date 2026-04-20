# Cloudflare Pages Setup Guide

## Quick Setup (via Cloudflare Dashboard)

1. **Go to Cloudflare Pages**
   - Visit [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign in or create account

2. **Create a new project**
   - Click "Create a project"
   - Connect to Git provider (GitHub)
   - Select your repository

3. **Configure build settings**
   - **Framework preset**: None (or Docusaurus if available)
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
   - **Root directory**: `docs-website`
   - **Node.js version**: 18

4. **Environment variables** (if needed)
   - None required for basic setup

5. **Deploy**
   - Click "Save and Deploy"
   - First build will start automatically

## Custom Domain Setup

1. **In Cloudflare Pages dashboard**
   - Go to your project
   - Click "Custom domains" tab
   - Add `docs.vros.cat`

2. **DNS Configuration**
   - Cloudflare will provide DNS records
   - Add CNAME record pointing to your `.pages.dev` domain

## GitHub Actions Setup (Optional)

If you want to use GitHub Actions instead:

1. **Get Cloudflare API Token**
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create token with "Cloudflare Pages:Edit" permissions

2. **Get Account ID**
   - Find in Cloudflare dashboard sidebar

3. **Add GitHub Secrets**
   ```
   CLOUDFLARE_API_TOKEN: your-api-token
   CLOUDFLARE_ACCOUNT_ID: your-account-id
   ```

## Manual Deployment (CLI)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
cd docs-website
npm run build
wrangler pages deploy build --project-name=catnet --branch=main
```

## Features You Get

- ✅ Global CDN (300+ locations)
- ✅ Automatic SSL certificates
- ✅ Preview deployments for PRs
- ✅ Analytics included
- ✅ Zero cold starts
- ✅ Unlimited bandwidth (free tier)
- ✅ Custom domain support

## Build Settings Summary

```yaml
Framework: None
Build command: npm run build
Output directory: build
Root directory: docs-website
Node version: 18
```
