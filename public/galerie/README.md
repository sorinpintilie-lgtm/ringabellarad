# Gallery Images Backup System

## Current Working Gallery
This directory contains the 12 active gallery images currently displayed on the website.

## Backup Directory
The `backup/` subdirectory contains a complete backup of all gallery images, including thumbnails.

## File Structure
- Main images: Full-size images for modal viewing
- Thumbnail images: Smaller versions with " - Copy" suffix for grid display
- `../Gallery.js.backup`: Backup of the gallery configuration file

## Recovery Instructions
If images are accidentally deleted:
1. Copy files from `backup/` back to this directory
2. Restore `../Gallery.js.backup` to `../Gallery.js` if needed

## Gallery Configuration
The gallery displays exactly 12 images with proper thumbnails. All images are referenced in `src/pages/Gallery.js`.