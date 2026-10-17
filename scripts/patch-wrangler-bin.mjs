#!/usr/bin/env node
/**
 * Cloudflare Pages dashboard often has Deploy command: npx wrangler deploy
 * That fails on Pages projects. After npm ci, patch local wrangler so
 * `wrangler deploy` becomes `wrangler pages deploy dist` when CF_PAGES* is set.
 */
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const binDir = join(process.cwd(), 'node_modules', 'wrangler', 'bin');
const wranglerJs = join(binDir, 'wrangler.js');
const backup = join(binDir, 'wrangler.js.orig');

if (!existsSync(wranglerJs)) {
  process.exit(0);
}

if (existsSync(backup)) {
  console.log('patch-wrangler-bin: already patched.');
  process.exit(0);
}

const original = readFileSync(wranglerJs, 'utf8');
if (original.includes('wrangler-pages-shim')) {
  process.exit(0);
}

copyFileSync(wranglerJs, backup);

const shim = `#!/usr/bin/env node
/** wrangler-pages-shim — auto-installed by scripts/patch-wrangler-bin.mjs */
const { spawn } = require("child_process");
const path = require("path");

const onCi =
  process.env.WORKERS_CI === "1" ||
  process.env.CF_PAGES === "1" ||
  process.env.CF_PAGES === "true" ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

let args = process.argv.slice(2);

if (onCi && args[0] === "deploy" && args[1] !== "pages") {
  const hasAssets = args.some((a) => String(a).startsWith("--assets"));
  if (!hasAssets) {
    const project = process.env.CF_PAGES_PROJECT_NAME || "arc-raider-hacks";
    console.log(
      "[wrangler-pages-shim] wrangler deploy → pages deploy dist (project: " +
        project +
        ")",
    );
    args = [
      "pages",
      "deploy",
      "dist",
      "--project-name",
      project,
      "--commit-dirty=true",
    ];
  }
}

const MIN_NODE_VERSION = "22.0.0";

function semiver(a, b) {
  const pa = String(a).split(".").map(Number);
  const pb = String(b).split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    const da = pa[i] || 0;
    const db = pb[i] || 0;
    if (da !== db) return da - db;
  }
  return 0;
}

if (semiver(process.versions.node, MIN_NODE_VERSION) < 0) {
  console.error("Wrangler requires Node.js v" + MIN_NODE_VERSION + "+");
  process.exit(1);
}

const cli = path.join(__dirname, "../wrangler-dist/cli.js");
const child = spawn(
  process.execPath,
  ["--no-warnings", ...process.execArgv, cli, ...args],
  { stdio: "inherit", env: process.env },
);
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
`;

writeFileSync(wranglerJs, shim, 'utf8');
console.log('patch-wrangler-bin: Pages deploy shim installed.');
