import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../", import.meta.url));
const sourceDir = join(repoRoot, "media-b64");
const outputDir = join(repoRoot, "public", "media");

await mkdir(outputDir, { recursive: true });

let files = [];
try {
  files = await readdir(sourceDir);
} catch {
  console.log("No encoded media directory found; skipping media decode.");
  process.exit(0);
}

const encodedFiles = files.filter((file) => file.endsWith(".b64"));

for (const file of encodedFiles) {
  const source = join(sourceDir, file);
  const outputName = basename(file, ".b64");
  const output = join(outputDir, outputName);
  const encoded = (await readFile(source, "utf8")).replace(/\s+/g, "");
  await writeFile(output, Buffer.from(encoded, "base64"));
  console.log(`Decoded media: ${outputName}`);
}

const splitGroups = new Map();
for (const file of files.filter((file) => /\.b64\.\d+$/.test(file))) {
  const outputName = file.replace(/\.b64\.\d+$/, "");
  const parts = splitGroups.get(outputName) ?? [];
  parts.push(file);
  splitGroups.set(outputName, parts);
}

for (const [outputName, parts] of splitGroups) {
  parts.sort();
  let encoded = "";
  for (const part of parts) {
    encoded += (await readFile(join(sourceDir, part), "utf8")).replace(/\s+/g, "");
  }
  await writeFile(join(outputDir, outputName), Buffer.from(encoded, "base64"));
  console.log(`Decoded split media: ${outputName}`);
}
