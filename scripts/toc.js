// scripts/toc.js
// Auto-generate a Contents list from H2/H3 headings
(() => {
  const toc = document.querySelector('[data-toc]');
  if (!toc) return;

  const content = document.querySelector('.pageCard') || document.querySelector('.page') || document.querySelector('main') || document.body;
  const headings = content.querySelectorAll('h2, h3');
  if (!headings.length) return;

  const usedIds = new Set();
  const makeId = (txt) => {
    let id = txt.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (!id) id = 'section';
    const base = id;
    let i = 2;
    while (usedIds.has(id) || document.getElementById(id)) id = `${base}-${i++}`;
    usedIds.add(id);
    return id;
  };

  const ul = document.createElement('ul');
  ul.className = 'toc-list';

  headings.forEach(h => {
    const label = h.textContent.trim();
    if (!h.id) h.id = makeId(label);

    const li = document.createElement('li');
    li.className = `toc-${h.tagName.toLowerCase()}`;

    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = label;

    li.appendChild(a);
    ul.appendChild(li);
  });

  const title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = 'Contents';

  toc.appendChild(title);
  toc.appendChild(ul);
})();
