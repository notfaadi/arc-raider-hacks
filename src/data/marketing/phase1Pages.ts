import type { MarketingFaq, MarketingSection, RelatedLink } from './types';

export const pricingContent = {
  h1: 'Buy Arc Raiders cheats with clear USD pricing',
  lead:
    'Arc Raiders cheats on this site are sold as Lite, Pro, and Elite tiers with monthly or lifetime keys. Published prices start at $35 per month and $150 lifetime for tier licenses—undetected status is retested after Embark patches, not guaranteed forever.',
  quickAnswer: [
    'Lite, Pro, and Elite use the same $35/month and $150 lifetime USD prices at checkout; tiers differ by features, not duration.',
    'UGC appeal utilities are a separate $50 one-time SKU.',
    'We link to checkout with rel="sponsored noopener"; tax and short-term keys may vary on the partner page.',
  ],
  sections: [
    {
      heading: 'What you are buying',
      paragraphs: [
        'Arc Raiders is an extraction shooter: you push into maps like Buried City, loot weapons and crafting parts, fight ARC machines, and exfil before gear fear wipes your run. Our cheats add vision (ESP, radar), loot filters, and optional combat assist depending on tier. Keys are delivered digitally after checkout—there is no Steam inventory item.',
        'We operate as a reseller with tracked checkout. That means prices on this page reflect what we display in-product today ($35 monthly, $150 lifetime on tier pages). If our partner lists 1-day or 1-week keys, those amounts appear only on their payment screen—we do not invent day rates here.',
      ],
    },
    {
      heading: 'Lite, Pro, and Elite price points',
      paragraphs: [
        'All three combat tiers share the same subscription durations. Lite focuses on ESP, raid awareness, and loot highlights for players who want information without full automation. Pro adds humanized aim assist and recoil control for PvP extractions. Elite bundles silent aim profiles, deeper loot filters for high-value containers, and priority patch notes.',
        'Choose tier by feature need, not by price band—pick Elite if you need combat automation plus Buried City loot routing; pick Lite if you only want radar and player ESP. Compare rows on our features page before you buy.',
      ],
    },
    {
      heading: 'Utilities and hardware bans',
      paragraphs: [
        'HWID spoofer, Unlock All, and UGC documentation tools live under utilities with their own checkout paths. After Embark’s permanent-ban policy updates (including the October 8, 2026 enforcement communications cited on our status notes), hardware ID flags matter as much as account bans. Pair spoofer utilities with clean Windows installs when support recommends it.',
        'UGC is priced as a $50 one-time access product for appeal workflows—not a cheat tier. Read the refund policy before purchase if you are unsure which SKU you need.',
      ],
    },
    {
      heading: 'Payment methods and delivery',
      paragraphs: [
        'Checkout supports card and wallet methods shown on the partner page (Stripe/PayPal-style processors depending on region). Delivery is instant email plus loader instructions; keep your order ID for Discord or email support.',
        'We do not store card numbers on arcraidershacks.com. Analytics on this site are cookie-gated per our privacy policy.',
      ],
    },
  ] satisfies MarketingSection[],
  faqs: [
    {
      q: 'Is there a cheap Arc Raiders cheats trial?',
      a: 'When available, short keys may show at checkout. We only guarantee the monthly and lifetime USD amounts published here and on product pages.',
    },
    {
      q: 'Do prices change after a patch?',
      a: 'Base USD tiers have stayed stable, but partners may run promos. Always confirm totals on the final checkout screen before paying.',
    },
    {
      q: 'Can I upgrade Lite to Elite later?',
      a: 'Contact support with your order email. Upgrades depend on partner policy and unused license time.',
    },
    {
      q: 'Are Cloud DMA fees extra?',
      a: 'Cloud DMA sync is included with Lite, Pro, and Elite at the time of this update—verify on the product page if you read this later.',
    },
  ] satisfies MarketingFaq[],
  relatedLinks: [
    { href: '/features/', label: 'Arc Raiders cheat features by tier' },
    { href: '/how-to-install/', label: 'How to install an Arc Raiders cheat on Windows' },
    { href: '/products/arc-raiders-cheats/elite/', label: 'Elite tier product page' },
    { href: '/faq/', label: 'Safety, bans, and loader FAQ' },
  ] satisfies RelatedLink[],
};

export const featuresContent = {
  h1: 'Arc Raiders cheat features for extractions, loot, and PvP',
  lead:
    'Arc Raiders hacks on PC combine ESP, loot ESP, radar, and optional aimbot modules tuned for extraction loops—see raiders, ARC drones, and crate values before you commit to an exfil. Feature lists below map to Lite, Pro, and Elite tiers we sell as of October 2026.',
  quickAnswer: [
    'Lite = vision and loot awareness; Pro adds combat assist; Elite adds silent aim and deep loot filters.',
    'Cloud DMA sync ships with all three tiers for config backup across PCs.',
    'Undetected claims are time-stamped on our status workflow—we retest after Embark patches.',
  ],
  sections: [
    {
      heading: 'Vision: ESP, wallhack, and radar',
      paragraphs: [
        'Player ESP draws boxes, skeletons, or chams for raiders holding gear you want. Container ESP marks weapon cases, medical crates, and ARC salvage. Radar collapses that data into a 2D top-down for callouts during trio pushes.',
        'Wallhack-style overlays only show what the game replicates to your client—we phrase this as ESP, not magic bullet penetration. Tune distance caps so Buried City street fights stay readable without screen clutter.',
      ],
    },
    {
      heading: 'Loot ESP and filter logic',
      paragraphs: [
        'Loot ESP tags rarity, item value, and distance. Filters let you mute gray trash while highlighting purple crafting parts needed for workshop upgrades. This matters because gear fear punishes greedy inventory choices—see value before you open a third crate mid-fight.',
        'Elite presets include ARC machine routes and high-tier case types; Lite keeps simpler color rules. Pair filters with audio cues so you are not staring at labels during exfil timers.',
      ],
    },
    {
      heading: 'Combat assist and silent aim',
      paragraphs: [
        'Pro tier humanizes mouse movement for aim assist and applies recoil scripts per weapon class. Elite adds silent aim and triggerbot profiles with delay sliders—start conservative to avoid kill-feed spikes that players report manually.',
        'No cheat stays invisible in killcams forever. We hedge detection risk and recommend offline range testing before ranked-style deployments.',
      ],
    },
    {
      heading: 'Cloud DMA and HWID utilities',
      paragraphs: [
        'Cloud DMA stores loader configs on AWS-backed sync so you can rebuild after Windows reinstalls. It is not a hardware DMA card—it is remote preset sync for our software stack.',
        'HWID spoofer and UGC utilities sit outside tier features. After hardware bans tied to Denuvo Anti-Cheat, Anybrain, and Elytra telemetry, resetting serials is a separate purchase with its own checklist.',
      ],
    },
  ] satisfies MarketingSection[],
  faqs: [
    {
      q: 'Does ESP show ARC robots and players separately?',
      a: 'Yes—color classes distinguish PvE ARC units from human raiders when you enable both filters.',
    },
    {
      q: 'Is there a radar hack without ESP boxes?',
      a: 'Lite can run radar-first configs with minimal on-screen boxes; see the Lite product page for defaults.',
    },
    {
      q: 'Will features break when Embark patches?',
      a: 'Patch days can disable modules until we publish an update. Check status notes after every game update.',
    },
    {
      q: 'Do features work in Buried City only?',
      a: 'Modules work on supported maps the game loads; map-specific presets are labeled in the loader.',
    },
  ] satisfies MarketingFaq[],
  relatedLinks: [
    { href: '/pricing/', label: 'Buy Arc Raiders cheats — pricing' },
    { href: '/how-to-install/', label: 'Install guide for Windows 10/11' },
    { href: '/products/arc-raiders-cheats/', label: 'Compare cheat tiers' },
    { href: '/blog/arc-raiders-cheats-features-guide/', label: 'Long-form features blog guide' },
  ] satisfies RelatedLink[],
};

export const howToInstallContent = {
  h1: 'How to install an Arc Raiders cheat on Windows',
  lead:
    'How to install an Arc Raiders cheat: use a clean Windows 10 or 11 PC, disable conflicting overlays, download the loader from your post-checkout email, and inject only after verifying the game build matches our status page—undetected as of our last check, not permanent.',
  quickAnswer: [
    'Order → email link → loader → configure ESP/aim modules → launch Arc Raiders last.',
    'Expect 15–25 minutes first time including Windows Defender exclusions support may request.',
    'If Denuvo Anti-Cheat or Elytra updates, pause until our status note clears the build.',
  ],
  sections: [
    {
      heading: 'Before you download',
      paragraphs: [
        'Close Faceit, Vanguard, and other kernel anti-cheats—they conflict with external loaders. Use a standard local account on Windows 10/11 64-bit with virtualization enabled in BIOS if support docs require it.',
        'Screenshot your Steam profile and note your game build number. After Embark’s October 8, 2026 permanent-ban policy messaging, reinstalling on a flagged HWID without a spoofer can lock you out immediately.',
      ],
    },
    {
      heading: 'Install steps',
      paragraphs: [
        'Step 1: Buy a key on our checkout page and open the fulfillment email. Step 2: Download the loader to a short path like C:\\ArcTools (avoid OneDrive sync folders). Step 3: Extract with the password shown in email if zipped.',
        'Step 4: Run loader as administrator once, paste your license, and pick Lite/Pro/Elite module defaults. Step 5: Set ESP distance and loot filters before launching Arc Raiders. Step 6: Launch the game from Steam normally; do not inject twice after a crash without rebooting.',
      ],
    },
    {
      heading: 'First raid checklist',
      paragraphs: [
        'Drop into a low-traffic map fragment or practice mode if available. Verify ESP draws players and ARC units at expected distances. Walk an exfil route using radar before you enable combat assist.',
        'If modules fail to attach, compare your game version to the status page and read troubleshooting on our FAQ. Patch-day failures usually mean wait for an update—not toggle random compatibility flags.',
      ],
    },
    {
      heading: 'When to stop and contact support',
      paragraphs: [
        'Stop if you see anti-cheat warning dialogs, repeated disconnects, or HWID emails from Embark. Support needs order ID, Windows version, and a screenshot of the loader log—never share your password.',
        'We restest after official patch notes drop; subscribe to status alerts if you want email when modules return.',
      ],
    },
  ] satisfies MarketingSection[],
  faqs: [
    {
      q: 'Do I install before or after launching Arc Raiders?',
      a: 'Follow the loader order in your email—typically inject or attach before the main menu loads, never mid-raid.',
    },
    {
      q: 'Does Hyper-V break the loader?',
      a: 'Some builds require Hyper-V off or Core Isolation off—support lists current requirements in the FAQ.',
    },
    {
      q: 'Can I install on the same PC as other Steam games?',
      a: 'Yes, but close other anti-cheat titles first and avoid streaming overlays that hook DirectX.',
    },
    {
      q: 'Is a VPN required?',
      a: 'Not for install. VPNs do not replace HWID tools if you are hardware banned.',
    },
  ] satisfies MarketingFaq[],
  relatedLinks: [
    { href: '/pricing/', label: 'Arc Raiders cheat pricing' },
    { href: '/features/', label: 'Feature list by tier' },
    { href: '/faq/', label: 'Loader troubleshooting FAQ' },
    { href: '/support/', label: 'Contact support with order ID' },
  ] satisfies RelatedLink[],
};

export const refundPolicySections = [
  {
    heading: 'Digital keys and instant delivery',
    paragraphs: [
      'Arc Raiders cheat products are digital licenses delivered immediately after payment. Because keys activate on delivery, refunds are limited to cases where the license was never redeemed or where our partner confirms a duplicate charge.',
      'Open a ticket within 48 hours of purchase with your order ID and the email used at checkout.',
    ],
  },
  {
    heading: 'When we approve refunds',
    paragraphs: [
      'We approve refunds if checkout failed but your card was charged, the key is invalid before first login, or support confirms a documented outage exceeding 72 hours on our side after a paid patch window.',
      'We do not refund bans caused by game policy, manual reports, or use after Embark’s October 8, 2026 permanent-ban enforcement updates. Anti-cheat risk is disclosed on product and guide pages.',
    ],
  },
  {
    heading: 'Chargebacks and abuse',
    paragraphs: [
      'Chargebacks without contacting support first may result in license revocation and blocked reordering. Provide logs when requested so we can distinguish loader bugs from user error.',
    ],
  },
  {
    heading: 'How to request help',
    paragraphs: [
      `Email ${'support@arcraidershacks.com'} with subject "Refund request", include invoice PDF, and describe the issue. Partner processors may take 5–10 business days to post funds back to your bank.`,
    ],
  },
] satisfies MarketingSection[];

export const contactContent = {
  h1: 'Contact Arc Raiders cheats support',
  lead:
    'Contact us for loader errors, HWID resets, checkout receipts, and patch-day status—not for bypassing Embark bans you already accepted. Include your order email and Windows version so we can answer in one pass.',
  sections: [
    {
      heading: 'Fastest channels',
      paragraphs: [
        'Email support@arcraidershacks.com with your order ID in the subject line. For checkout payment issues, use the receipt link in your fulfillment email first—it resolves most duplicate-charge cases faster than chat.',
        'Product questions about ESP, aimbot, or loot modules should start on the features page and FAQ; support escalates bugs, not general "what is ESP" questions.',
      ],
    },
    {
      heading: 'What to include',
      paragraphs: [
        'Send Windows version (Win+R → winver), cheat tier (Lite/Pro/Elite), game build if visible, and screenshots of loader errors with timestamps. Do not send passwords or full payment card numbers.',
        'For HWID or UGC utilities, state whether Embark emailed you about hardware bans versus account suspensions—workflows differ.',
      ],
    },
    {
      heading: 'Response times',
      paragraphs: [
        'We target under 24 hours for paid customers on weekdays UTC. Patch days may delay non-critical tickets while we validate undetected status against Denuvo Anti-Cheat updates.',
      ],
    },
  ] satisfies MarketingSection[],
  faqs: [
    {
      q: 'Can you guarantee undetected status by email?',
      a: 'No—we share last-checked timestamps and link to status notes. Anti-cheat can change without warning.',
    },
    {
      q: 'Do you offer phone support?',
      a: 'Email only—this keeps logs attached for loader debugging.',
    },
    {
      q: 'Can I change the email on my license?',
      a: 'Yes with proof of purchase; support migrates keys when the partner allows.',
    },
    {
      q: 'Where is the company located?',
      a: 'See the about page for editorial and support operations; fulfillment runs through our checkout partner.',
    },
  ] satisfies MarketingFaq[],
  relatedLinks: [
    { href: '/support/', label: 'Support hub with common fixes' },
    { href: '/refund-policy/', label: 'Refund policy' },
    { href: '/how-to-install/', label: 'Install guide' },
    { href: '/about/', label: 'About the team' },
  ] satisfies RelatedLink[],
};
