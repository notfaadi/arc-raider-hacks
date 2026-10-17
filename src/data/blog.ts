export type { BlogBlock, BlogPostFull } from './types';

import { blogPosts as rawBlogPosts } from './blog/posts';
import { buildBlogCoverBySlug } from './blog/coverImages';
import { HOMEPAGE_BLOG_SLUGS } from './media';

const coverBySlug = buildBlogCoverBySlug(rawBlogPosts);

export const blogPosts = rawBlogPosts.map((post) => ({
  ...post,
  image: coverBySlug.get(post.slug) ?? post.image,
}));

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

export function getFeaturedBlogPost() {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getNonFeaturedBlogPosts() {
  const featured = getFeaturedBlogPost();
  return blogPosts.filter((p) => p.slug !== featured?.slug);
}

function postsWithUniqueImages<T extends { image: string }>(posts: T[], limit: number): T[] {
  const picked: T[] = [];
  const seenImages = new Set<string>();
  for (const post of posts) {
    if (seenImages.has(post.image)) continue;
    seenImages.add(post.image);
    picked.push(post);
    if (picked.length >= limit) break;
  }
  return picked;
}

export function getFeaturedBlogPosts(limit = 3) {
  const featured = getFeaturedBlogPost();
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);
  const candidates = featured ? [featured, ...rest] : blogPosts;
  return postsWithUniqueImages(candidates, limit);
}

/** Homepage blog strip — articles that use the 08–11 screenshot covers. */
export function getHomepageBlogPosts(limit = 3) {
  const curated = getBlogPostsBySlugs([...HOMEPAGE_BLOG_SLUGS]);
  return postsWithUniqueImages(curated, limit).slice(0, limit);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return [];

  const sameTag = blogPosts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = blogPosts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  const candidates = [...sameTag, ...others];

  const picked: typeof blogPosts = [];
  const seenImages = new Set<string>([current.image]);

  for (const post of candidates) {
    if (seenImages.has(post.image)) continue;
    seenImages.add(post.image);
    picked.push(post);
    if (picked.length >= limit) break;
  }

  return picked;
}

export function getBlogPostsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((post): post is NonNullable<typeof post> => post != null);
}

export function getRelatedBlogPostsForProduct(relatedSlugs: string[], limit = 6) {
  const curated = getBlogPostsBySlugs(relatedSlugs);
  if (curated.length >= limit) return postsWithUniqueImages(curated, limit);

  const used = new Set(curated.map((p) => p.slug));
  const seenImages = new Set(curated.map((p) => p.image));
  const fill: typeof blogPosts = [];
  for (const post of blogPosts) {
    if (used.has(post.slug) || seenImages.has(post.image)) continue;
    seenImages.add(post.image);
    fill.push(post);
    if (curated.length + fill.length >= limit) break;
  }
  return [...curated, ...fill].slice(0, limit);
}

export function getBlogTags() {
  return [...new Set(blogPosts.map((p) => p.tag))].sort((a, b) => a.localeCompare(b));
}

export function getBlogPostTimestamp(date: string) {
  return new Date(date).getTime();
}

export function getBlogReadMinutes(readTime: string) {
  const match = readTime.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}
