import fs from 'node:fs';
import path from 'node:path';
import { isCloudflareCi } from './is-cloudflare-ci.mjs';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const outputs = [
  path.join(publicDir, 'apple-touch-icon.png'),
  path.join(publicDir, 'favicon-32.png'),
  path.join(publicDir, 'favicon-16.png'),
  path.join(publicDir, 'favicon.ico'),
];

if (isCloudflareCi() && outputs.every((f) => fs.existsSync(f))) {
  console.log('generate-brand-icons: skip on Cloudflare CI (icons committed in repo).');
  process.exit(0);
}

const { default: sharp } = await import('sharp');
const logoSvg = fs.readFileSync(path.join(publicDir, 'logo.svg'));

await sharp(logoSvg).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(logoSvg).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'));
await sharp(logoSvg).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16.png'));
await sharp(logoSvg).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));

console.log('Brand icons generated: apple-touch-icon.png, favicon.ico, favicon-16/32.png');
