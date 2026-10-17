/** Blog index topic filters + Starwind sort select. */
export function initBlogIndexFilters() {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const featuredWrap = document.getElementById('blog-featured');
  const sortRoot = document.getElementById('blog-sort-select');
  if (!grid) return;

  const emptyMessage =
    emptyEl?.dataset.emptyMessage?.trim() || 'No articles match this filter.';

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');

  const gridCards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const featuredCard = () =>
    featuredWrap?.querySelector<HTMLElement>('[data-blog-card]') ?? null;

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]');

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const isBlogSortEvent = (event: Event) => {
    const root = getSortSelectRoot();
    if (!root || !sortRoot) return false;
    return event.target === root || root.contains(event.target as Node);
  };

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const cardMatchesTag = (el: HTMLElement | null, tag: string) =>
    tag === 'all' || el?.getAttribute('data-tag') === tag;

  const apply = () => {
    const tag = activeTag();
    const sort = getSort();
    const items = gridCards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const match = cardMatchesTag(el, tag);
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    const featured = featuredCard();
    if (featuredWrap && featured) {
      const showFeatured = cardMatchesTag(featured, tag);
      featuredWrap.classList.toggle('hidden', !showFeatured);
      if (showFeatured) visibleCount += 1;
    }

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }
  };

  if (grid.dataset.blogFiltersReady !== 'true') {
    grid.dataset.blogFiltersReady = 'true';

    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        apply();
      });
    });

    document.addEventListener('starwind:value-change', (event: Event) => {
      if (!isBlogSortEvent(event)) return;
      apply();
    });
  }

  requestAnimationFrame(apply);
  window.setTimeout(apply, 0);
  window.setTimeout(apply, 150);
}
