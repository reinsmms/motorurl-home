// scripts/nav-data.js

window.MOTORURL_NAV = [
  {
    "type": "branch",
    "id": "making-fabrication",
    "title": "Making & Fabrication",
    "href": "pages/making-and-fabrication.html",
    "openByDefault": true,
    "children": [
      {
        "type": "branch",
        "id": "printers",
        "title": "Printers",
        "href": "pages/printers.html",
        "openByDefault": false,
        "children": [
          {
            "type": "link",
            "title": "Printing Overview",
            "href": "pages/printing-overview.html"
          },
          {
            "type": "link",
            "title": "Printing Notes",
            "href": "pages/printing-notes.html"
          },
          {
            "type": "link",
            "title": "Printing Gallery",
            "href": "pages/gallery-index.html",
            "showGalleryLink": false
          }
        ]
      },
      {
        "type": "branch",
        "id": "operations",
        "title": "Operations",
        "href": "pages/operations.html",
        "openByDefault": false,
        "children": [
          {
            "type": "branch",
            "id": "bambu-a1-operations",
            "title": "Bambu A1 Operations",
            "href": "pages/bambu-a1-operations.html",
            "openByDefault": true,
            "children": [
              {
                "type": "branch",
                "id": "a1-print-recovery",
                "title": "Print Recovery & Interruption Handling",
                "openByDefault": true,
                "children": [
                  {
                    "type": "link",
                    "title": "Recovering from Filament Runout When the A1 Is Already Paused",
                    "href": "pages/a1-recovering-from-filament-runout-while-paused.html"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "branch",
        "id": "filament",
        "title": "Filament",
        "openByDefault": false,
        "href": "pages/filament.html",
        "children": [
          {
            "type": "link",
            "title": "Filament (Overview)",
            "href": "pages/filament.html"
          },
          {
            "type": "branch",
            "id": "filament-basics",
            "title": "Filament Basics & Properties",
            "children": [
              {
                "type": "link",
                "title": "Filament Basics and Properties",
                "href": "pages/filament-basics-and-properties.html"
              }
            ]
          },
          {
            "type": "branch",
            "id": "filament-care",
            "title": "Filament Preparation & Care",
            "children": [
              {
                "type": "link",
                "title": "Filament Preparation and Care",
                "href": "pages/filament-preparation-and-care.html"
              },
              {
                "type": "link",
                "title": "Filament Drying and Storage",
                "href": "pages/filament-drying-and-storage.html"
              },
              {
                "type": "link",
                "title": "Filament Handling and Recovery",
                "href": "pages/filament-handling-and-recovery.html"
              }
            ]
          },
          {
            "type": "branch",
            "id": "filament-appearance",
            "title": "Filament Finishes & Appearance",
            "children": [
              {
                "type": "link",
                "title": "Filament Finishes and Appearance",
                "href": "pages/filament-finishes-and-appearance.html"
              },
              {
                "type": "link",
                "title": "Filament Finishes and Styles",
                "href": "pages/filament-finishes-and-styles.html"
              },
              {
                "type": "link",
                "title": "Filament Colors Popularity Rankings",
                "href": "pages/filament-colors-popularity-rankings.html"
              }
            ]
          },
          {
            "type": "branch",
            "id": "filament-buying",
            "title": "Filament Selection & Buying",
            "children": [
              {
                "type": "link",
                "title": "Filament Selection and Buying",
                "href": "pages/filament-selection-and-buying.html"
              },
              {
                "type": "link",
                "title": "Where to Buy Filament",
                "href": "pages/where-to-buy-filament.html"
              }
            ]
          },
          {
            "type": "branch",
            "id": "filament-reference",
            "title": "Filament Reference Tables",
            "children": [
              {
                "type": "link",
                "title": "Filament Reference Tables",
                "href": "pages/filament-reference-tables.html"
              },
              {
                "type": "link",
                "title": "Filament Brands Quality Ranking",
                "href": "pages/filament-brands-quality-ranking.html"
              },
              {
                "type": "link",
                "title": "Filament Colors Popularity Rankings",
                "href": "pages/filament-colors-popularity-rankings.html"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "branch",
    "id": "modeling-geometry",
    "title": "Modeling & Geometry",
    "href": "pages/modeling-and-geometry.html",
    "openByDefault": true,
    "children": [
      {
        "type": "branch",
        "id": "geometry-modeling",
        "title": "Geometry & Modeling Concepts",
        "openByDefault": false,
        "href": "pages/geometry-modeling-concepts.html",
        "children": [
          {
            "type": "link",
            "title": "Torus and Sweep — Definitions & Uses",
            "href": "pages/torus-and-sweep.html",
            "showGalleryLink": false
          },
          {
            "type": "link",
            "title": "Seal Math — Torus & Gasket Sizing",
            "href": "pages/seal-math-torus-gasket-sizing.html",
            "showGalleryLink": false
          }
        ]
      },
      {
        "type": "link",
        "title": "Tolerances & Fit",
        "href": "pages/tolerances-and-fit.html"
      },
      {
        "type": "link",
        "title": "Units, Scale, Precision",
        "href": "pages/units-scale-precision.html"
      }
    ]
  },
  {
    "type": "branch",
    "id": "industry-insights",
    "title": "Industry Insights",
    "href": "pages/industry-insights.html",
    "openByDefault": true,
    "children": [
      {
        "type": "link",
        "title": "History of 3D Printing",
        "href": "pages/history-of-3d-printing.html"
      },
      {
        "type": "link",
        "title": "Market Cycles & Availability",
        "href": "pages/market-cycles-and-availability.html"
      },
      {
        "type": "link",
        "title": "Hardware Ecosystems (Open vs Closed)",
        "href": "pages/hardware-ecosystems.html"
      }
    ]
  },
  {
    "type": "branch",
    "id": "software",
    "title": "CAD/Slicing Software Manuals",
    "openByDefault": true,
    "children": [
      {
        "type": "link",
        "title": "freecad.motorurl.com",
        "href": "https://freecad.motorurl.com",
        "external": true
      },
      {
        "type": "link",
        "title": "bambu-studio.motorurl.com",
        "href": "https://bambu-studio.motorurl.com",
        "external": true
      }
    ]
  }
];
