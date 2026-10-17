import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsDir = path.resolve(
  root,
  '..',
  '..',
  '.cursor',
  'projects',
  'c-Users-Faadi-Khan-arc-raider-hacks',
  'assets',
);

const sourceFiles = [
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-bb6ac4e1-a2af-4d01-aff8-c4903bb0e09a.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-979d133d-1a94-4313-b158-ec3408c1cc51.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-df0dc0c5-897e-4a77-87fd-9689889c5300.jpg',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-2ceef81d-deaa-447c-bc05-afcbe921e7da.jpg',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-e1f89e43-9bf5-4e52-a2b6-d9b2fd14e909.png',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-1449141d-c48d-4cac-9a70-5e71f4079cc6.jpg',
  'c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_f6b599f35ba4ae8855fd84141d0bcbdc_images_image-2bbf2339-f0c3-4b6f-b413-b5716bdf7637.jpg',
];

const outputNames = [
  '01-skeleton-esp.png',
  '02-indoor-esp.png',
  '03-loot-husk.png',
  '04-loot-forest.png',
  '05-loadout.png',
  '06-cheat-banner.png',
  '07-combat.png',
];

const outDir = path.join(root, 'public/images/arc-raiders');
const legacyDirs = [path.join(root, 'public/images/gameplay'), path.join(root, 'public/images/blog')];

fs.mkdirSync(outDir, { recursive: true });

for (const legacy of legacyDirs) {
  if (!fs.existsSync(legacy)) continue;
  for (const file of fs.readdirSync(legacy)) {
    fs.unlinkSync(path.join(legacy, file));
  }
}

for (let i = 0; i < outputNames.length; i++) {
  const srcPath = path.join(assetsDir, sourceFiles[i]);
  const dest = path.join(outDir, outputNames[i]);
  if (!fs.existsSync(srcPath)) {
    if (fs.existsSync(dest)) {
      console.log('Keep existing', outputNames[i]);
      continue;
    }
    throw new Error(`Missing source asset: ${srcPath}`);
  }
  await sharp(srcPath)
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toFile(dest);
  console.log('Wrote', path.relative(root, dest));
}

console.log('Installed 7 canonical ARC Raiders images.');
