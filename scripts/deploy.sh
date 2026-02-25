#!/bin/bash
set -e

echo "Starting deployment to GitHub Pages..."

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
  echo "Build failed: 'out' directory not found"
  exit 1
fi

# Deploy to gh-pages branch using gh-pages package
echo "Deploying to GitHub Pages..."
npx gh-pages -d out -t

echo "Deployment complete!"
echo "Your site will be available at: https://[username].github.io/next-ads-sample-4/"
echo "Note: It may take a few minutes for changes to appear."
