#!/bin/bash

echo "Building Laloaggro Portfolio..."

# Create dist structure
mkdir -p dist/{styles,scripts,assets}

# Copy HTML files
cp ../index.html dist/

# Copy and process CSS
if [ -d "../styles" ]; then
    cp -r ../styles/* dist/styles/
fi

# Copy and process JS
if [ -d "../scripts" ]; then
    cp -r ../scripts/* dist/scripts/
fi

# Copy assets
if [ -d "../assets" ]; then
    cp -r ../assets/* dist/assets/
fi

echo "Build completed in dist/"
