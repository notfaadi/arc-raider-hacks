import { writeFileSync } from 'node:fs';

const RAW = `
What is FortniteCheats?
Do I need Discord to use FortniteCheats?
Does FortniteCheats work on Windows 10 and Windows 11?
Do I need a VPN to use Fortnite cheats?
Does FortniteCheats work with multiple Epic accounts?
What if I already have a software ban on my Epic account?
Is FortniteCheats undetected?
Why choose FortniteCheats over other Fortnite hack sites?
What is Cloud DMA in Fortnite cheats?
Does Fortnite Cloud DMA change how ESP looks?
How do I set up Fortnite ESP after I buy?
Do I need a Fortnite HWID Spoofer for ESP?
Does Fortnite Cloud DMA make aimbot undetected forever?
Do I need a Fortnite HWID Spoofer to stay safe?
Does FortniteCheats guarantee I will not get banned?
What are the best Fortnite cheats in 2026 on FortniteCheats?
Do I need Fortnite Cloud DMA with the best plan?
When do I need a Fortnite HWID Spoofer?
Is Fortnite Unlock All a Battle Royale cheat?
Does FortniteCheats sell speed or fly hacks?
What should I buy first if I am new?
Does Fortnite Cloud DMA change wallhack?
Is Fortnite Cloud DMA the same as a generic external?
When do I use a Fortnite HWID Spoofer?
Which plan is safest — Essential, Standard, or Elite?
What does a Fortnite HWID Spoofer do?
When should I use the Fortnite HWID Spoofer?
Does HWID spoof replace Fortnite Cloud DMA?
Do I still need Essential, Standard, or Elite?
Is a software ban the same as a hardware flag?
Will Fortnite HWID Spoofer make a detected cheat safe?
Can I spoof on the same Windows install?
Does HWID spoof work on console?
Does Fortnite Unlock All need a spoofer?
Does Fortnite Cloud DMA include triggerbot?
Is silent aim safer against Easy Anti-Cheat?
What is Fortnite Cloud DMA?
Do I need a DMA card for Fortnite Cloud DMA?
Does Cloud DMA work with Essential, Standard, and Elite?
Is Cloud DMA the same as a public injector?
What if Hyper-V setup fails for Cloud DMA?
Does Cloud DMA make Fortnite cheats undetected forever?
Can I run Cloud DMA on a laptop?
Do I still download a loader with Cloud DMA?
Is Cloud DMA available on console?
Does Cloud DMA include ESP and aimbot?
Should I add a Fortnite HWID Spoofer with Cloud DMA?
Can I add Fortnite Cloud DMA to any of these plans?
Do I need Fortnite Unlock All with a plan?
Does Fortnite Cloud DMA add extra loot ESP filters?
Is loot ESP the same as Fortnite Unlock All?
How do I pick a FortniteCheats plan?
What is Fortnite Cloud DMA vs a generic external cheat?
Does FortniteCheats sell V-Bucks or locker unlocks?
Do I need a Fortnite HWID Spoofer with my first key?
What are the top Fortnite hacks on FortniteCheats?
Does Fortnite Cloud DMA add more hacks?
What Fortnite cheats actually exist in 2026?
Are there official Fortnite cheat codes for V-Bucks?
Is Fortnite Unlock All a V-Bucks exploit?
What does FortniteCheats actually add?
How safe are FortniteCheats?
Do I need Fortnite Cloud DMA to use cheats correctly?
Does Fortnite Unlock All help me win fights?
Where do I start after I decide to buy?
When do I add a Fortnite HWID Spoofer?
Does Fortnite Cloud DMA keep aimbot and wallhack undetected?
Do private Fortnite hacks include Cloud DMA on AWS?
Do private hacks include Fortnite Unlock All?
How do I buy Fortnite cheats from FortniteCheats?
Should I buy a Fortnite HWID Spoofer with my first checkout?
Is checkout the same as a V-Bucks store?
What are the best undetected Fortnite hacks in 2026?
What should I buy first in 2026?
Does Fortnite Cloud DMA replace a DMA card in 2026?
Do I need a Fortnite HWID Spoofer in 2026?
Does Fortnite Unlock All count as an undetected hack?
How does Fortnite Cloud DMA on AWS sync aimbot and ESP presets?
Is Cloud DMA included with private Fortnite cheats at getfortnitecheat.net?
Fortnite Cloud DMA ranked and Zero Build preset backup explained
Cloud DMA vs physical DMA card for Fortnite hacks in 2026
How do I restore Fortnite cheat configs after a patch with Cloud DMA?
Does Cloud DMA sync triggerbot and wallhack sliders?
Fortnite Cloud DMA operator portal — what gets saved?
Can Cloud DMA run with external Fortnite loader on EAC?
Best Cloud DMA Fortnite cheat setup for Battle Royale ranked
Fortnite Cloud DMA AWS delivery vs local config files
Does Cloud DMA help with undetected Fortnite cheats after updates?
How often are Cloud DMA snapshots updated for Fortnite seasons?
Best Fortnite HWID spoofer for Easy Anti-Cheat hardware bans
How to verify HWID spoofer worked before launching Fortnite
Fortnite HWID ban symptoms on Epic Games PC
HWID spoofer disk serial MAC and GPU ID for Fortnite
Should I spoof HWID before or after buying Fortnite cheats?
Fortnite HWID spoofer vs Epic account ban — what is different?
Does getfortnitecheat.net sell a dedicated Fortnite HWID spoofer?
HWID spoofer compatibility scan before Fortnite cheat install
Can I use Fortnite cheats without HWID spoofer on a clean PC?
Fortnite HWID spoofer Windows 11 and Epic Games launcher
Permanent hardware ban Fortnite — can HWID spoofer help?
Pairing HWID spoofer with Cloud DMA Fortnite cheat configs
`.trim().split('\n');

function transformQuestion(q) {
  return q
    .replace(/FortniteCheats/g, 'Arc Raiders Hacks & Cheats')
    .replace(/getfortnitecheat\.net/g, 'arcraidershacks.com')
    .replace(/Fortnite Cloud DMA/g, 'ARC Raiders Cloud DMA')
    .replace(/Fortnite HWID Spoofer/g, 'ARC Raiders HWID Spoofer')
    .replace(/Fortnite HWID spoofer/g, 'ARC Raiders HWID spoofer')
    .replace(/Fortnite Unlock All/g, 'ARC Raiders Unlock All')
    .replace(/Fortnite cheats/g, 'ARC Raiders hacks')
    .replace(/Fortnite cheat/g, 'ARC Raiders hack')
    .replace(/Fortnite hacks/g, 'ARC Raiders hacks')
    .replace(/Fortnite hack/g, 'ARC Raiders hack')
    .replace(/Fortnite ESP/g, 'ARC Raiders ESP')
    .replace(/Fortnite /g, 'ARC Raiders ')
    .replace(/Easy Anti-Cheat/g, 'VAC')
    .replace(/\bEAC\b/g, 'VAC')
    .replace(/Epic Games/g, 'Steam')
    .replace(/Epic account/g, 'Steam account')
    .replace(/Epic accounts/g, 'Steam accounts')
    .replace(/Essential, Standard, or Elite/g, 'Lite, Pro, or Elite')
    .replace(/Essential, Standard, and Elite/g, 'Lite, Pro, and Elite')
    .replace(/Battle Royale/g, 'Trios ranked')
    .replace(/Zero Build/g, 'Turbo / unranked')
    .replace(/V-Bucks/g, 'premium cosmetics')
    .replace(/locker unlocks/g, 'cosmetic unlocks')
    .replace(/Fortnite seasons/g, 'ARC Raiders patches')
    .replace(/launching Fortnite/g, 'launching ARC Raiders')
    .replace(/Fortnite loader/g, 'ARC Raiders loader')
    .replace(/Fortnite —/g, 'ARC Raiders —')
    .replace(/Fortnite$/g, 'ARC Raiders')
    .replace(/  +/g, ' ')
    .trim();
}

function topicFor(q, index) {
  const n = index + 1;
  if (n >= 90) return 'hwid';
  if (/Cloud DMA|AWS|snapshot|Hyper-V|portal|preset backup|config.*patch|operator portal/i.test(q)) return 'cloud-dma';
  if (/HWID|hwid|spoof|hardware ban|disk serial|MAC and GPU|hardware flag/i.test(q)) return 'hwid';
  return 'products';
}

function answerFor(q, index) {
  const site = 'arcraidershacks.com';
  const n = String(index + 1).padStart(2, '0');

  if (/What is Arc Raiders Hacks/i.test(q)) {
    return `Arc Raiders Hacks & Cheats at ${site} sells maintained external hacks for ARC Raiders on Steam PC—ESP, silent aim, loot radar, Cloud DMA sync, and utilities like HWID Spoofer and Unlock All.`;
  }
  if (/Discord/i.test(q)) return `Discord is optional for browsing but recommended after purchase for loader help and #status patch alerts—not a requirement to run cheats.`;
  if (/Windows 10 and Windows 11/i.test(q)) return `Yes. Supported platforms are Windows 10 and 11 64-bit with the Steam ARC Raiders client. macOS and Linux are not supported.`;
  if (/VPN/i.test(q)) return `A VPN is not required. Use a stable connection; some operators use VPN for privacy, but it does not replace VAC risk or loader hygiene.`;
  if (/multiple Steam accounts/i.test(q)) return `One license maps to your portal login. You can switch Steam accounts on the same PC; do not share keys across unrelated hardware without HWID reset rules in the portal.`;
  if (/software ban on my Steam account/i.test(q)) return `An account VAC ban restricts that Steam profile. A new account on the same flagged PC may still fail until you address HWID enforcement—see our HWID Spoofer utility.`;
  if (/undetected\?$/i.test(q) || /Is Arc Raiders Hacks.*undetected/i.test(q)) return `We ship external builds with status banners and patch-day updates. No seller can promise permanent undetected status—check ${site} and Discord #status before every session.`;
  if (/Why choose/i.test(q)) return `Private maintenance, Cloud DMA preset sync on AWS, human support, and tiered Lite / Pro / Elite modules beat public paste sites that vanish after VAC waves.`;
  if (/What is Cloud DMA in/i.test(q)) return `Cloud DMA is our AWS-backed operator portal layer that stores ESP, aim, and utility slider presets—sync the same ranked profile to any Windows PC after login.`;
  if (/change how ESP looks/i.test(q)) return `Cloud DMA does not change in-game ESP art—it syncs your saved distances, colors, and filters so every PC matches your tuned layout.`;
  if (/set up.*ESP after I buy/i.test(q)) return `After checkout, download the loader, import the ranked preset from Cloud DMA, verify overlays in hideout or bot lobby, then enable modules before matchmaking.`;
  if (/HWID Spoofer for ESP/i.test(q)) return `ESP alone does not require a spoofer on a clean PC. Use HWID Spoofer when fresh Steam accounts die instantly on one machine—that indicates hardware flags.`;
  if (/aimbot undetected forever/i.test(q)) return `No. Cloud DMA keeps configs consistent and updated; it does not grant permanent immunity from VAC or reports. Use conservative aim presets.`;
  if (/HWID Spoofer to stay safe/i.test(q)) return `A spoofer helps hardware-flagged PCs, not account-only bans. Pair conservative cheat presets with status checks—it is not a substitute for safe play.`;
  if (/guarantee.*not get banned/i.test(q)) return `No legitimate vendor guarantees zero bans. Third-party tools always carry VAC and report risk—read our safety FAQ before checkout.`;
  if (/best.*hacks in 2026 on/i.test(q)) return `In 2026, maintained Lite ESP, Pro aim assist, and Elite full suites on ${site} lead private ARC Raiders hacks—with Cloud DMA sync and patch-day loader delivery.`;
  if (/Cloud DMA with the best plan/i.test(q)) return `Cloud DMA is included with Lite, Pro, and Elite. Import cloud presets after every tier purchase—no separate Cloud DMA SKU required.`;
  if (/When do I need.*HWID Spoofer/i.test(q) || /When should I use/i.test(q)) return `Use HWID recovery when new accounts fail within minutes on the same PC but work elsewhere. Skip spoofing for account-only VAC messages on a clean rig.`;
  if (/Unlock All a Trios/i.test(q)) return `Unlock All / Skin Changer is cosmetic preview only—it does not grant combat ESP or aim modules in ranked extractions.`;
  if (/speed or fly hacks/i.test(q)) return `We focus on ESP, radar, aim assist, loot filters, and utilities—not movement exploits that spike VAC telemetry.`;
  if (/buy first if I am new/i.test(q) || /buy first in 2026/i.test(q)) return `Start with Lite for ESP and Cloud DMA presets, or Pro if you need aim assist. Read status, run hideout verify, then Trios—add HWID tools only if hardware is flagged.`;
  if (/change wallhack/i.test(q)) return `Cloud DMA syncs wallhack thickness, colors, and distance caps—it does not alter game files; overlays stay external.`;
  if (/same as a generic external/i.test(q)) return `Cloud DMA adds AWS-hosted preset sync and patch snapshots on top of the external loader—not a random injector from forums.`;
  if (/When do I use.*HWID/i.test(q)) return `After you confirm hardware enforcement (multiple fresh accounts fail on one PC). Follow the portal spoof workflow before launching Steam again.`;
  if (/Which plan is safest/i.test(q)) return `Lite is lowest automation surface (ESP-focused). Pro adds aim assist; Elite adds bots and more modules. All tiers need conservative presets and patch-day discipline.`;
  if (/What does.*HWID Spoofer do/i.test(q)) return `It walks through disk, MAC, and GPU identifier rotation with compatibility scans and post-spoof verification—recovery for hardware flags, not magic unban.`;
  if (/HWID spoof replace/i.test(q)) return `No. Spoofing fixes hardware flags; Cloud DMA syncs cheat configs. Many operators need both on a flagged PC.`;
  if (/still need Lite, Pro, or Elite/i.test(q)) return `Yes. Cloud DMA and HWID tools are layers around the actual cheat tiers—you still purchase Lite, Pro, or Elite for ESP and aim modules.`;
  if (/software ban.*hardware flag/i.test(q)) return `Account bans restrict a Steam profile. Hardware flags block fresh accounts on the same PC. Symptoms and fixes differ—do not treat them as identical.`;
  if (/make a detected cheat safe/i.test(q)) return `No. Spoofing does not clean a leaked cheat build. Download the latest loader from the portal after patches and retire detected configs.`;
  if (/same Windows install/i.test(q)) return `Yes, with the guided portal workflow, restore point, and cold reboot steps—do not stack unrelated spoof tools.`;
  if (/work on console/i.test(q)) return `No. ARC Raiders hacks and HWID utilities target Steam on Windows PC only.`;
  if (/Unlock All need a spoofer/i.test(q)) return `Not on a clean PC. Add HWID Spoofer only if hardware enforcement blocks your Steam accounts.`;
  if (/include triggerbot/i.test(q)) return `Pro and Elite tiers may include trigger-style assists depending on preset—Cloud DMA syncs those sliders; check your tier feature list.`;
  if (/silent aim safer against VAC/i.test(q)) return `Silent aim with narrow FOV, smoothness, and visibility gates reduces obvious snaps—VAC still monitors behavior; Cloud DMA helps you keep safe presets synced.`;
  if (/What is ARC Raiders Cloud DMA/i.test(q)) return `AWS-backed cloud storage for operator presets: ESP ranges, aim curves, loot filters, and utility toggles tied to your portal login.`;
  if (/DMA card for/i.test(q)) return `Our Cloud DMA product name reflects cloud preset delivery—you use the external loader on PC; physical PCIe DMA is a separate hardware niche not required for portal sync.`;
  if (/Cloud DMA work with Lite/i.test(q)) return `Yes. Every Lite, Pro, and Elite key includes Cloud DMA sync—import ranked presets after login.`;
  if (/public injector/i.test(q)) return `No. Public injectors inject into the game process. Our stack is external overlays plus portal Cloud DMA—different architecture and update path.`;
  if (/Hyper-V setup fails/i.test(q)) return `Open Discord with your Windows version and error screenshot. Some laptops need firmware/virtualization enabled; Cloud DMA sync still works once the loader attaches.`;
  if (/run Cloud DMA on a laptop/i.test(q)) return `Yes on Windows laptops with discrete GPU recommended. Force the game and loader to the same GPU; reduce ESP density if FPS drops.`;
  if (/still download a loader/i.test(q)) return `Yes. Cloud DMA syncs configs; you still run the external ARC Raiders loader locally after portal download.`;
  if (/Cloud DMA available on console/i.test(q)) return `No. Cloud DMA and cheats are Windows Steam only.`;
  if (/include ESP and aimbot/i.test(q)) return `Cloud DMA syncs ESP and aim settings—it does not replace tier modules. Buy Lite/Pro/Elite for the actual features.`;
  if (/HWID Spoofer with Cloud DMA/i.test(q) || /Pairing HWID/i.test(q)) return `On flagged hardware, spoof first, verify identifiers, then pull Cloud DMA presets before enabling ESP—keeps config work from wasting on a blocked PC.`;
  if (/add.*Cloud DMA to any/i.test(q)) return `Cloud DMA is bundled with all cheat tiers—no add-on cart line. Utilities (HWID, UGC, Unlock All) are separate products.`;
  if (/Unlock All with a plan/i.test(q)) return `Optional. Elite includes Skin Changer; Unlock All standalone is for cosmetic-only preview without combat modules.`;
  if (/extra loot ESP filters/i.test(q)) return `Cloud DMA can sync loot filter profiles you save—extra categories depend on your preset, not a separate unlock.`;
  if (/loot ESP the same as.*Unlock All/i.test(q)) return `No. Loot ESP highlights containers and items in raids; Unlock All previews cosmetic skins locally—they solve different problems.`;
  if (/pick a.*plan/i.test(q)) return `Choose Lite for ESP-only, Pro for aim assist + ESP, Elite for full automation and priority patches. Compare cards on this page or read the features guide.`;
  if (/vs a generic external/i.test(q)) return `Generic externals lack AWS preset sync, patch snapshots, and maintained status banners—Cloud DMA keeps sliders consistent across PCs and updates.`;
  if (/premium cosmetics or cosmetic unlocks/i.test(q)) return `No. We do not sell in-game currency or official store unlocks—Unlock All is client-side cosmetic preview only.`;
  if (/HWID Spoofer with my first key/i.test(q)) return `Only if you already suspect hardware flags. New users on clean PCs should buy Lite or Pro first and add HWID if fresh accounts fail instantly.`;
  if (/top.*hacks on/i.test(q)) return `Player ESP, loot radar, silent aim, 2D raid radar, stream-proof overlays, and Cloud DMA sync—maintained on ${site} with Discord #status.`;
  if (/Cloud DMA add more hacks/i.test(q)) return `Cloud DMA adds preset delivery—it does not unlock extra modules beyond your Lite / Pro / Elite tier.`;
  if (/actually exist in 2026/i.test(q)) return `External ESP, aim assist, loot ESP, radar, stream-proof mode, and portal Cloud DMA on Steam PC—lobby cheat codes are practice-only, not ranked.`;
  if (/official.*cheat codes/i.test(q)) return `No official codes grant premium cosmetics or ranked advantages—practice lobbies differ from private hacks on Steam.`;
  if (/Unlock All a.*exploit/i.test(q)) return `No. Unlock All does not modify Steam inventory or grant VAC-safe combat advantages—it is local cosmetic preview.`;
  if (/actually add/i.test(q)) return `Maintained loaders, Cloud DMA on AWS, tiered ESP/aim modules, HWID and UGC utilities, and operator support—not in-game currency or console tools.`;
  if (/How safe are/i.test(q)) return `Safety depends on presets, patch discipline, and VAC risk acceptance. Use status banners, Cloud DMA snapshots, and conservative ranked profiles—no zero-ban promise.`;
  if (/Cloud DMA to use cheats correctly/i.test(q)) return `You can run without cloud sync, but Cloud DMA is the recommended way to keep ranked presets identical after patches and PC swaps.`;
  if (/Unlock All help me win/i.test(q)) return `No combat advantage—cosmetic preview only. Wins come from ESP, radar, and aim modules on Pro/Elite tiers.`;
  if (/Where do I start after/i.test(q)) return `Checkout Lite or Pro, portal download, import Cloud DMA ranked preset, verify in hideout, check #status, then queue Trios.`;
  if (/keep aimbot and wallhack undetected/i.test(q)) return `Cloud DMA keeps updated conservative presets synced—it does not permanently hide cheats from VAC or player reports.`;
  if (/private.*include Cloud DMA on AWS/i.test(q)) return `Yes at ${site}—private Lite, Pro, and Elite keys include AWS-backed Cloud DMA sync with the operator portal.`;
  if (/private hacks include.*Unlock All/i.test(q)) return `Elite bundles Skin Changer / Unlock All; other tiers can buy Unlock All standalone for cosmetics only.`;
  if (/How do I buy/i.test(q)) return `Pick a tier or utility on ${site}, click Buy now for secure checkout, then use portal email to download the loader and Cloud DMA presets.`;
  if (/HWID Spoofer with my first checkout/i.test(q)) return `Add HWID Spoofer at checkout only if you already have hardware-flag symptoms; otherwise start with the cheat tier.`;
  if (/checkout the same as a.*store/i.test(q)) return `No. Checkout sells cheat access and utilities—not official game currency or Steam store items.`;
  if (/best undetected.*2026/i.test(q)) return `Maintained external builds with status banners, Cloud DMA snapshots, and humanized aim presets—marketed as undetected until patches; always verify live status.`;
  if (/Cloud DMA replace a DMA card/i.test(q)) return `Cloud DMA names our AWS config pipeline—it is not a substitute for physical DMA hardware and does not remove the need for the external loader.`;
  if (/HWID Spoofer in 2026/i.test(q)) return `Same rules: use when hardware enforcement is suspected; optional on a verified clean PC.`;
  if (/Unlock All count as an undetected hack/i.test(q)) return `Cosmetic preview carries lower combat telemetry than aimbot but is still third-party software—use stream-proof and read tier docs.`;
  if (/AWS sync aimbot and ESP/i.test(q)) return `On login, the portal pulls your saved aim and ESP slider JSON to the loader—same FOV, smoothness, loot filters, and radar opacity on each PC.`;
  if (/included with private.*arcraidershacks/i.test(q)) return `Yes—Cloud DMA sync ships with every private Lite, Pro, and Elite key at ${site}.`;
  if (/ranked and Turbo.*preset backup/i.test(q)) return `Save separate Cloud DMA slots for Trios ranked vs Turbo—snapshots auto-version before major loader pushes so you can rollback.`;
  if (/physical DMA card/i.test(q)) return `Physical DMA reads memory from another device; our Cloud DMA product is cloud preset sync for external cheats—different products and setup paths.`;
  if (/restore.*configs after a patch/i.test(q)) return `Open portal → restore last Cloud DMA snapshot or import the patch-day ranked preset after #status shows green—never reuse pre-patch JSON blindly.`;
  if (/sync triggerbot and wallhack/i.test(q)) return `Yes—any slider stored in your cloud profile (wallhack thickness, trigger thresholds) syncs with ESP and aim fields.`;
  if (/operator portal — what gets saved/i.test(q)) return `ESP distances, colors, aim FOV/smoothness, loot filters, radar layout, stream-proof toggles, and named preset slots—not your Steam password.`;
  if (/external.*loader on VAC/i.test(q)) return `Cloud DMA presets load into the external loader before Steam launch—architecture stays external; follow patch-day checklist after VAC updates.`;
  if (/Best Cloud DMA.*ranked/i.test(q)) return `Buy Pro or Elite, import Ranked Safe cloud preset, verify ESP alignment, enable Cloud DMA auto-snapshot, queue Trios only after green status.`;
  if (/AWS delivery vs local config/i.test(q)) return `AWS delivery is authoritative—local edits should re-upload to cloud or they are overwritten on next sync from another PC.`;
  if (/help with undetected.*after updates/i.test(q)) return `Snapshots plus same-day loader builds reduce misconfigured offsets after patches—they do not guarantee VAC immunity.`;
  if (/snapshots updated for.*patches/i.test(q)) return `Major ARC Raiders patches trigger new loader builds and recommended Cloud DMA preset tags—watch Discord #status and portal banners.`;
  if (/Best.*HWID spoofer for VAC/i.test(q)) return `Our dedicated HWID Spoofer utility on ${site} includes compatibility scan and verification—built for Steam PC recovery workflows.`;
  if (/verify HWID spoofer worked/i.test(q)) return `Use the portal identifier checker after cold reboot—serials should differ from pre-spoof readings before you launch Steam or the loader.`;
  if (/HWID ban symptoms on Steam/i.test(q)) return `Fresh accounts ban or fail within minutes on one PC but work on another machine—often hardware enforcement rather than a single account VAC.`;
  if (/disk serial MAC and GPU/i.test(q)) return `The guided workflow rotates common hardware identifiers Windows and Steam telemetry may fingerprint—follow the portal list exactly.`;
  if (/spoof HWID before or after buying/i.test(q)) return `Buy cheats first on a clean PC. Spoof before buying only if you already cannot keep accounts alive on that hardware.`;
  if (/HWID spoofer vs Steam account ban/i.test(q)) return `Account ban = profile restricted. HWID flag = PC blocks new accounts. Spoofing targets hardware flags; appeals or new accounts target account bans.`;
  if (/sell a dedicated.*HWID spoofer/i.test(q)) return `Yes—HWID Spoofer is a standalone utility product with its own checkout and portal section at ${site}.`;
  if (/compatibility scan before/i.test(q)) return `Run the scan in the HWID portal before spoofing or installing loaders—conflicting tools get flagged early.`;
  if (/without HWID spoofer on a clean PC/i.test(q)) return `Yes. Most operators never need spoofing if accounts stay alive and VAC status is clean—add HWID only when symptoms match hardware flags.`;
  if (/Windows 11 and Steam.*launcher/i.test(q)) return `Supported on Windows 11 with current Steam client—run loader as admin once, allowlist folder in Defender, verify after Steam updates.`;
  if (/Permanent hardware ban.*can HWID spoofer help/i.test(q)) return `Sometimes for hardware-level flags—not for every enforcement type. Follow support guidance; permanent account VAC may still need a new Steam identity.`;

  return `See ${site} status, Discord #status, and our blog guides for detail on FAQ ${n}: ${q.replace(/\?$/, '')}. Contact support with your tier and Windows build if you need hands-on help.`;
}

const items = RAW.map((line, i) => {
  const q = transformQuestion(line.trim());
  const topic = topicFor(q, i);
  const a = answerFor(q, i);
  const id = `product-hub-${String(i + 1).padStart(3, '0')}`;
  return { id, topic, q, a };
});

const out = `import type { SiteFaqItem, FaqTopic } from './faq';

/** Product hub FAQ — ${items.length} items (Cloud DMA / HWID / Products filters). */
export const PRODUCT_HUB_FAQ_TOPICS = ['all', 'cloud-dma', 'hwid', 'products'] as const satisfies readonly FaqTopic[];

export const PRODUCT_HUB_FAQ_COPY = {
  eyebrow: 'FAQ',
  title: 'ARC Raiders product FAQ',
  subtitle: 'ARC Raiders Cloud DMA, HWID Spoofer, Unlock All, and cheat tiers on arcraidershacks.com.',
} as const;

export const productHubFaqs: SiteFaqItem[] = ${JSON.stringify(
  items.map((item) => ({ ...item, icon: 'faqMore' })),
  null,
  2,
)};
`;

writeFileSync(new URL('../src/data/productHubFaqs.ts', import.meta.url), out, 'utf8');
console.log('Wrote', items.length, 'product hub FAQs');
