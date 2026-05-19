import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const indexHtml = path.join(buildDir, "index.html");
const notFoundHtml = path.join(buildDir, "404.html");

if (!fs.existsSync(indexHtml)) {
  console.warn("copy-spa-fallback: build/index.html missing; skip (run after vite build).");
  process.exit(0);
}

fs.copyFileSync(indexHtml, notFoundHtml);
console.log("copy-spa-fallback: wrote build/404.html (GitHub Pages / static hosts).");
