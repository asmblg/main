#!/bin/bash
sites=(
  "https://www.enterprisecommunity.org/"
  "https://www.atlantafed.org/"
  "https://www.gatech.edu/"
  "https://www.tampagov.net/"
  "https://www.claytoncountyga.gov/"
  "https://www.montgomerycountymd.gov/"
  "https://atlantaregional.org/"
  "https://avlf.org/"
  "https://www.neighborhoodnexus.org/"
  "https://www.bratislava.sk/"
)
for site in "${sites[@]}"; do
  echo "=== $site"
  curl -L -s -A "Mozilla/5.0" "$site" \
    | grep -Eo '(href|src)[[:space:]]*=[[:space:]]*"[^"]*\.(svg|png|webp)[^"]*"' \
    | grep -iv 'banner\|hero\|photo\|bg\|background\|slide\|news\|feature\|stock\|thumb\|section\|2024\|2025\|2026\|spritesheet\|icon_\|/icons/' \
    | head -6
done
