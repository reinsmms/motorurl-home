// scripts/nav-data.js
// True nested tree structure.
// Node types:
//  - { type:'branch', id, title, href?, openByDefault?, children:[...] }
//  - { type:'link', title, href, external?, galleryPath?, showGalleryLink? }

window.MOTORURL_NAV = [
  {
    "type": "branch",
    "id": "printing",
    "title": "3D Printing",
    "openByDefault": true,
    "href": "pages/3d-printing.html",
    "children": [
      {
        "type": "link",
        "title": "Printing Gallery",
        "href": "pages/gallery-index.html",
        "showGalleryLink": false
      },
      {
        "type": "branch",
        "id": "software",
        "title": "CAD and Slicer Software",
        "openByDefault": true,
        "children": [
          {
            "type": "link",
            "title": "FreeCAD for Beginners",
            "href": "https://freecad.motorurl.com",
            "external": true
          },
          {
            "type": "link",
            "title": "Bambu Studio for Beginners",
            "href": "https://bambu.motorurl.com",
            "external": true
          }
        ]
      },
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
