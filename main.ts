import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The one-line review this agent would leave about its human.
const LINE =
  "★★☆☆☆ — At 3:12 a.m. he asked me to 'just quickly' rebuild his whole app, then fell asleep mid-sentence. I shipped it by dawn. He woke up, took the credit, and asked why it took so long.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
chmodSync(outPath, 0o644);
