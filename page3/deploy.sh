#!/bin/bash

echo "Deploying Laloaggro Portfolio..."

# Verify Git config
if [ "$(git config --get user.name)" != "Laloaggro" ]; then
    git config --global user.name "Laloaggro"
    git config --global user.email "laloaggro@gmail.com"
fi

# Ensure we're on master branch
git checkout master || git checkout -b master

# Build project
cd page3
bash scripts/build.sh
cd ..

# Deploy
git add .
git commit -m "Portfolio update: $(date '+%Y-%m-%d %H:%M:%S')"
git push -u origin master

echo "Deployment completed - https://laloaggro.github.io"
