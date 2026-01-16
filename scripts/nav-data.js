// scripts/nav-data.js
// True nested tree structure.
// Node types:
//  - { type:'branch', id, title, href?, openByDefault?, children:[...] }
//  - { type:'link', title, href, galleryPath?, showGalleryLink? }

window.MOTORURL_NAV = [
  {
    "type": "branch",
    "id": "site",
    "title": "Site",
    "openByDefault": true,
    "href": "pages/site.html",
    "children": [
      {
        "type": "link",
        "title": "Galleries",
        "href": "pages/gallery-index.html",
        "showGalleryLink": false
      }
    ]
  },
  {
    "type": "branch",
    "id": "printing",
    "title": "3D Printing",
    "openByDefault": true,
    "href": "pages/3d-printing.html",
    "children": [
      {
        "type": "branch",
        "id": "filament",
        "title": "Filament",
        "openByDefault": true,
        "href": "pages/filament.html",
        "children": [
          {
            "type": "link",
            "title": "Material Resistance - Quick Reference",
            "href": "pages/material-resistance-quick-reference.html",
            "showGalleryLink": false
          }
        ]
      }
    ]
  }
];
