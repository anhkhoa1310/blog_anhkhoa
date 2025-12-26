#!/bin/bash

echo "Installing dependencies..."

# Install dependencies
npm install

# Install Next.js types
npm install --save-dev @types/react @types/react-dom

echo "Dependencies installed successfully!"
echo "Run 'npm run dev' to start the development server"
