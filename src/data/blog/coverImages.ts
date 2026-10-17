import { ARC_RAIDERS_IMAGES } from '../media';

type PostRef = { slug: string; tag: string; date: string };

const L = ARC_RAIDERS_IMAGES.length;
const FEATURED_SLUG = 'arc-raiders-cheats-features-guide';

const TAG_COVER_OFFSET: Record<string, number> = {
  Features: 0,
  Guides: 2,
  Setup: 4,
  Troubleshooting: 6,
  Update: 8,
};

function parseBlogDate(date: string): number {
  const t = Date.parse(date);
  return Number.isNaN(t) ? 0 : t;
}

function assignUniqueWithinTag(
  out: Map<string, string>,
  tagPosts: PostRef[],
  startOffset: number,
  blocked: ReadonlySet<string>,
): void {
  const usedInTag = new Set<string>();

  for (let i = 0; i < tagPosts.length; i++) {
    const post = tagPosts[i]!;
    if (out.has(post.slug)) {
      usedInTag.add(out.get(post.slug)!);
      continue;
    }

    let picked: string | undefined;

    for (let attempt = 0; attempt < L; attempt++) {
      const src = ARC_RAIDERS_IMAGES[(startOffset + i + attempt) % L]!;
      if (blocked.has(src) && post.slug !== FEATURED_SLUG) continue;
      if (usedInTag.has(src)) continue;
      picked = src;
      break;
    }

    if (!picked) {
      for (let attempt = 0; attempt < L; attempt++) {
        const src = ARC_RAIDERS_IMAGES[(startOffset + i + attempt) % L]!;
        if (usedInTag.has(src)) continue;
        picked = src;
        break;
      }
    }

    picked ??= ARC_RAIDERS_IMAGES[(startOffset + i) % L]!;
    out.set(post.slug, picked);
    usedInTag.add(picked);
  }
}

/** Blog index shows featured + grid — newest rows should not reuse the same PNG. */
function diversifyBlogIndexView(out: Map<string, string>, posts: readonly PostRef[]): void {
  const featuredImg = out.get(FEATURED_SLUG);
  const blocked = featuredImg ? new Set([featuredImg]) : new Set<string>();

  const gridPosts = posts
    .filter((p) => p.slug !== FEATURED_SLUG)
    .sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date));

  const seen = new Set<string>();

  for (let i = 0; i < gridPosts.length; i++) {
    const post = gridPosts[i]!;
    let img = out.get(post.slug)!;

    if (blocked.has(img)) {
      for (let j = i + 1; j < gridPosts.length; j++) {
        const partner = gridPosts[j]!;
        if (partner.tag !== post.tag) continue;
        const partnerImg = out.get(partner.slug)!;
        if (blocked.has(partnerImg)) continue;
        out.set(post.slug, partnerImg);
        out.set(partner.slug, img);
        img = partnerImg;
        break;
      }
    }

    if (!seen.has(img)) {
      seen.add(img);
      continue;
    }

    let swapped = false;
    for (let j = i + 1; j < gridPosts.length; j++) {
      const partner = gridPosts[j]!;
      if (partner.tag !== post.tag) continue;
      const partnerImg = out.get(partner.slug)!;
      if (seen.has(partnerImg) || blocked.has(partnerImg)) continue;
      out.set(post.slug, partnerImg);
      out.set(partner.slug, img);
      seen.add(partnerImg);
      swapped = true;
      break;
    }

    if (!swapped) seen.add(img);
  }
}

export function buildBlogCoverBySlug(posts: readonly PostRef[]): Map<string, string> {
  const out = new Map<string, string>();

  out.set(FEATURED_SLUG, ARC_RAIDERS_IMAGES[4]!);
  const blocked = new Set([out.get(FEATURED_SLUG)!]);

  const tags = [...new Set(posts.map((p) => p.tag))].sort((a, b) => a.localeCompare(b));

  for (const tag of tags) {
    const tagPosts = posts
      .filter((p) => p.tag === tag)
      .sort((a, b) => parseBlogDate(b.date) - parseBlogDate(a.date));

    const offset = TAG_COVER_OFFSET[tag] ?? 0;
    assignUniqueWithinTag(out, tagPosts, offset, blocked);
  }

  for (const post of posts) {
    if (!out.has(post.slug)) {
      out.set(post.slug, ARC_RAIDERS_IMAGES[0]!);
    }
  }

  diversifyBlogIndexView(out, posts);

  if (import.meta.env?.DEV) {
    for (const tag of tags) {
      const tagPosts = posts.filter((p) => p.tag === tag);
      const imgs = tagPosts.map((p) => out.get(p.slug));
      const unique = new Set(imgs);
      if (unique.size !== imgs.length) {
        console.warn(`[blog] duplicate covers in tag "${tag}": ${imgs.length} posts, ${unique.size} unique`);
      }
    }

    const featuredImgDev = out.get(FEATURED_SLUG);
    const othersWithFeatured = posts.filter(
      (p) => p.slug !== FEATURED_SLUG && out.get(p.slug) === featuredImgDev,
    );
    if (othersWithFeatured.length) {
      console.warn('[blog] featured cover reused by', othersWithFeatured.map((p) => p.slug));
    }
  }

  return out;
}
