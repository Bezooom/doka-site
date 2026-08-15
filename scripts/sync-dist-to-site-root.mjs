/**
 * Timeweb App Platform serves the project root (Caddy).
 * Astro writes to dist/; copy top-level dist outputs here so /index.html
 * exists even if «директория сборки» is empty or wrong.
 */
import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

if (!existsSync(join(dist, "index.html"))) {
  console.error("sync-dist-to-site-root: dist/index.html missing — run astro build first");
  process.exit(1);
}

const reserved = new Set([
  ".astro",
  ".env",
  ".git",
  ".github",
  ".gitignore",
  ".idea",
  ".vscode",
  "astro.config.mjs",
  "demo-assets",
  "DESIGN.md",
  "dist",
  "node_modules",
  "package-lock.json",
  "package.json",
  "public",
  "Screens",
  "scripts",
  "src",
]);

for (const name of readdirSync(dist)) {
  if (reserved.has(name)) continue;
  const from = join(dist, name);
  const to = join(root, name);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
}

console.log("sync-dist-to-site-root: OK (Timeweb docroot = project root)");
