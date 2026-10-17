#!/usr/bin/env node
/** wrangler-pages-shim — redirects `wrangler deploy` → `pages deploy dist` on Cloudflare CI */
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const onPages =
  process.env.CF_PAGES === "1" ||
  process.env.CF_PAGES === "true" ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

let args = process.argv.slice(2);

const workersCi = process.env.WORKERS_CI === "1";

if (args[0] === "deploy" && args[1] !== "pages") {
  const hasAssets = args.some((a) => a.startsWith("--assets"));
  if (!hasAssets && (onPages || workersCi)) {
    if (onPages && !workersCi) {
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
    } else {
      console.log(
        "[wrangler-pages-shim] wrangler deploy → deploy --assets=./dist",
      );
      args = ["deploy", "--assets=./dist"];
    }
  }
}

function resolveUpstreamCli() {
  try {
    return require.resolve("wrangler-upstream/wrangler-dist/cli.js");
  } catch {
    /* hoisted under repo root node_modules */
  }

  const repoRoot = path.join(__dirname, "..", "..", "..");
  const candidates = [
    path.join(repoRoot, "node_modules", "wrangler-upstream", "wrangler-dist", "cli.js"),
    path.join(__dirname, "..", "node_modules", "wrangler-upstream", "wrangler-dist", "cli.js"),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }

  console.error("wrangler-pages-shim: wrangler-upstream CLI not found. Run npm ci.");
  process.exit(1);
}

const cli = resolveUpstreamCli();
const child = spawn(
  process.execPath,
  ["--no-warnings", ...process.execArgv, cli, ...args],
  { stdio: "inherit", env: process.env },
);
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
