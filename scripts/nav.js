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

  function loadPage(href, label, meta) {
    frame.src = href;
    setBreadcrumb(href === HOME_HREF ? HOME_LABEL : (label || href));

    navHost.querySelectorAll("a.navItem").forEach(a => {
      a.removeAttribute("aria-current");
      if (a.getAttribute("data-href") === href) a.setAttribute("aria-current", "page");
    });

    location.hash = encodeURIComponent(href);
    frame.onload = () => postPageMeta(meta || {});
  }

  function openBranch(branchId, open) {
    const el = navHost.querySelector(`.branch[data-id="${branchId}"]`);
    if (!el) return;
    el.setAttribute("data-open", open ? "true" : "false");
  }

  function applyHashIfPresent() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return false;
    const href = decodeURIComponent(raw);

    if (href === HOME_HREF) { loadPage(HOME_HREF, HOME_LABEL, {}); return true; }

    for (const branch of NAV) {
      if (branch.href === href) {
        loadPage(branch.href, branch.title, { showGalleryLink: false });
        openBranch(branch.id, true);
        return true;
      }
    }

    for (const branch of NAV) {
      for (const item of (branch.items || [])) {
        if (item.href === href) {
          loadPage(item.href, item.title, item);
          openBranch(branch.id, true);
          return true;
        }
      }
    }

    loadPage(href, href, {});
    return true;
  }

  function toggleBranch(branchId) {
    const el = navHost.querySelector(`.branch[data-id="${branchId}"]`);
    if (!el) return;
    const nowOpen = el.getAttribute("data-open") !== "true";
    el.setAttribute("data-open", nowOpen ? "true" : "false");
  }

  function render() {
    navHost.innerHTML = "";

    NAV.forEach(branch => {
      const branchEl = document.createElement("section");
      branchEl.className = "branch";
      branchEl.setAttribute("data-id", branch.id);
      branchEl.setAttribute("data-open", branch.openByDefault ? "true" : "false");

      const header = document.createElement("div");
      header.className = "branchHeader";

      const toggleBtn = document.createElement("button");
      toggleBtn.className = "branch__toggleBtn";
      toggleBtn.type = "button";
      toggleBtn.title = "Expand/Collapse";
      toggleBtn.setAttribute("aria-label", `Toggle ${branch.title}`);
      toggleBtn.addEventListener("click", () => toggleBranch(branch.id));

      const chev = document.createElement("span");
      chev.className = "chev";
      chev.textContent = "▶";
      toggleBtn.appendChild(chev);

      const titleLink = document.createElement("a");
      titleLink.className = "branch__titleLink";
      titleLink.href = "#";
      titleLink.textContent = branch.title;
      titleLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (branch.href) {
          loadPage(branch.href, branch.title, { showGalleryLink: false });
        } else {
          toggleBranch(branch.id);
        }
        window.dispatchEvent(new CustomEvent("motorurl:navigate"));
      });

      header.appendChild(toggleBtn);
      header.appendChild(titleLink);

      const itemsEl = document.createElement("div");
      itemsEl.className = "branch__items";

      (branch.items || []).forEach(item => {
        const a = document.createElement("a");
        a.className = "navItem";
        a.href = "#";
        a.textContent = item.title;
        a.setAttribute("data-href", item.href);
        a.addEventListener("click", (e) => {
          e.preventDefault();
          loadPage(item.href, item.title, item);
          window.dispatchEvent(new CustomEvent("motorurl:navigate"));
        });
        itemsEl.appendChild(a);
      });

      branchEl.appendChild(header);
      branchEl.appendChild(itemsEl);
      navHost.appendChild(branchEl);
    });

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
