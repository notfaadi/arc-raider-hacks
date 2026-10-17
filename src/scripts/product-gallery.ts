/** Product detail screenshot thumbs → main hero (updates <picture> webp source + img). */

function applyMainSlide(mainRoot: HTMLElement, srcSet: string, fallbackSrc: string, alt: string) {
  const source = mainRoot.querySelector<HTMLSourceElement>('source[type="image/webp"]');
  const img = mainRoot.querySelector<HTMLImageElement>('img.product-gallery__image');
  if (source) source.srcset = srcSet;
  if (img) {
    img.srcset = srcSet;
    img.src = fallbackSrc;
    img.alt = alt;
  }
}

export function initProductGalleries(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-product-gallery]').forEach((gallery) => {
    if (gallery.hasAttribute('data-gallery-bound')) return;
    gallery.setAttribute('data-gallery-bound', '');

    const mainRoot = gallery.querySelector<HTMLElement>('.product-gallery__main');
    const thumbs = gallery.querySelectorAll<HTMLButtonElement>('[data-product-gallery-thumb]');
    if (!mainRoot || !thumbs.length) return;

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const srcSet = thumb.getAttribute('data-srcset');
        const fallbackSrc = thumb.getAttribute('data-fallback-src');
        const alt = thumb.getAttribute('data-alt') ?? '';
        if (!srcSet || !fallbackSrc) return;

        applyMainSlide(mainRoot, srcSet, fallbackSrc, alt);

        thumbs.forEach((t) => {
          const active = t === thumb;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });
      });
    });
  });
}

export function setupProductGalleries() {
  const boot = () => initProductGalleries();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
  document.addEventListener('astro:after-swap', () => initProductGalleries());
}

setupProductGalleries();
