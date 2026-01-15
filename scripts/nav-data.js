// scripts/nav-data.js
// Add/maintain nav structure here.
// Each top-level branch can have an optional `href` that loads its category page.

window.MOTORURL_NAV = [
  {
    "id": "site",
    "title": "Site",
    "openByDefault": true,
    "href": "pages/site.html",
    "items": [
      {
        "title": "Galleries",
        "href": "pages/gallery-index.html",
        "showGalleryLink": false
      }
    ]
  },
  {
    "id": "printing",
    "title": "3D Printing",
    "openByDefault": true,
    "href": "pages/3d-printing.html",
    "items": [
      {
        "title": "Filament",
        "href": "pages/filament.html",
        "showGalleryLink": false
      },
      {
        "title": "Material Resistance - Quick Reference",
        "href": "pages/material-resistance-quick-reference.html",
        "showGalleryLink": false
      }
    ]
  }
];
