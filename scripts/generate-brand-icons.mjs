import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!pkg.scripts?.build?.includes('log-build-version')) {
  console.error(
    'cloudflare-build-error: This deployment is using STALE commit 36e05d1-era package.json.',
  );
  console.error(
    'Do NOT click Retry on old failed builds. Use Deployments → Create deployment → main → latest commit.',
  );
  console.error('Or clear build cache: Settings → Builds → Clear build cache.');
  console.error('Current build script:', pkg.scripts?.build);
  process.exit(1);
}

const root = process.cwd();
const publicDir = path.join(root, 'public');
const logoSvg = fs.readFileSync(path.join(publicDir, 'logo.svg'));

await sharp(logoSvg).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(logoSvg).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'));
await sharp(logoSvg).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16.png'));
await sharp(logoSvg).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));

console.log('Brand icons generated: apple-touch-icon.png, favicon.ico, favicon-16/32.png');
