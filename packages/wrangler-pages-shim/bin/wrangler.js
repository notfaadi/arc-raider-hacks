#!/usr/bin/env node
/** wrangler-pages-shim package — used via npm overrides for Cloudflare Pages Git deploy */
const { spawn } = require("child_process");
const path = require("path");
const { createRequire } = require("module");

const requireFromShim = createRequire(path.join(__dirname, "..", "package.json"));

const onPages =
  process.env.CF_PAGES === "1" ||
  process.env.CF_PAGES === "true" ||
  Boolean(process.env.CF_PAGES_COMMIT_SHA);

let args = process.argv.slice(2);

if (onPages && args[0] === "deploy" && args[1] !== "pages") {
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

let cli;
try {
  cli = requireFromShim.resolve("wrangler-upstream/wrangler-dist/cli.js");
} catch {
  cli = path.join(__dirname, "..", "node_modules", "wrangler-upstream", "wrangler-dist", "cli.js");
}

const child = spawn(
  process.execPath,
  ["--no-warnings", ...process.execArgv, cli, ...args],
  { stdio: "inherit", env: process.env },
);
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
