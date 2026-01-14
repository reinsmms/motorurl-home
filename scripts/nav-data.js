// scripts/nav-data.js
// Add/maintain nav structure here.

window.MOTORURL_NAV = [
  // ===== Site =====
  {
    id: "site",
    title: "Site",
    openByDefault: true,
    items: [
      { title: "Galleries", href: "pages/gallery-index.html", showGalleryLink: false }
    ]
  },

  // ===== Set 1 =====
  {
    id: "set1",
    title: "Set 1",
    openByDefault: true,
    items: [
      { title: "Page 1", href: "pages/page1.html", galleryPath: "assets/example-subject", showGalleryLink: true },
      { title: "Page 2", href: "pages/page2.html", showGalleryLink: false }
    ]
  },

  // ===== Set 2 =====
  {
    id: "set2",
    title: "Set 2",
    openByDefault: true,
    items: [
      { title: "Page 3", href: "pages/page3.html" },
      { title: "Page 4", href: "pages/page4.html" }
    ]
  }
];
