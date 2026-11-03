#!/usr/bin/env node
/**
 * Revisión rápida antes de publicar:
 *  - cada archivo que index.html y content.js enlazan (css/, js/, assets/) existe en site/
 *  - cada .js no tiene errores de sintaxis
 * Uso: node scripts/check.mjs   (también corre solo en GitHub en cada cambio)
 */
import { readFile, readdir, access } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const SITE = fileURLToPath(new URL("../site", import.meta.url));
let errors = 0;

const html = await readFile(join(SITE, "index.html"), "utf8");
const content = await readFile(join(SITE, "js/content.js"), "utf8");
const refs = [
  ...[...html.matchAll(/(?:src|href|content)="([^"#]+)"/g)].map(m => m[1]),
  ...[...content.matchAll(/src:"([^"]+)"/g)].map(m => m[1])
]
  .filter(u => /^(css|js|assets)\//.test(u))
  .map(u => u.split("?")[0]);
for (const r of new Set(refs)) {
  try { await access(join(SITE, r)); console.log("✓", r); }
  catch { console.error("✗ falta", r); errors++; }
}

async function jsFiles(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await jsFiles(p)));
    else if (p.endsWith(".js")) out.push(p);
  }
  return out;
}
for (const f of await jsFiles(SITE)) {
  try { execFileSync(process.execPath, ["--check", f], { stdio: "pipe" }); }
  catch (e) { console.error("✗ error de sintaxis en", f, "\n", String(e.stderr)); errors++; }
}

if (errors) { console.error(`${errors} problema(s). No publiques todavía.`); process.exit(1); }
console.log("Todo bien ✓");
