(() => {
  'use strict';

  const cards = [...document.querySelectorAll('.notebook-card')];
  const grid = document.querySelector('.notebook-grid');
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const status = document.querySelector('#status');
  const notebookSort = document.querySelector('#notebook-sort');
  const visibilityTabs = [...document.querySelectorAll('[data-visibility-filter]')];
  const count = document.querySelector('#count');
  const empty = document.querySelector('#empty');
  let visibility = 'all';

  function setPressed(buttons, predicate) {
    buttons.forEach(button => {
      const selected = predicate(button);
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function filterNotebooks() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach(card => {
      const matches = terms.every(term => card.dataset.search.toLowerCase().includes(term))
        && (visibility === 'all' || card.dataset.visibility === visibility)
        && (category.value === 'all' || card.dataset.category === category.value)
        && (status.value === 'all' || card.dataset.status === status.value);
      card.hidden = !matches;
      if (matches) visible++;
    });
    count.textContent = `${visible} of ${cards.length} notebooks`;
    empty.hidden = visible > 0;
    setPressed(visibilityTabs, button => button.dataset.visibilityFilter === visibility);
  }

  function sortNotebooks() {
    const mode = notebookSort.value;
    [...cards].sort((a, b) => {
      if (mode === 'name') return a.dataset.title.localeCompare(b.dataset.title);
      if (mode === 'versions') return Number(b.dataset.versions) - Number(a.dataset.versions) || Number(a.dataset.order) - Number(b.dataset.order);
      return (a.dataset.visibility === 'private') - (b.dataset.visibility === 'private') || Number(a.dataset.order) - Number(b.dataset.order);
    }).forEach(card => grid.appendChild(card));
  }

  function resetFilters() {
    visibility = 'all';
    search.value = '';
    category.value = 'all';
    status.value = 'all';
    filterNotebooks();
  }

  visibilityTabs.forEach(button => button.addEventListener('click', () => {
    visibility = button.dataset.visibilityFilter;
    filterNotebooks();
  }));
  search.addEventListener('input', filterNotebooks);
  category.addEventListener('change', filterNotebooks);
  status.addEventListener('change', filterNotebooks);
  notebookSort.addEventListener('change', sortNotebooks);
  document.querySelector('[data-reset-filters]').addEventListener('click', resetFilters);
  document.querySelectorAll('[data-public-shortcut]').forEach(link => link.addEventListener('click', () => {
    resetFilters();
    visibility = 'public';
    filterNotebooks();
  }));
  filterNotebooks();

  const rows = [...document.querySelectorAll('.comparison-row')];
  const tableBody = document.querySelector('.comparison-table tbody');
  const resultTabs = [...document.querySelectorAll('[data-result-kind]')];
  const resultSort = document.querySelector('#result-sort');
  resultTabs.forEach(button => button.addEventListener('click', () => {
    const kind = button.dataset.resultKind;
    rows.forEach(row => { row.hidden = kind !== 'all' && row.dataset.kind !== kind; });
    setPressed(resultTabs, item => item === button);
  }));
  resultSort.addEventListener('change', () => {
    [...rows].sort((a, b) => {
      const kind = (a.dataset.kind === 'teacher') - (b.dataset.kind === 'teacher');
      return kind || (resultSort.value === 'name'
        ? a.dataset.name.localeCompare(b.dataset.name)
        : Number(a.dataset.fid) - Number(b.dataset.fid));
    }).forEach(row => tableBody.appendChild(row));
  });

  const viewer = document.querySelector('#sample-viewer');
  const samples = [...document.querySelectorAll('.sample-card')];
  const viewerImage = document.querySelector('#viewer-image');
  const close = document.querySelector('#viewer-close');
  let sampleIndex = 0;
  let sampleTrigger = null;

  function showSample(index) {
    sampleIndex = (index + samples.length) % samples.length;
    const sample = samples[sampleIndex];
    const source = sample.querySelector('img');
    document.querySelector('#viewer-title').textContent = sample.dataset.sampleTitle;
    document.querySelector('#viewer-subtitle').textContent = sample.dataset.sampleSubtitle;
    document.querySelector('#viewer-count').textContent = `${sampleIndex + 1} / ${samples.length}`;
    document.querySelector('#viewer-run').href = sample.dataset.runUrl;
    document.querySelector('#viewer-json').href = sample.dataset.jsonUrl;
    viewerImage.src = source.currentSrc || source.src;
    viewerImage.alt = source.alt;
  }

  document.querySelectorAll('[data-open-sample]').forEach(link => link.addEventListener('click', event => {
    const index = samples.findIndex(sample => sample.id === link.dataset.openSample);
    if (index < 0 || typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    sampleTrigger = link;
    showSample(index);
    viewer.showModal();
    close.focus();
  }));
  close.addEventListener('click', () => viewer.close());
  document.querySelector('#viewer-previous').addEventListener('click', () => showSample(sampleIndex - 1));
  document.querySelector('#viewer-next').addEventListener('click', () => showSample(sampleIndex + 1));
  viewer.addEventListener('click', event => {
    const rect = viewer.getBoundingClientRect();
    if (event.target === viewer && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) viewer.close();
  });
  viewer.addEventListener('close', () => {
    if (sampleTrigger && sampleTrigger.isConnected) sampleTrigger.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', event => {
    if (viewer.open) {
      if (event.key === 'ArrowLeft') { event.preventDefault(); showSample(sampleIndex - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); showSample(sampleIndex + 1); }
      return;
    }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey
      && !event.target.closest('input,textarea,select,[contenteditable="true"]')) {
      event.preventDefault();
      document.querySelector('#notebooks').scrollIntoView({ behavior: 'auto', block: 'start' });
      search.focus({ preventScroll: true });
    }
  });

  const navLinks = [...document.querySelectorAll('.rail-nav a')];
  if ('IntersectionObserver' in window) {
    const sections = [...document.querySelectorAll('main>section[id]')];
    const sectionStates = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => sectionStates.set(entry.target.id, entry.isIntersecting));
      const first = sections.find(section => sectionStates.get(section.id));
      if (!first) return;
      navLinks.forEach(link => {
        const active = link.hash === `#${first.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-12% 0px -62% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
})();
