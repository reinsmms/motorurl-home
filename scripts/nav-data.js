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
        "title": "Page 1",
        "href": "pages/page1.html",
        "galleryPath": "assets/example-subject",
        "showGalleryLink": true
      },
      {
        "title": "Page 2",
        "href": "pages/page2.html",
        "showGalleryLink": false
      },
      {
        "title": "Material Resistance - Quick Reference",
        "href": "pages/material-resistance-quick-reference.html",
        "showGalleryLink": false
      }
    ]
  },
  {
    "id": "set2",
    "title": "Set 2",
    "openByDefault": true,
    "href": "pages/set-2.html",
    "items": [
      {
        "title": "Page 3",
        "href": "pages/page3.html"
      },
      {
        "title": "Page 4",
        "href": "pages/page4.html"
      }
    ]
  }
];
