@echo off
REM Deploy script for Cloudflare Pages (Windows)
REM Project: catnet

echo Deploying documentation to Cloudflare Pages...

REM Change to docs-website directory
cd /d "%~dp0"

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Build the documentation site
echo Building documentation site...
call npm run build

REM Check if build was successful
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! Please fix errors and try again.
    exit /b 1
)

REM Deploy to Cloudflare Pages
echo Deploying to Cloudflare Pages (project: catnet)...
call npx wrangler pages deploy build --project-name=catnet --branch=main

REM Check deployment status
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Deployment successful!
    echo Check the deployment URL printed above (pages.dev) and/or the custom domain: https://docs.vros.cat
) else (
    echo.
    echo Deployment failed! Please check your Cloudflare credentials.
    echo Run 'wrangler login' if you haven't authenticated yet.
)

pause
