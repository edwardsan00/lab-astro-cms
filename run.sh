#!/bin/bash

# Function to show usage
show_usage() {
  echo "Usage: ./run.sh [command]"
  echo ""
  echo "Commands:"
  echo "  install      Install all dependencies"
  echo "  dev          Run the development server"
  echo "  build        Build all packages and apps"
  echo "  build:ui     Build only the UI package"
  echo "  build:portal Build only the portal app"
  echo "  preview      Preview the production build"
  echo ""
}

# Check for command
if [ $# -eq 0 ]; then
  show_usage
  exit 1
fi

command=$1

# Run the appropriate command
case $command in
  install)
    echo "Installing dependencies..."
    npm install
    echo "Building UI package..."
    cd packages/ui && npm run build
    cd ../..
    ;;
  dev)
    echo "Making sure UI is built..."
    cd packages/ui && npm run build
    cd ../..
    echo "Starting development server..."
    cd app/portal && npm run dev
    ;;
  build)
    echo "Building all packages and apps..."
    cd packages/ui && npm run build
    cd ../../app/portal && npm run build
    ;;
  build:ui)
    echo "Building UI package..."
    cd packages/ui && npm run build
    ;;
  build:portal)
    echo "Building portal app..."
    cd app/portal && npm run build
    ;;
  preview)
    echo "Previewing production build..."
    cd app/portal && npm run preview
    ;;
  *)
    echo "Unknown command: $command"
    show_usage
    exit 1
    ;;
esac 