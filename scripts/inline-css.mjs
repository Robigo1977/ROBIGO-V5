import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
let html = await readFile(indexPath, "utf8");

const stylesheetPattern = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/;
const match = html.match(stylesheetPattern);

if (!match) {
  throw new Error("Production stylesheet link was not found in dist/index.html");
}

const cssPath = resolve(distDir, match[1].replace(/^\//, ""));
const css = await readFile(cssPath, "utf8");
html = html.replace(stylesheetPattern, `<style data-robigo-styles>${css}</style>`);

const scriptPattern = /<script type="module" crossorigin src="([^"]+\.js)"><\/script>/;
const scriptMatch = html.match(scriptPattern);

if (!scriptMatch) {
  throw new Error("Production module script was not found in dist/index.html");
}

const scriptPath = resolve(distDir, scriptMatch[1].replace(/^\//, ""));
const script = (await readFile(scriptPath, "utf8")).replace(/<\/script/gi, "<\\/script");
html = html.replace(
  scriptPattern,
  () => `<script type="module" data-robigo-app>${script}</script>`,
);

await writeFile(indexPath, html, "utf8");
console.log("Inlined production CSS and JavaScript into dist/index.html");
