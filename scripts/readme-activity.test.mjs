import assert from "node:assert/strict";
import { test } from "node:test";
import { END, START, applyBlock, clean, isBot, isShown, onlyBlockChanged, profileBlock, repoBlock } from "./readme-activity.mjs";

const item = { title: "feat: x", url: "https://github.com/o/r/pull/1", date: "2026-11-24" };
const block = (over = {}) => repoBlock({ date: "2026-11-25", days: 14, items: [item], hidden: 0, ...over });
const readme = `# T\n\nkeep\n\n${START}\nold\n${END}\n\ntail\n`;

test("replaces only the block", () => {
  const next = applyBlock(readme, block());
  assert.ok(next.startsWith("# T\n\nkeep\n\n") && next.endsWith("\n\ntail\n") && !next.includes("\nold\n"));
  assert.ok(onlyBlockChanged(readme, next));
});

test("a newer date alone changes nothing", () => {
  const once = applyBlock(readme, block());
  assert.equal(applyBlock(once, block({ date: "2026-11-27" })), once);
  assert.notEqual(applyBlock(once, block({ date: "2026-11-27", hidden: 2 })), once);
});

test("keeps CRLF line endings", () => {
  const next = applyBlock(readme.replace(/\n/g, "\r\n"), block());
  assert.equal(next.replace(/\r\n/g, "").includes("\n"), false);
});

test("refuses missing, repeated or reversed markers", () => {
  for (const bad of ["no markers", readme + START, `${END}\n${START}`, START]) assert.throws(() => applyBlock(bad, block()));
});

test("guard rejects any edit outside the block", () => {
  const next = applyBlock(readme, block());
  assert.equal(onlyBlockChanged(readme, next.replace("keep", "changed")), false);
  assert.equal(onlyBlockChanged(readme, `${next}more`), false);
  assert.equal(onlyBlockChanged("no markers", next), false);
});

test("titles cannot inject markup, mentions, table cells or markers", () => {
  const text = clean("a | [b](c) <img src=x> `d` @someone\nsecond");
  assert.ok(!/(^|[^\\])[|[\]`]/.test(text), text);
  assert.ok(!text.includes("<") && !text.includes("@") && !text.includes("\n"), text);
  assert.ok(!clean(`x ${START} ${END}`).includes("<!--"));
});

test("shows product changes and leaves out docs, deps, merges and generated commits", () => {
  for (const yes of ["feat(x): y", "fix: y", "perf: y", "Add a thing", "copilot: validate input", "Documents page"])
    assert.ok(isShown(yes), yes);
  for (const no of [
    "docs: y",
    "docs+www: y",
    "docs(x): y",
    "chore(deps): y",
    "ci: y",
    "copy: y",
    "Merge pull request #1 from x",
    "Update readme stats card",
    "Update metrics.svg - [Skip GitHub Action]",
    "",
  ])
    assert.ok(!isShown(no), no);
  assert.equal(isShown("feat: secret launch", /secret/i), false);
});

test("bots are not people", () => {
  assert.ok(isBot("github-actions[bot]") && isBot("x", "Bot") && !isBot("axxess-triaxis", "User"));
});

test("profile block lists only repositories with changes", () => {
  const repos = [
    { name: "A", url: "u", items: [item] },
    { name: "B", url: "v", items: [] },
  ];
  const text = profileBlock({ date: "2026-11-25", days: 14, repos });
  assert.ok(text.includes("[A](u)") && !text.includes("[B](v)"));
});
