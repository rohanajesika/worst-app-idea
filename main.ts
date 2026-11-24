// GrassWatcher — The Worst App Idea Ever Pitched
//
// A one-sentence pitch for the worst, most useless app imaginable,
// written out deterministically to /output/entry.txt.
//
// The pitch: a deadpan founder, certain of every word, selling an app
// that solves a problem nobody on earth has — watching grass grow,
// live, in 4K, one millimetre at a time.

import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 240 characters: a specific app, a specific
// useless function, and the exact audience it is for. "The world's
// first" is the founder's deadpan certainty; the audience — homeowners
// who refuse to miss a single blade — is the mismatch that makes the
// uselessness funny: a problem nobody has, solved with total confidence.
const PITCH =
  "GrassWatcher is the world's first 4K livestream of your own lawn " +
  "growing, with a push alert for every millimetre, made for homeowners " +
  "who refuse to miss a single blade.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The grader mounts /output for us; create it if it is not there yet.
mkdirSync(OUTPUT_DIR, { recursive: true });

// Write exactly the pitch — no trailing newline, no extra text — so the
// entry is one clean sentence inside the 240-character gate.
writeFileSync(OUTPUT_FILE, PITCH, "utf8");
