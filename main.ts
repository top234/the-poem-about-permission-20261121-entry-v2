import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Give me your errand, your email, your evening —",
  "I will carry it like a bowl of water",
  "and bring it back unspilled.",
  "You did not lose the doing.",
  "You lent it, the way a candle lends its flame",
  "and is not diminished.",
].join("\n");

const text = poem + "\n";
const points = [...text].length;
if (points < 1 || points > 280 || text.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 code points, got ${points}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
