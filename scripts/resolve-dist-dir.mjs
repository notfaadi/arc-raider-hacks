import fs from 'node:fs';
import path from 'node:path';

/** Directory that contains the built static site (index.html, assets). */
export function resolveStaticDistDir(root = process.cwd()) {
  const dist = path.join(root, 'dist');
  const client = path.join(dist, 'client');

  if (fs.existsSync(path.join(client, 'index.html'))) return client;
  if (fs.existsSync(path.join(dist, 'index.html'))) return dist;

  for (const dir of [dist, client]) {
    if (fs.existsSync(path.join(dir, 'sitemap-0.xml'))) return dir;
  }

  return dist;
}
