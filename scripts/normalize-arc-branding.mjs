/**
 * Rewrites leftover Dota/MOBA phrasing to ARC Raiders extraction-shooter copy.
 * Preserves URL slugs (dota-2-* paths and slug fields).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const TARGETS = [
  'src/data/blog/posts.ts',
  'src/data/blog/additionalPosts.ts',
  'src/data/forum.ts',
  'src/data/productHubFaqs.ts',
  'src/i18n/en.ts',
  'src/data/faq.ts',
  'src/data/products.ts',
  'src/config/pageSeo.ts',
  'src/data/media.ts',
].map((f) => path.join(root, f));

/** Longest phrases first. */
const RULES = [
  ['Valve Anti-Cheat was unable to verify ARC Raiders', 'Easy Anti-Cheat could not verify ARC Raiders'],
  ['Valve Anti-Cheat unable to verify ARC Raiders', 'Easy Anti-Cheat unable to verify ARC Raiders'],
  ['Valve Anti-Cheat', 'Easy Anti-Cheat (EAC)'],
  ['Valve-approved console commands', 'Practice-mode debug commands'],
  ['Valve-approved', 'Official practice-mode'],
  ['Valve Terms of Use', 'Embark Terms of Service'],
  ['Valve review', 'platform review'],
  ['Valve lobby cheat codes', 'Practice lobby debug commands'],
  ['Dota patch', 'ARC Raiders patch'],
  ['Dota 2', 'ARC Raiders'],
  ['dota 2', 'ARC Raiders'],
  ['Auto Courier Manager', 'Loadout sync tools'],
  ['Lane Control AI', 'Route automation'],
  ['Auto Farm Bot', 'Extended loot automation'],
  ['Auto Kill Steal', 'Loot priority assist'],
  ['Auto Dagon', 'Elite combat macros'],
  ['Auto Combo', 'Aim assist'],
  ['Orbwalker & Smart Cast', 'Recoil control & target snap'],
  ['Orbwalker', 'Recoil control'],
  ['Smart Cast with Prediction', 'Target snapping with prediction'],
  ['Smart Cast', 'Target snapping'],
  ['Target Selector and Activator', 'Threat priority and quick toggles'],
  ['Target Selector', 'Threat priority'],
  ['Activator (BKB/Hex/Orchid)', 'Quick utility toggles'],
  ['Activator for BKB, Hex and Orchid', 'Quick utility toggles'],
  ['BKB/Hex/Orchid', 'utility items'],
  ['Ability radius drawing', 'Range overlay drawing'],
  ['hero script tools', 'combat assist tools'],
  ['hero scripts', 'combat assist modules'],
  ['Hero scripts', 'Combat assist modules'],
  ['hero combos', 'weapon handling drills'],
  ['hero ESP, ward', 'player ESP, loot'],
  ['hero ESP', 'player ESP'],
  ['Hero ESP', 'Player ESP'],
  ['ward and rune information', 'loot and extract information'],
  ['ward and rune', 'loot and extract'],
  ['ward and sentry markers', 'container and loot markers'],
  ['ward and sentry', 'container and loot'],
  ['ward ESP', 'loot ESP'],
  ['ward spots', 'extract scout routes'],
  ['ward positions', 'loot routes'],
  ['Ward & sentry locator', 'Container & loot markers'],
  ['ward locator', 'loot markers'],
  ['Ward locator', 'Loot markers'],
  ['rune information', 'extract timing'],
  ['rune spawn timers', 'extract timers'],
  ['Rune spawn timers', 'Extract timers'],
  ['rune timers', 'extract timers'],
  ['Rune timers', 'Extract timers'],
  ['rune spawn', 'extract window'],
  ['smoke alerts', 'threat alerts'],
  ['smoke alert', 'threat alert'],
  ['Smoke alert', 'Threat alert'],
  ['Minimap hack overlay', '2D raid radar overlay'],
  ['Minimap hack', '2D raid radar'],
  ['minimap hack', '2D raid radar'],
  ['map hack and script', 'ESP and combat assist'],
  ['map hack and ESP', 'ESP and radar'],
  ['map hack sliders', 'ESP and radar sliders'],
  ['map hack only', 'ESP-only'],
  ['Map hack only', 'ESP-only'],
  ['map hack', 'ESP and radar'],
  ['Map hack', 'ESP and radar'],
  ['Turbo and ranked', 'Trios and solo extractions'],
  ['Turbo lobby', 'practice raid'],
  ['Turbo presets', 'Trios presets'],
  ['Turbo and casual', 'Trios and casual'],
  ['Turbo', 'Trios'],
  ['bot lobby', 'practice mode'],
  ['ranked matchmaking', 'live Trios matchmaking'],
  ['ranked queue', 'Trios queue'],
  ['ranked grinders', 'extraction grinders'],
  ['ranked players', 'extraction players'],
  ['ranked session', 'Trios session'],
  ['ranked and Trios', 'Trios and solo'],
  ['ranked or Trios', 'Trios or solo'],
  ['ranked-safe', 'low-profile'],
  ['Ranked-safe', 'Low-profile'],
  ['ranked MMR', 'Trios progression'],
  ['ranked presets', 'Trios presets'],
  ['ranked profile', 'Trios profile'],
  ['ranked lobbies', 'Trios lobbies'],
  ['ranked lobby', 'Trios lobby'],
  ['before ranked', 'before Trios'],
  ['into ranked', 'into Trios'],
  ['returning to ranked', 'returning to Trios'],
  [' queue ranked', ' queue Trios'],
  ['in ranked', 'in Trios'],
  ['for ranked', 'for Trios'],
  ['Ranked, Trios', 'Trios, solo'],
  ['Ranked and Trios', 'Trios and solo'],
  ['Ranked', 'Trios'],
  ['ranked', 'Trios'],
  ['script delay', 'aim smoothness'],
  ['Script delay', 'Aim smoothness'],
  ['script modules', 'combat modules'],
  ['Script modules', 'Combat modules'],
  ['scripts tab', 'combat tab'],
  ['Scripts tab', 'Combat tab'],
  ['script automation', 'aim automation'],
  ['high-MMR', 'high-skill'],
  ['fog of war', 'topside terrain'],
  ['jungle camps', 'surface POIs'],
  ['jungle camp', 'surface POI'],
  ['team fight', 'squad fight'],
  ['teamfight', 'squad fight'],
  ['teamfights', 'squad fights'],
  ['Skin Changer', 'Unlock All'],
  ['zoom hack', 'FOV helper'],
  ['Zoom hack', 'FOV helper'],
  ['VAC patch day', 'EAC patch day'],
  ['VAC update', 'EAC update'],
  ['VAC updates', 'EAC updates'],
  ['VAC patch', 'EAC patch'],
  ['VAC penalties', 'EAC penalties'],
  ['VAC risk', 'EAC risk'],
  ['VAC waves', 'EAC waves'],
  ['VAC ban', 'EAC ban'],
  ['VAC bans', 'EAC bans'],
  ['VAC cannot', 'EAC cannot'],
  ['VAC cases', 'EAC cases'],
  ['after VAC', 'after EAC'],
  ['or VAC ', 'or EAC '],
  ['VAC and', 'EAC and'],
  ['VAC maintenance', 'EAC maintenance'],
  ['Check VAC', 'Check EAC'],
  ['VAC-aware', 'EAC-aware'],
  ['account-only VAC', 'account-only bans'],
  ['account VAC', 'account ban'],
  ['Permanent VAC', 'Permanent platform'],
  ['VAC enforcement', 'HWID enforcement'],
  ['Per-hero script profiles', 'Per-weapon aim profiles'],
  ['per-hero profiles', 'per-weapon profiles'],
  ['Per-hero', 'Per-weapon'],
  ['per-hero', 'per-weapon'],
  ['item timings', 'reload timings'],
  ['spell ranges', 'weapon ranges'],
  ['spell order', 'input order'],
  ['ability order', 'input order'],
  ['cooldowns', 'ability cooldowns'],
  ['-allvision', 'full map reveal (practice)'],
  ['-normalvision', 'normal vision (practice)'],
  ['-killwards', 'clear markers (practice)'],
  ['-refresh', 'reset cooldowns (practice)'],
  ['-disablewtf', 'disable unlimited cooldowns (practice)'],
  ['-createhero', 'spawn training target (practice)'],
  ['-gold', 'debug resources (practice)'],
  ['-wtf', 'unlimited cooldowns (practice)'],
];

const SLUG_GUARD =
  /(\/blog\/dota-2-[a-z0-9-]+(?:\/|$)|slug:\s*['"][^'"]*['"]|sourcePath:\s*['"][^'"]*['"]|['"]dota-2-[a-z0-9-]+['"]|productRelatedBlogSlugs|dota-2-[a-z0-9-]+(?:'|"))/g;

function protectSegments(text) {
  const saved = [];
  let n = 0;
  const masked = text.replace(SLUG_GUARD, (match) => {
    const token = `__GUARD_${n}__`;
    saved.push([token, match]);
    n += 1;
    return token;
  });
  return { masked, saved };
}

function restoreSegments(text, saved) {
  let out = text;
  for (const [token, match] of saved) {
    out = out.replaceAll(token, match);
  }
  return out;
}

function normalizeFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const original = fs.readFileSync(filePath, 'utf8');
  const { masked, saved } = protectSegments(original);
  let next = masked;
  for (const [from, to] of RULES) {
    next = next.split(from).join(to);
  }
  next = restoreSegments(next, saved);
  if (next !== original) {
    fs.writeFileSync(filePath, next, 'utf8');
    console.log('Updated', path.relative(root, filePath));
  }
}

for (const file of TARGETS) normalizeFile(file);

console.log('ARC branding normalization complete.');
