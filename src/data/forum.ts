export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-dota-map-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of hero, ward, rune, and smoke information covered by the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ARC Raiders ESP and radar setup guide', sourcePath: '/blog/dota-2-map-hack-setup/',
    answer: 'The guide covers player ESP, loot and sentry markers, extract timing, threat alerts, and last-seen positions. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a squad fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ARC Raiders ESP and radar setup guide', sourcePath: '/blog/dota-2-map-hack-setup/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a practice mode before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making your hero hard to control.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ARC Raiders FOV helper guide', sourcePath: '/blog/dota-2-zoom-hack-guide/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your hero, weapon ranges, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do delay settings affect combat assist modules?', upvotes: 32,
    excerpt: 'A practical question about timing, combo readability, and why the scripts guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ARC Raiders scripts for Trios progression', sourcePath: '/blog/dota-2-scripts-ranked-mmr/',
    answer: 'Delay settings control the spacing between automated actions. The guide recommends starting with slower timings and testing them in a practice setting before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-auto-combos', title: 'What is a good way to practice an auto combo?', upvotes: 29,
    excerpt: 'Use a repeatable hero setup, learn the sequence, and check each spell and item timing in a controlled lobby.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ARC Raiders auto combo combat assist modules', sourcePath: '/blog/dota-2-auto-combo-hero-scripts/',
    answer: 'Choose one hero and one combo to practice at a time. The guide walks through example sequences and explains how target selection and input order fit together.',
    detail: 'A custom lobby lets you repeat the sequence and see which steps need adjustment without the pressure of a live match.',
    tip: 'Learn the manual sequence first; that makes it much easier to spot when a configuration is mistimed.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'ARC Raiders Elite tier guide', sourcePath: '/blog/dota-2-elite-tier-guide/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Extended loot automation, Loot priority assist, Elite combat macros, and Unlock All.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on awareness features, while Pro adds combat assist tools; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'ARC Raiders Lite vs Pro: which tier fits you', sourcePath: '/blog/dota-2-lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as ESP, loot and extract information, and zoom. Pro adds aim automation features on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the additional combat modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Unlock All utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'ARC Raiders Unlock All guide', sourcePath: '/blog/dota-2-skin-changer-guide/',
    answer: 'The guide describes Unlock All as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-vac-cannot-verify', title: 'What should I do if EAC cannot verify my ARC Raiders install?', upvotes: 24,
    excerpt: 'Start with Steam file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Easy Anti-Cheat unable to verify ARC Raiders', sourcePath: '/blog/valve-anti-cheat-unable-to-verify/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify ARC Raiders files through Steam.',
    detail: 'It also recommends fully exiting Steam, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'ARC Raiders external cheat guide', sourcePath: '/blog/dota-2-external-cheat-guide/',
    answer: 'The article uses “external” to describe software that runs separately from the ARC Raiders process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever ARC Raiders receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for ARC Raiders', sourcePath: '/blog/dota-2-stream-proof-setup/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'ARC Raiders HWID spoofer after ban', sourcePath: '/blog/dota-2-hwid-spoofer-after-ban/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'ARC Raiders cheats features guide', sourcePath: '/blog/arc-raiders-cheats-features-guide/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-dota-2-product-tier', title: 'How do I choose the right ARC Raiders product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy ARC Raiders cheats in 2026', sourcePath: '/blog/how-to-buy-arc-raiders-cheats-2026/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'can-custom-lobby-cheat-codes-be-used-in-ranked', category: 'General', categoryTone: 'purple',
    title: 'Can I use ARC Raiders cheat codes in live Trios matchmaking?',
    excerpt: 'Quick answer: practice-mode drills do not carry into live Trios—paid ESP and aim tools are separate products.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'ARC Raiders training guide: practice workflows before Trios', sourcePath: '/blog/dota-2-cheat-codes-guide/',
    body: ['No. Official practice workflows and offline drills do not carry into live Trios matchmaking.', 'Use practice mode to learn weapon handling, reload timing, and loot routes. The guide explains the difference between training workflows and third-party ESP or aim packages from arcraidershack.net.'],
    comments: [
      { author: 'extract_lead', age: '1 hour ago', score: 24, body: 'Training drills are not the same as undetected overlays—read Lite vs Pro before checkout.' },
      { author: 'topside_scout', age: '48 min. ago', score: 11, body: 'I rehearse routes in practice, then enable conservative ESP filters before Trios.' },
      { author: 'trios_main', age: '35 min. ago', score: 8, body: 'Useful distinction. Practice settings are not live raid cheats.' },
    ],
  },
  {
    slug: 'how-to-enable-the-dota-2-console', category: 'General', categoryTone: 'purple',
    title: 'How do I turn on the ARC Raiders developer console?',
    excerpt: 'Open Settings → Options → Advanced and enable the console. Here is the quick setup from our walkthrough.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use cheat codes in ARC Raiders', sourcePath: '/blog/how-to-use-dota-2-cheat-codes/',
    body: ['ARC Raiders exposes limited debug or training options depending on build and mode. Follow the linked guide for the current steps—menus change after patches.', 'If a step fails, verify game files through Steam, restart, and check Discord #status before trying loader-related tools.'],
    comments: [
      { author: 'pc_raider', age: '3 hours ago', score: 17, body: 'Rebind keys in ARC Raiders settings if your layout does not match the guide screenshots.' },
      { author: 'support_fan', age: '2 hours ago', score: 9, body: 'Spectator or replay modes may block overlays—test in a live practice raid first.' },
    ],
  },
  {
    slug: 'practice-dota-2-ward-spots-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to practice extract scout routes?',
    excerpt: 'Rehearse loot paths in practice, then validate with low-profile ESP before Trios.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'ARC Raiders loot route training tips', sourcePath: '/blog/dota-2-console-cheats-tips/',
    body: ['Run the route in practice without overlays first, then enable Lite ESP with low distance caps and repeat the same path.', 'Adjust container and radar filters one at a time so the screen stays readable during live extractions.'],
    comments: [
      { author: 'loot_runner', age: '5 hours ago', score: 13, body: 'High-ground extracts are easier when you rehearse zip timing in practice first.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Reset ESP filters between runs so you know which marker type actually helped.' },
    ],
  },
  {
    slug: 'what-to-check-after-a-dota-2-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a ARC Raiders patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a practice mode before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'EAC patch day checklist', sourcePath: '/blog/vac-patch-day-checklist/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in a bot or practice raid before returning to Trios.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'farm_pattern', age: '8 hours ago', score: 12, body: 'Testing after the update before Trios is the part I used to skip. Now I check the build note and run a quick practice mode.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'dota-2-lite-or-pro-hero-scripts', category: 'Community', categoryTone: 'green',
    title: 'Lite or Pro: which tier includes combat assist modules?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on vision tools; Pro adds combat modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'ARC Raiders Lite vs Pro: feature comparison', sourcePath: '/blog/dota-2-lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on player ESP, loot markers, raid radar, FOV helpers, and stream-proof options. Pro adds aim assist, recoil control, target priority, and per-weapon profiles on the same stack.', 'The best fit depends on whether you need vision-only or combat assist. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'how-to-learn-hero-combos-in-practice-lobbies', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I practice weapon handling drills without waiting for a real match?',
    excerpt: 'Use practice mode to repeat gunfights, then tune Pro aim presets in the portal.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'ARC Raiders training guide: practice workflows before Trios', sourcePath: '/blog/dota-2-cheat-codes-guide/',
    body: ['Use practice mode or a private session to repeat the same engagement against ARC drones or training targets.', 'Match in-game sensitivity and FOV before tuning Pro smoothness—the linked guide covers conservative portal presets.'],
    comments: [
      { author: 'aim_tuner', age: '20 hours ago', score: 10, body: 'One weapon profile at a time until recoil control feels natural.' },
      { author: 'trios_support', age: '18 hours ago', score: 5, body: 'Low FOV first—max smoothness gets you reported fast.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
