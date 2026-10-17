import fs from 'node:fs';
import path from 'node:path';

const postsPath = path.join(process.cwd(), 'src/data/blog/posts.ts');
let t = fs.readFileSync(postsPath, 'utf8');

const RULES = [
  [
    'Invoker tornado into EMP, PA blink dagger burst, Lion finger into spike',
    'SMG controlled bursts, AR tap-fire chains, and shotgun finishers',
  ],
  ['Invoker, PA, and Lion', 'AR, SMG, and shotgun loadouts'],
  ['Invoker, Lion, PA, Storm', 'assault rifle, SMG, and sniper loadouts'],
  ['Invoker, PA, Lion', 'AR, SMG, and shotgun'],
  ['Auto combo combat assist modules: Invoker, PA and Lion', 'Aim assist weapon profiles: AR, SMG, and shotgun'],
  [
    'Hero-specific combo examples for Pro tier scripts—Invoker tornado combos, PA blink dagger and Lion finger chains.',
    'Weapon-specific aim examples for Pro tier—AR tracking, SMG hip-fire, and shotgun entry chains.',
  ],
  [
    'Hero-specific combo examples for Pro tier scripts',
    'Weapon-specific aim examples for Pro tier',
  ],
  ['Invoker combo profile', 'Assault rifle profile'],
  ['Lion support pickoff', 'SMG close-range profile'],
  ['Recoil control on for PA only', 'Recoil control on for SMG only'],
  ['Target snapping off for Invoker until invoke order is stable', 'Target snapping off for sniper until scope rhythm is stable'],
  ['Storm Ball, Pudge hook, or Invoker sun strike', 'moving ARC bots and strafing raiders'],
  ['Lion, Shadow Shaman', 'marked targets and wounded raiders'],
  ['lowest HP hero', 'lowest HP raider'],
  ['lowest HP core', 'lowest HP threat'],
  ['burst heroes', 'aggressive loadouts'],
  ['Activator for BKB/Hex timing', 'Quick utility toggles for shield and heal items'],
  ['BKB/Hex', 'shield/utility'],
  ['custom lobbies with cheats enabled', 'practice modes and private sessions'],
  ['custom lobby', 'practice session'],
  ['custom lobbies', 'practice sessions'],
  ['console command', 'training workflow'],
  ['console commands', 'training workflows'],
  ['Enable cheats in a custom lobby', 'Use practice mode or a private session'],
  ['cheats enabled. They are perfect', 'training tools enabled. They are useful'],
  ['ward lines before Trios', 'loot routes before Trios'],
  ['ward line study', 'loot route study'],
  ['what the ward actually reveals under normal fog', 'what your ESP actually reveals at default range'],
  ['smoke or ward scenario', 'loot or extract scenario'],
  ['without waiting for normal match timing', 'without waiting for live raid timing'],
  ['Timbersaw combo routes', 'shotgun entry routes'],
  ['npc_dota_hero_lion enemy spawns an enemy Lion', 'training dummy spawns a practice target'],
  ['Invoker invoke chains', 'weapon swap drills'],
  ['Delay Setting', 'Smoothness setting'],
  ['casts abilities', 'adjusts aim'],
  ['cast points on fogged targets', 'shots through smoke without visual confirm'],
  ['chains abilities', 'chains aim corrections'],
  ['script range', 'aim FOV'],
  ['hero in script range', 'raider in aim FOV'],
  ['Hero-specific', 'Weapon-specific'],
  ['hero select', 'loadout select'],
  ['Steam Trios', 'live Trios'],
];

for (const [from, to] of RULES) {
  t = t.split(from).join(to);
}

fs.writeFileSync(postsPath, t, 'utf8');
console.log('Blog MOBA pass 2 applied to posts.ts');
