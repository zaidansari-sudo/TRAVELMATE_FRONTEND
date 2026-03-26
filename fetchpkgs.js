/**
 * Run this script ONCE with your Unsplash Access Key to auto-populate all package images.
 * Get a free key at: https://unsplash.com/developers
 *
 * Usage:
 *   UNSPLASH_KEY=your_key_here node fetch-package-images.js
 *   UNSPLASH_KEY=your_key_here node fetch-package-images.js --start=0 --end=50
 *   UNSPLASH_KEY=your_key_here node fetch-package-images.js --start=50 --end=100
 *
 * Results are printed as JSON at the end — copy them into your image store / CDN mapping.
 * Each key matches the image filename used in packages.ts (without the leading /packages/).
 *
 * BATCH COMMANDS (run one at a time, wait ~1 min between batches, or use different API keys):
 *   node fetch-package-images.js --start=0   --end=50
 *   node fetch-package-images.js --start=50  --end=100
 *   node fetch-package-images.js --start=100 --end=150
 *   node fetch-package-images.js --start=150 --end=200
 *   node fetch-package-images.js --start=200 --end=250
 *   node fetch-package-images.js --start=250 --end=300
 *
 * With different keys (fastest, no waiting):
 *   set UNSPLASH_KEY=KEY1 && node fetch-package-images.js --start=0   --end=50
 *   set UNSPLASH_KEY=KEY2 && node fetch-package-images.js --start=50  --end=100
 *   set UNSPLASH_KEY=KEY3 && node fetch-package-images.js --start=100 --end=150
 */

const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

// ─── Parse --start and --end CLI args ──────────────────────────────────────
const args = process.argv.slice(2);
let start = 0;
let end = Infinity;
args.forEach(arg => {
  if (arg.startsWith("--start=")) start = parseInt(arg.split("=")[1]);
  if (arg.startsWith("--end="))   end   = parseInt(arg.split("=")[1]);
});

function getAlreadyFetched() {
  return new Set([

    // previous batches
    "konkan1","konkan2","konkan3","konkan4","konkan5","maharashtra1",
    "himalayan1","himalayan2","himalayan3","shoja1","khajjiar1",
    "yulla1","himalayan4","himalayan5",
    "spiti1","spiti2","spiti3","spiti4","spiti5","spiti6","spiti7","spiti8",
    "ladakh1","ladakh2","ladakh3","ladakh4","kargil1","ladakh5",
    "ladakh6","kargil2",
    "zanskar1","ladakh7","ladakh8",
    "kashmir1","drung1",
    "landour1","landour2","mussoorie1","chakrata1","rishikesh1",
    "rishikesh2","landour3","rishikesh3",
    "auli1",
    "shekhawati1","shekhawati2","udaipur1","mountabu1","mountabu2",
    "shekhawati3","mountabu3","shekhawati4",

    // already completed in your last run
    "kutch1","kutch2",
    "chanderi1","chanderi2","chanderi3","chanderi4",
    "pachmarhi1","pachmarhi3",
    "odisha1","odisha2","odisha3","odisha4",
    "bastar2","bastar3","bastar4",
    "meghalaya1","meghalaya2","laitlum1","laitlum2","meghalaya4",
    "chettinad2","ooty1","ooty2","ooty3","chettinad3","ooty4","chettinad4",
    "hampi1","hampi2","gokarna1","hampi3","netravati1",
    "varkala1",
    "darjeeling1","darjeeling2","darjeeling3","darjeeling4",
    "varanasi1",
    "warwan1",
    "manali4",
    "lavasa1","lavasa2","tamhini1","mulshi1","tamhini2","lavasa3",
    "goa3","goa4","goa6",
    "coorg1","coorg2","coorg3","coorg4","coorg5","coorg6",
    "andaman2","andaman3","andaman6",
    "parvati1","parvati6",
    "jaisalmer1","jaisalmer2","jaisalmer3","jaisalmer4","jaisalmer5","jaisalmer6",
    "assam2",
    "jawai1","jawai2","jawai3","jawai4","jawai5",
    "kanha1","kanha2","kanha3","kanha4","kanha5",
    "sikkim1","sikkim4","sikkim6",
    "pondi3",
    "nagaland1",
    "sundarbans3",
    "valleyofflowers3","hemkund1","valleyofflowers4",
    "bhedaghat1","bhedaghat2","mandu1","mandu2","bhedaghat3","mandu3",
    "lakshadweep2","lakshadweep3",
    "mathura1","vrindavan1","mathura2"

  ]);
}

// ─── Already-fetched slugs — skip these ────────────────────────────────────
const alreadyFetched = getAlreadyFetched();



// ─── Search queries per image filename ─────────────────────────────────────
// Keys   = filename stem (e.g. "kutch1" → /packages/kutch1.png)
// Values = Unsplash search queries, ordered best-first
//
// Query-quality rules applied:
//   • Prefer landmark names + location + 1–2 visual descriptors
//   • Avoid generic adjectives ("beautiful", "amazing") — Unsplash ignores them
//   • Include the country/region to narrow geo-ambiguity
//   • 3–5 words is the sweet spot; longer queries hurt recall
// ────────────────────────────────────────────────────────────────────────────
const searches = {
"landour4":[
 "landour lal tibba himalaya view",
 "lal tibba landour uttarakhand",
 "landour uttarakhand mountain view"
],

"rishikesh4":[
 "rishikesh laxman jhula ganga river",
 "laxman jhula rishikesh uttarakhand",
 "rishikesh suspension bridge ganga"
],

"devprayag1":[
 "devprayag sangam alaknanda bhagirathi",
 "devprayag confluence uttarakhand india",
 "devprayag river confluence himalaya"
],

"chakrata2":[
 "chakrata uttarakhand deodar forest mountains",
 "chakrata himalaya village uttarakhand",
 "chakrata uttarakhand valley view"
],
}
const resultCache = {
  "landour4": [],
"rishikesh4": [],
"devprayag1": [],
"chakrata2": [],
  "kutch3": [],
  "kutch4": [],
  "pachmarhi2": [],
  "pachmarhi4": [],
  "bastar1": [],
  "meghalaya3": [],
  "tawang1": [],
  "tawang2": ["done"],
  "tawang3": [],
  "chettinad1": [],
  "varanasi2": ["done"],
  "varanasi3": ["done"],
  "manali6": [],
  "parvati4": [],
  "assam3": [],
  "assam4": [],
  "assam5": [],
  "assam6": [],
  "sikkim2": [],
  "sikkim3": [],
  "sikkim5": [],
  "pondi1": [],
  "pondi2": [],
  "tranquebar1": [],
  "mamallapuram1": [],
  "tranquebar2": [],
  "nagaland2": [],
  "nagaland3": [],
  "nagaland4": [],
  "nagaland5": [],
  "sundarbans1": [],
  "sundarbans2": [],
  "sundarbans4": [],
  "sundarbans5": [],
  "valleyofflowers1": [],
  "valleyofflowers2": [],
  "lakshadweep1": [],
  "lakshadweep4": [],
  "lakshadweep5": [],
  "govardhan1": [],
  "govardhan2": [],
  "vrindavan2": [],
  "vrindavan3": []
};

async function fetchImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`
    }
  });

  if (!res.ok) {
    console.log(`  ✗ HTTP ${res.status} for "${query}"`);
    return null;
  }

  const data = await res.json();
  return data.results?.[0]?.urls?.regular ?? null;
}

function getRemainingOnly(resultCache = {}) {
  const remaining = new Set();

  for (const [slug, urls] of Object.entries(resultCache)) {
    if (!urls || urls.length === 0) {
      remaining.add(slug);
    }
  }

  return remaining;
}
// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  if (!UNSPLASH_KEY) {
    console.error("ERROR: UNSPLASH_KEY environment variable is not set.");
    process.exit(1);
  }

  const allEntries = Object.entries(searches);
  const batch = allEntries.slice(start, end === Infinity ? undefined : end);

  console.log(`\n🚀 Running batch: entries ${start} → ${Math.min(end, allEntries.length)} of ${allEntries.length} total\n`);

  
const result = {};
const remaining = getRemainingOnly(resultCache);


for (const [slug, queries] of batch) {

  if (alreadyFetched.has(slug) || !remaining.has(slug)) {
    console.log(`⏭  Skipping: ${slug}`);
    continue;
  }

  console.log(`⬇  Fetching: ${slug}`);
  result[slug] = [];

  for (const q of queries) {
    const url = await fetchImage(q);
    if (url) {
      result[slug].push(url);
       // mark as fetched so it won't run again
  resultCache[slug] = ["done"];
      console.log(`   ✓ "${q}"`);
    } else {
      console.log(`   ✗ no result for "${q}"`);
    }
    await new Promise(r => setTimeout(r, 7000));
  }
}
  console.log("\n\n=== RESULT ===\n");
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);