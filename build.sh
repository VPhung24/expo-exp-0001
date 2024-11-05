#!/bin/bash

OUTPUT_DIR="dist"

rm -rf dist && pnpm --filter web build

mkdir -p $OUTPUT_DIR
mkdir -p $OUTPUT_DIR/static
mkdir -p $OUTPUT_DIR/_next/

cp -R web/.next/static $OUTPUT_DIR/_next/
cp -R web/.next/server/pages/* $OUTPUT_DIR/
cp -R web/public/* $OUTPUT_DIR/
cp -R web/public/* $OUTPUT_DIR/_next/

echo "Build complete in $OUTPUT_DIR."