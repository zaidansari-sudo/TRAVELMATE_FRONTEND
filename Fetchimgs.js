/**
 * Run this script ONCE with your Unsplash Access Key to auto-populate all images.
 * Get a free key at: https://unsplash.com/developers
 * 
 * Usage: UNSPLASH_KEY=your_key_here node fetch-images.js
 */

const UNSPLASH_KEY = process.env.UNSPLASH_KEY;

const alreadyFetched = [
  "manali-leh-bike-expedition",
  "spiti-valley-circuit-ride",
  "rajasthan-desert-heritage-ride",
  "konkan-coastal-highway-ride",
  "northeast-silk-route-darjeeling-ride",

  "kutch-rann-desert-ride",
  "maharashtra-ghats-adventure-ride",
  "zanskar-valley-bike-expedition",
  "northeast-tribal-circuit-ride",

  "andaman-islands-ride",
  "kerala-western-ghats-ride"
];

const searches = {
  "manali-leh-bike-expedition": [
    "manali mountain highway",
    "rohtang pass snow road",
    "pangong lake ladakh",
    "khardung la pass",
    "nubra valley sand dunes",
    "leh monastery ladakh",
    "bactrian camel desert",
    "royal enfield mountain road",
    "baralacha la high altitude",
    "shanti stupa leh",
    "pangong tso sunrise",
    "thiksey monastery ladakh",
  ],
  "spiti-valley-circuit-ride": [
    "spiti valley cold desert",
    "key monastery spiti",
    "chandratal moon lake",
    "kunzum pass himachal",
    "kinnaur kailash mountain",
    "tabo monastery ancient",
    "kibber village high altitude",
    "spiti river gorge",
    "dhankar monastery cliff",
    "kaza spiti valley town",
  ],
  "rajasthan-desert-heritage-ride": [
    "jaisalmer golden fort",
    "mehrangarh fort jodhpur",
    "jodhpur blue city",
    "thar desert sand dunes camel",
    "sam sand dunes sunset rajasthan",
    "udaipur lake palace",
    "pushkar lake ghats",
    "chittorgarh fort",
    "bikaner junagarh fort",
    "rajasthan desert highway motorcycle",
    "rajasthani folk dance",
    "desert camp stars rajasthan",
  ],
  "konkan-coastal-highway-ride": [
    "konkan coastal road palm trees",
    "murud janjira sea fort",
    "sindhudurg fort sea",
    "tarkarli beach clear water",
    "goa palolem beach",
    "amboli waterfall ghat",
    "malvan fishing village",
    "old goa basilica",
    "konkan ferry crossing",
    "goa fontainhas portuguese",
  ],
  "northeast-silk-route-darjeeling-ride": [
    "darjeeling kanchenjunga sunrise",
    "darjeeling tea garden",
    "darjeeling toy train",
    "zuluk zigzag hairpin sikkim",
    "nathang valley plateau sikkim",
    "tsomgo changu lake sikkim",
    "gangtok sikkim mountain",
    "kalimpong hills west bengal",
    "old silk route forest road",
    "nathula pass border",
  ],
  "kutch-rann-desert-ride": [
    "white rann kutch salt flat",
    "dholavira harappan ruins",
    "rann utsav tent city",
    "indian wild ass little rann",
    "kutch embroidery craft village",
    "flamingo rann kutch",
    "kala dungar sunset kutch",
    "bhuj palace gujarat",
    "mandvi beach dhow boat",
    "rogan art nirona kutch",
  ],
  "maharashtra-ghats-adventure-ride": [
    "western ghats lush green road",
    "amboli waterfall maharashtra",
    "ghat road switchback sahyadri",
    "kolhapur temple maharashtra",
    "panhala fort deccan",
    "sawantwadi palace maharashtra",
    "malvan beach sindhudurg",
    "ratnagiri mango orchard",
    "misty ghat morning fog",
  ],
  "tamil-nadu-hills-ride": [
     "kolli hills hairpin bends",
  "valparai tea estate anamalai",
  "yercaud coffee plantation",
  "agaya gangai waterfall",
  "wild elephant road crossing",
  "nilgiri hills shola forest",
  "grass hills anamalai viewpoint",
  "shevaroy temple yercaud",
  "coimbatore hills road",

  "kolli hills 70 hairpin bends",
  "valparai 40 hairpin bends road",
  "aliyar dam valparai road",
  "pollachi to valparai road",
  "tamil nadu hill road motorcycle",
  "anamalai hills tea plantation",
  "yercaud hill station lake",
  "valparai tea estate road fog",
  ],
  
  "zanskar-valley-bike-expedition": [
    "zanskar river gorge turquoise",
    "phugtal monastery cliff",
    "karsha monastery zanskar",
    "padum village zanskar",
    "pensi la pass glacier",
    "drang drung glacier",
    "suru valley nun kun glacier",
    "rangdum monastery lahaul",
    "kargil ladakh",
    "lamayuru monastery moonland",
    "zanskar indus confluence",
    "himalayan motorcycle expedition",
  ],
  "northeast-tribal-circuit-ride": [
    "living root bridge meghalaya",
    "dawki river crystal clear",
    "cherrapunji waterfall",
    "nohkalikai falls meghalaya",
    "mawlynnong village meghalaya",
    "hornbill festival nagaland",
    "kohima war cemetery",
    "dzukou valley wildflowers",
    "loktak lake floating islands",
    "shillong meghalaya hills",
    "northeast india forest road",
    "imphal manipur",
  ],
  "andaman-islands-ride": [
    "andaman beach white sand turquoise",
    "havelock island snorkeling coral",
    "cellular jail port blair",
    "andaman trunk road rainforest",
    "baratang mangrove creek",
    "andaman sea tropical",
    "ross island ruins andaman",
    "diglipur north andaman",
    "andaman sea turtle coral reef",
    "andaman island sunset",
  ],
  "kerala-western-ghats-ride": [
    "munnar tea garden kerala",
    "eravikulam nilgiri tahr",
    "wayanad forest kerala",
    "chembra peak trek wayanad",
    "coorg coffee plantation",
    "abbey falls coorg",
    "dubare elephant camp kaveri",
    "ooty nilgiri mountain railway",
    "gudalur ghat nilgiri",
    "top station munnar viewpoint",
    "wayanad tribal village",
    "doddabetta peak ooty",
  ],
};

async function fetchImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  if (!res.ok) {
    console.error(`Error for "${query}":`, res.status, res.statusText);
    return null;
  }

  const data = await res.json();

  if (data.results && data.results[0]) {
    return data.results[0].urls.regular;
  }

  return null;
}

async function main() {
  const result = {};
  for (const [slug, queries] of Object.entries(searches)) {
  if (alreadyFetched.includes(slug)) {
    console.log(`⏭ Skipping: ${slug}`);
    continue;
  }

  console.log(`Fetching: ${slug}`);
  result[slug] = [];

  for (const q of queries) {
    const url = await fetchImage(q);
    if (url) result[slug].push(url);

    await new Promise((r) => setTimeout(r, 7000)); 
  }
}
  console.log("\n\n=== RESULT ===\n");
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);