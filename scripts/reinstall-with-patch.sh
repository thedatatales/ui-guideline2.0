#!/bin/bash

# ============================================================================
# Reinstall Script with Theme Patch
# ============================================================================
# This script:
# 1. Cleans build artifacts and node_modules/@enttribe
# 2. Cleans npm cache
# 3. Removes package-lock.json
# 4. Reinstalls dependencies
# 5. Applies theme patch
# 6. Starts the dev server
# ============================================================================

set -e  # Exit on error

echo "🧹 Cleaning build artifacts..."
rm -rf .nx
rm -rf .angular
rm -rf node_modules/@enttribe

echo "🧹 Cleaning npm cache..."
npm cache clean --force

echo "🧹 Removing package-lock.json and node_modules..."
rm -f package-lock.json
rm -rf node_modules

echo "🧹 Clearing npm tracker state..."
rm -rf ~/.npm/_logs
rm -rf ~/.npm/_cacache

echo "📦 Installing dependencies..."
npm install --force --legacy-peer-deps

echo "🔧 Applying theme patch..."
if [ -f "patches/@enttribe+themes-gx-theme+1.0.0.patch" ]; then
  cd node_modules/@enttribe/themes-gx-theme
  patch -p1 < ../../../patches/@enttribe+themes-gx-theme+1.0.0.patch
  cd ../../..
  echo "✅ Patch applied successfully!"
else
  echo "⚠️  Warning: Patch file not found at patches/@enttribe+themes-gx-theme+1.0.0.patch"
fi

echo "🚀 Starting dev server..."
npm run start
