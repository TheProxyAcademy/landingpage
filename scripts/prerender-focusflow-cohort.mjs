/**
 * Social crawlers (WhatsApp, iMessage, Facebook) do not run React.
 * Write build/focusflow-cohort/index.html with cohort OG tags so link previews work.
 * Static files take precedence over SPA rewrites on Vercel/Netlify.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FOCUSFLOW_COHORT_SEO,
  FOCUSFLOW_OG_IMAGE,
  SITE_ORIGIN,
} from "../src/components/FocusflowCohort/constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const buildDir = path.join(root, "build");
const indexHtml = path.join(buildDir, "index.html");
const outDir = path.join(buildDir, "focusflow-cohort");
const outHtml = path.join(outDir, "index.html");
const srcImage = path.join(root, "src/assets/focusflow/focusflow-1.png");
const publicImage = path.join(root, "public/focusflow/focusflow-1.png");

const SITE_NAME = "The Proxy Academy";
const fullTitle = `${FOCUSFLOW_COHORT_SEO.title} | ${SITE_NAME}`;
const canonical = `${SITE_ORIGIN}${FOCUSFLOW_COHORT_SEO.canonicalPath}`;

function escapeAttr(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function injectMeta(html) {
  const d = escapeAttr(FOCUSFLOW_COHORT_SEO.description);
  const t = escapeAttr(fullTitle);
  const u = escapeAttr(canonical);
  const img = escapeAttr(FOCUSFLOW_OG_IMAGE);
  const alt = escapeAttr(FOCUSFLOW_COHORT_SEO.imageAlt);

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);

  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${d}" />`
  );

  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${u}" />`
  );

  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${t}" />`
  );

  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${d}" />`
  );

  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${u}" />`
  );

  out = out.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${img}" />`
  );

  out = out.replace(
    /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image:alt" content="${alt}" />`
  );

  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${t}" />`
  );

  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="twitter:description" content="${d}" />`
  );

  // Fix accidental property= on twitter:description if present in source
  out = out.replace(
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${d}" />`
  );

  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${d}" />`
  );

  out = out.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${img}" />`
  );

  if (!out.includes('property="og:image:secure_url"')) {
    out = out.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${img}" />\n    <meta property="og:image:secure_url" content="${img}" />\n    <meta property="og:image:type" content="image/png" />`
    );
  }

  return out;
}

if (!fs.existsSync(indexHtml)) {
  console.warn("prerender-focusflow-cohort: build/index.html missing; skip.");
  process.exit(0);
}

fs.mkdirSync(path.dirname(publicImage), { recursive: true });
if (fs.existsSync(srcImage)) {
  fs.copyFileSync(srcImage, publicImage);
}

const html = injectMeta(fs.readFileSync(indexHtml, "utf8"));
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(publicImage, path.join(buildDir, "focusflow/focusflow-1.png"));
fs.writeFileSync(outHtml, html);
console.log("prerender-focusflow-cohort: wrote build/focusflow-cohort/index.html");
