#!/bin/bash

# Build the documentation site
echo "Building documentation site..."
npm run build

# The build output will be in the 'build' directory
echo "Build complete! Output is in ./build/"

# For deployment to docs.vros.cat, you would typically:
# 1. Copy the build directory to your web server
# 2. Configure nginx/apache to serve from that directory
# 3. Set up SSL certificates for https://docs.vros.cat

echo "To deploy:"
echo "1. Copy the 'build' directory to your web server"
echo "2. Configure your web server to serve the static files"
echo "3. Point docs.vros.cat DNS to your server"