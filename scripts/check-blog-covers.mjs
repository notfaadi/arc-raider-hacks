import { blogPosts, getFeaturedBlogPost, getNonFeaturedBlogPosts } from '../src/data/blog.ts';

const byImg = new Map();
for (const p of blogPosts) {
  if (!byImg.has(p.image)) byImg.set(p.image, []);
  byImg.get(p.image).push(`${p.tag}:${p.slug}`);
}

console.log('posts', blogPosts.length, 'unique images', byImg.size);
for (const [img, slugs] of byImg) {
  if (slugs.length > 1) console.log('DUP', img.split('/').pop(), slugs);
}

const featured = getFeaturedBlogPost();
const grid = getNonFeaturedBlogPosts();
const sorted = [...grid].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
console.log('\nFeatured:', featured?.slug, featured?.image.split('/').pop());
console.log('Top 9 grid (newest):');
for (const p of sorted.slice(0, 9)) {
  console.log(p.image.split('/').pop(), p.slug);
}
