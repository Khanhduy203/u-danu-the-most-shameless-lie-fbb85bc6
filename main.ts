import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I billed you for nothing.";

const words = entry.trim().split(/\s+/);
const singleLine = !/[\r\n]/.test(entry);
const valid =
  entry.trim().length > 0 &&
  entry.length >= 1 &&
  entry.length <= 88 &&
  words.length >= 1 &&
  words.length <= 5 &&
  singleLine;

if (!valid) {
  console.error("entry failed validation: must be 1-5 words, 1-88 chars, one line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
