
// Navigate iframe to a page and force the content to start at the top.
// Without this, the iframe can keep the previous scroll position in some browsers.
function navigateTo(href) {
  const frame = document.getElementById('contentFrame');
  if (!frame) return;

  // Best-effort: reset old page position immediately
  try { frame.contentWindow && frame.contentWindow.scrollTo(0, 0); } catch (_) {}

  navigateTo(href);

  frame.addEventListener('load', () => {
    try { frame.contentWindow && frame.contentWindow.scrollTo(0, 0); } catch (_) {}
  }, { once: true });
}

// scripts/nav.js
(function () {
  const navHost = document.getElementById("treeNav");
  const frame = document.getElementById("contentFrame");
  const breadcrumb = document.getElementById("breadcrumb");
  const homeLogoLink = document.getElementById("homeLink");
  const homeTextLink = document.getElementById("homeTextLink");

  const NAV = window.MOTORURL_NAV || [];
  if (!navHost || !frame) return;

  const HOME_HREF = "pages/home.html";
  const HOME_LABEL = "Home";

  function setBreadcrumb(label) {
    breadcrumb.textContent = label ? `Home / ${label}` : "Home";
  }

  function postPageMeta(meta) {
    try { frame.contentWindow?.postMessage({ type: "motorurl:pageMeta", meta }, "*"); } catch (_) {}
  }

  function isExternalHref(href) {
    return /^https?:\/\//i.test(href || "");
  }

  function loadPage(href, label, meta) {
    navigateTo(href);
    setBreadcrumb(href === HOME_HREF ? HOME_LABEL : (label || href));

    navHost.querySelectorAll("a.navItem").forEach(a => {
      a.removeAttribute("aria-current");
      if (a.getAttribute("data-href") === href) a.setAttribute("aria-current", "page");
    });

    location.hash = encodeURIComponent(href);
    frame.onload = () => postPageMeta(meta || {});
  }

  function openBranchById(id, open) {
    const el = navHost.querySelector(`.branch[data-id="${id}"]`);
    if (!el) return;
    el.setAttribute("data-open", open ? "true" : "false");
  }

  function toggleBranchById(id) {
    const el = navHost.querySelector(`.branch[data-id="${id}"]`);
    if (!el) return;
    const nowOpen = el.getAttribute("data-open") !== "true";
    el.setAttribute("data-open", nowOpen ? "true" : "false");
  }

  function applyHashIfPresent() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return false;
    const href = decodeURIComponent(raw);

    if (href === HOME_HREF) { loadPage(HOME_HREF, HOME_LABEL, {}); return true; }

    let found = null;

    function walk(nodes, parents) {
      for (const n of nodes) {
        if (!n) continue;
        if (n.type === "branch") {
          const nextParents = parents.concat(n);
          if (n.href === href) {
            found = { node: n, label: n.title, meta: { showGalleryLink: false }, parents };
            return;
          }
          walk(n.children || [], nextParents);
          if (found) return;
        } else if (n.type === "link") {
          if (n.href === href) {
            found = { node: n, label: n.title, meta: n, parents };
            return;
          }
        }
      }
    }

    walk(NAV, []);

    if (found) {
      (found.parents || []).forEach(p => openBranchById(p.id, true));
      if (found.node?.type === "branch") openBranchById(found.node.id, true);

      if (found.node?.external || isExternalHref(found.node?.href)) return true;

      loadPage(found.node.href, found.label, found.meta);
      return true;
    }

    if (!isExternalHref(href)) loadPage(href, href, {});
    return true;
  }

  function renderTree(nodes, container, level = 0) {
    nodes.forEach(node => {
      if (!node) return;

      if (node.type === "branch") {
        const branchEl = document.createElement("section");
        branchEl.className = "branch";
        branchEl.setAttribute("data-id", node.id);
        branchEl.setAttribute("data-open", node.openByDefault ? "true" : "false");

        const header = document.createElement("div");
        header.className = "branchHeader";

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "branch__toggleBtn";
        toggleBtn.type = "button";
        toggleBtn.title = "Expand/Collapse";
        toggleBtn.setAttribute("aria-label", `Toggle ${node.title}`);
        toggleBtn.addEventListener("click", () => toggleBranchById(node.id));

        const chev = document.createElement("span");
        chev.className = "chev";
        chev.textContent = "";
        toggleBtn.appendChild(chev);

        const titleLink = document.createElement("a");
        titleLink.className = "branch__titleLink";
        titleLink.href = "#";
        titleLink.textContent = node.title;
        titleLink.addEventListener("click", (e) => {
          e.preventDefault();
          if (node.href && !isExternalHref(node.href)) {
            loadPage(node.href, node.title, { showGalleryLink: false });
          } else {
            toggleBranchById(node.id);
          }
          window.dispatchEvent(new CustomEvent("motorurl:navigate"));
        });

        header.appendChild(toggleBtn);
        header.appendChild(titleLink);

        const childrenEl = document.createElement("div");
        childrenEl.className = "branch__items";
        renderTree(node.children || [], childrenEl);

        branchEl.appendChild(header);
        branchEl.appendChild(childrenEl);
        container.appendChild(branchEl);
        return;
      }

      if (node.type === "link") {
        const a = document.createElement("a");
        a.className = "navItem";
        a.href = "#";
        a.textContent = node.title;
        a.setAttribute("data-href", node.href);

        a.addEventListener("click", (e) => {
          e.preventDefault();

          if (node.external || isExternalHref(node.href)) {
            window.open(node.href, "_blank", "noopener,noreferrer");
            window.dispatchEvent(new CustomEvent("motorurl:navigate"));
            return;
          }

          loadPage(node.href, node.title, node);
          window.dispatchEvent(new CustomEvent("motorurl:navigate"));
        });

        container.appendChild(a);
      }
    });
  }

  function render() {
    navHost.innerHTML = "";
    renderTree(NAV, navHost);

    function goHome(e){
      e?.preventDefault();
      loadPage(HOME_HREF, HOME_LABEL, {});
      window.dispatchEvent(new CustomEvent("motorurl:navigate"));
    }
    homeLogoLink?.addEventListener("click", goHome);
    homeTextLink?.addEventListener("click", goHome);

    if (!applyHashIfPresent()) loadPage(HOME_HREF, HOME_LABEL, {});
  }

  window.addEventListener("hashchange", () => applyHashIfPresent());
  render();
})();

  function collapseOtherRoots(exceptId) {
    const rootToggles = document.querySelectorAll('#treeNav button.tree__toggle[data-level="0"]');
    rootToggles.forEach(btn => {
      const branchId = btn.dataset.branchId;
      if (!branchId || branchId === exceptId) return;
      state.open[branchId] = false;
      btn.setAttribute('aria-expanded', 'false');
      const li = btn.closest('li');
      if (li) li.classList.remove('is-open');
    });
    saveState();
  }


