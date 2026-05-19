import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const outZip = path.join(root, "cpanel-upload.zip");
const indexHtml = path.join(buildDir, "index.html");
const htaccess = path.join(buildDir, ".htaccess");

if (!fs.existsSync(indexHtml)) {
  console.error("make-cpanel-zip: run `pnpm run build` first (missing build/index.html).");
  process.exit(1);
}

if (!fs.existsSync(htaccess)) {
  console.warn("make-cpanel-zip: build/.htaccess missing — SPA routes may 404 on cPanel.");
}

if (fs.existsSync(outZip)) {
  fs.unlinkSync(outZip);
}

try {
  execSync(`zip -r "${outZip}" .`, { cwd: buildDir, stdio: "inherit" });
  console.log(
    `\nCreated ${outZip}\n→ In cPanel File Manager: upload it, then Extract into public_html (or your domain folder).\n→ You should see index.html, .htaccess, and assets/ in that folder — not a nested "build" folder.\n`
  );
} catch {
  console.error(
    "zip command failed. On macOS/Linux, ensure `zip` is installed, or manually zip everything *inside* build/ (not the build folder itself)."
  );
  process.exit(1);
}
