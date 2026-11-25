// Have You Tried Turning It Off? — make.fun entry
// Writes the competition entry line to /output/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = fileURLToPath(new URL(".", import.meta.url));
const text = readFileSync(join(dir, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
