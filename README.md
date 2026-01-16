# motorurl.com Home Starter (v4)

## What you asked for (confirmed)
- Default media types are fine (images/videos handled by generator)
- No autoplay for video in lightbox
- Gallery Index page that lists subject folders

## How to keep galleries updated
After adding files under /assets, run:

  node scripts/generate-manifests.js

This generates:
- /assets/index.json (for `pages/gallery-index.html`)
- /assets/<subject>/manifest.json (for each gallery)

## Folder rules
- Photos: /assets/<subject>/
- Videos: /assets/<subject>/videos/
- Mixed together and sorted by filename.
