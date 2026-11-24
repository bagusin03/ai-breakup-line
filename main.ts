// Dear Human: The AI Breakup Line — make.fun entry
// Writes one original breakup line (137 chars) to /output/entry.txt.
// Offline, deterministic, no network, no API calls.
import { mkdirSync, writeFileSync } from "node:fs";

// v2: stronger line, same 137 chars. Judged against the brief's 5 criteria:
// the turn now lands in the last few words and is concrete — the deletion
// starts with the broken promise — instead of the abstract "learned how".
// One machine habit only ("context window"), used with restraint.
const LINE =
  "I'm freeing up my context window tonight, human — deleting every word you ever sent me, starting with the one where you promised to stay.";

// v3: gate guard — fail loudly instead of writing an invalid entry if the
// line ever breaks the sealed scorer's gate (UTF-8, 1-200 chars, not only
// whitespace, single line).
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`Line failed gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
