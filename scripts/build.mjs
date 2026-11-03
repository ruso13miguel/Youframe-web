#!/usr/bin/env node
/**
 * Prepara la carpeta dist/ para subir al hosting.
 * Copia site/ y cambia __VERSION__ por un número nuevo, para que los
 * navegadores descarguen el CSS y el JS actualizados (no los viejos en caché).
 *
 *   node scripts/build.mjs   ->  dist/  (esto es lo que se sube a public_html)
 */
import { cp, readdir, readFile, writeFile, rm } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SITE = join(ROOT, "site"), DIST = join(ROOT, "dist");
const version = (process.env.GITHUB_SHA || "").slice(0, 7) || Date.now().toString(36);
const TEXT = new Set([".html", ".css", ".js"]);

await rm(DIST, { recursive: true, force: true });
await cp(SITE, DIST, { recursive: true });

async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if (TEXT.has(extname(p))) {
      const t = await readFile(p, "utf8");
      if (t.includes("__VERSION__")) await writeFile(p, t.replaceAll("__VERSION__", version));
    }
  }
}
await walk(DIST);
console.log(`dist/ listo (versión ${version}). Sube su contenido a la carpeta pública del hosting.`);
