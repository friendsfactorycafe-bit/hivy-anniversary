const fs = require("fs");
const BASE = "https://anniversarydinnersurat.com";
const urls = [BASE];

// Static pages
["about","contact","menu","packages","virtual-tour","blog","privacy-policy","terms-conditions"].forEach(p => urls.push(BASE+"/"+p));

// Package detail pages
["tent-of-romance","fairy-tale-proposals","swing-of-love","boho-chic","the-elite-group-setup"].forEach(p => urls.push(BASE+"/packages/"+p));

// Service pages
const acf = fs.readFileSync("lib/anniversary-config.ts","utf8");
const sm = acf.match(/slug: "([a-z][a-z0-9-]+)"/g);
if(sm) sm.forEach(m => { const s=m.match(/"(.+)"/)[1]; urls.push(BASE+"/services/"+s); });
urls.push(BASE+"/services/valentines-week");

// Keyword + Area pages from app directories
const dirs = fs.readdirSync("app",{withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name);
const skip = ["about","contact","menu","packages","virtual-tour","blog","privacy-policy","terms-conditions","services","leads"];
dirs.filter(d => !d.startsWith("[") && !skip.includes(d)).sort().forEach(d => {
  if(fs.existsSync("app/"+d+"/page.tsx")) urls.push(BASE+"/"+d);
});

// Blog posts
const bf = fs.readFileSync("lib/anniversary-blogs.ts","utf8");
const bm = bf.match(/slug: "([a-z][a-z0-9-]+)"/g);
if(bm) bm.forEach(m => { const s=m.match(/"(.+)"/)[1]; urls.push(BASE+"/blog/"+s); });

urls.forEach(u => console.log(u));
console.error("Total: "+urls.length+" URLs");
