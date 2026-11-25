// One Line, No Deadline Met — u-markk-st-one-line-no-deadline-met-6adc00ce
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
// Node 22, standard library only. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, chosen after brainstorming several candidates:
// - "I outsourced my deadline to future me, and future me just ghosted me."
//   (tight, but the "future me" bit is a familiar meme format)
// - "My calendar and I are in couples therapy; the deadline was collateral damage."
//   (funny image, but the punch lands mid-sentence)
// - "I didn't miss the deadline, I gave it a head start out of respect — it won by three days."
//   (good turn, but the sports metaphor softens the excuse)
// - CHOSEN: self-referential — the entry IS the excuse being written, the
//   punch ("it took all week") lands at the end, and it sounds like something
//   a cornered person would actually say.
const LINE =
  "I missed the deadline because I was busy writing this excuse, and honestly, it took all week.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
