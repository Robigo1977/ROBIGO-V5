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

await writeFile(indexPath, html, "utf8");
console.log("Inlined production CSS into dist/index.html");
