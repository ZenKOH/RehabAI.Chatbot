import { readFileSync, existsSync } from "node:fs";

const required = [
  "index.html",
  "assets/styles.css",
  "assets/app.js",
  "assets/knowledge.js",
  "manifest.webmanifest",
  "sw.js"
];

const missing = required.filter(path => !existsSync(path));
if (missing.length) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}

const html = readFileSync("index.html", "utf8");
const js = readFileSync("assets/app.js", "utf8");
const knowledge = readFileSync("assets/knowledge.js", "utf8");

const checks = [
  [html.includes("RehabAI"), "index.html should include RehabAI branding"],
  [html.includes("assets/app.js"), "index.html should load app.js"],
  [html.includes("assets/knowledge.js"), "index.html should load knowledge.js"],
  [js.includes("answerQuestion"), "app.js should include answer engine"],
  [knowledge.includes("Rehabilitation 2030"), "knowledge base should include rehabilitation evidence"],
  [knowledge.includes("Predetermined Change Control Plan"), "knowledge base should include AI device governance"],
  [knowledge.includes("AI in Healthcare Guidelines"), "knowledge base should include Singapore healthcare AI guidance"]
];

const failures = checks.filter(([ok]) => !ok).map(([, message]) => message);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Smoke tests passed.");
