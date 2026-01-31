import fs from "node:fs/promises";
import path from "node:path";

const apiKey = process.env.USDA_LFP_API_KEY; // from GitHub Secret
const stateArg = (process.argv[2] || "MI").trim();

if (!apiKey) {
  console.error("Missing USDA_LFP_API_KEY env var.");
  process.exit(1);
}

if (!/^[A-Za-z]{2}$/.test(stateArg)) {
  console.error("State must be a 2-letter abbreviation (example: MI).");
  process.exit(1);
}

const state = stateArg.toUpperCase();
const stateLower = state.toLowerCase();

// USDA Local Food Portal farmers market endpoint
const url = new URL("https://www.usdalocalfoodportal.com/api/farmersmarket");
url.searchParams.set("apikey", apiKey);
url.searchParams.set("state", state);

const res = await fetch(url, {
  headers: {
    Accept: "application/json",
    "User-Agent": "theharvestlist-ingest/1.0",
  },
});

const contentType = res.headers.get("content-type") || "";
const text = await res.text();

if (!res.ok) {
  console.error(`USDA API request failed: ${res.status} ${res.statusText}`);
  console.error(text.slice(0, 500));
  process.exit(1);
}

let data;
try {
  data = contentType.includes("application/json") ? JSON.parse(text) : JSON.parse(text);
} catch {
  console.error("Response was not valid JSON. First 500 chars:");
  console.error(text.slice(0, 500));
  process.exit(1);
}

const outDir = path.join("app", "app", "data", "usda", "markets");
await fs.mkdir(outDir, { recursive: true });

const outPath = path.join(outDir, `${stateLower}.json`);
await fs.writeFile(outPath, JSON.stringify(data, null, 2), "utf8");

const summary = Array.isArray(data)
  ? `array(${data.length})`
  : `object(keys=${Object.keys(data || {}).length})`;

console.log(`Saved USDA farmers markets for ${state} -> ${outPath} (${summary})`);
