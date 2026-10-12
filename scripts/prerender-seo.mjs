import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = new URL("../dist/", import.meta.url);
const baseHtml = await readFile(new URL("index.html", distDir), "utf8");

const areas = [
  "Winchester",
  "Eastleigh",
  "Chandler's Ford",
  "Shawford",
  "Compton",
  "Otterbourne",
  "Twyford",
  "King's Worthy",
  "Hursley",
];

const routes = [
  {
    path: "carpet-cleaning-winchester",
    title: "Carpet Cleaning Winchester | ROBIGO",
    description:
      "Professional carpet cleaning in Winchester with simple room pricing, free call-out and a £50 minimum total booking. Local, fully insured ROBIGO service.",
    h1: "Professional Carpet Cleaning in Winchester",
    intro:
      "Deep carpet cleaning with professional extraction equipment, simple room prices and a local Winchester service.",
    prices: [
      ["Single Room", "£20"],
      ["Double Room", "£30"],
      ["Small Living Room", "£20"],
      ["Large Living Room", "£40"],
      ["Stairs", "£2 / step"],
    ],
  },
  {
    path: "rug-cleaning-winchester",
    title: "Rug Cleaning Winchester | ROBIGO",
    description:
      "Professional rug cleaning in Winchester for small, medium, large and extra-large household rugs. Clear prices, £50 minimum booking and no call-out charge.",
    h1: "Professional Rug Cleaning in Winchester",
    intro:
      "Careful professional cleaning for suitable household rugs with clear size-based prices.",
    prices: [
      ["Small Rug (up to 1.5 m × 1 m)", "£15"],
      ["Medium Rug (up to 2 m × 1.5 m)", "£25"],
      ["Large Rug (up to 3 m × 2 m)", "£30"],
      ["Extra Large Rug (over 3 m × 2 m)", "£40"],
    ],
  },
  {
    path: "upholstery-cleaning-winchester",
    title: "Upholstery Cleaning Winchester | ROBIGO",
    description:
      "Professional sofa and upholstery cleaning in Winchester. Dining chairs from £10, armchairs £20, sofas from £40. £50 minimum booking and no call-out charge.",
    h1: "Sofa & Upholstery Cleaning in Winchester",
    intro:
      "Professional cleaning for suitable sofas, armchairs and dining chairs using careful extraction methods.",
    prices: [
      ["Dining Chair", "£10 / each"],
      ["Armchair", "£20 / each"],
      ["2-Seater Sofa", "£40"],
      ["3-Seater Sofa", "£50"],
      ["4-Seater Sofa", "£60"],
      ["Corner Sofa", "£70"],
    ],
  },
  {
    path: "mattress-cleaning-winchester",
    title: "Mattress Cleaning Winchester | ROBIGO",
    description:
      "Mattress cleaning in Winchester from £20. Single, double, king and super king sizes. £50 minimum booking, no call-out charge and fast WhatsApp quotes.",
    h1: "Professional Mattress Cleaning in Winchester",
    intro:
      "Professional mattress cleaning to refresh suitable mattress fabric and improve overall cleanliness.",
    prices: [
      ["Single Mattress", "£20"],
      ["Double Mattress", "£30"],
      ["King Mattress", "£40"],
      ["Super King Mattress", "£50"],
    ],
  },
  {
    path: "steam-cleaning-winchester",
    title: "Chemical-Free Steam Cleaning Winchester | ROBIGO",
    description:
      "High-temperature chemical-free steam cleaning for suitable hard floors in Winchester. Simple room prices, £50 minimum booking and no call-out charge.",
    h1: "Chemical-Free Hard Floor Steam Cleaning in Winchester",
    intro:
      "Professional Kärcher SG 4/4 high-temperature dry steam cleaning for suitable hard-floor surfaces.",
    prices: [
      ["Small Living Room", "£20"],
      ["Large Living Room", "£40"],
      ["Single Room", "£20"],
      ["Double Room", "£30"],
    ],
  },
  {
    path: "oven-cleaning-winchester",
    title: "Oven Cleaning Winchester | ROBIGO",
    description:
      "Professional oven cleaning in Winchester. Single oven £50, double oven £70. Hob £20 when booked with oven cleaning. No call-out charge.",
    h1: "Professional Oven Cleaning in Winchester",
    intro:
      "Straightforward local oven cleaning with fixed prices and free call-out across our regular service area.",
    prices: [
      ["Single Oven", "£50"],
      ["Double Oven", "£70"],
      ["Range Cooker", "£90"],
      ["Hob (with oven cleaning only)", "£20"],
      ["Microwave", "£20"],
    ],
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function staticContent(route) {
  const priceRows = route.prices
    .map(
      ([label, price]) =>
        `<li><span>${escapeHtml(label)}</span> <strong>${escapeHtml(price)}</strong></li>`,
    )
    .join("");
  const areaItems = areas.map((area) => `<li>${escapeHtml(area)}</li>`).join("");

  return `<main data-seo-prerender="true">
    <section>
      <p>ROBIGO · Winchester Cleaning Service</p>
      <h1>${escapeHtml(route.h1)}</h1>
      <p>${escapeHtml(route.intro)}</p>
      <p><strong>£50 minimum booking · No call-out charge · 7 days a week</strong></p>
    </section>
    <section>
      <h2>${escapeHtml(route.h1.replace("Professional ", ""))} Prices</h2>
      <ul>${priceRows}</ul>
    </section>
    <section>
      <h2>ROBIGO Service Area</h2>
      <ul>${areaItems}</ul>
    </section>
  </main>`;
}

for (const route of routes) {
  const canonical = `https://robigo.co.uk/${route.path}`;
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = html.replace(
    /<meta\s+data-rh="true"\s+name="description"\s+content="[^"]*"\s*\/>/i,
    `<meta data-rh="true" name="description" content="${escapeHtml(route.description)}" />`,
  );
  html = html.replace(
    /<link\s+data-rh="true"\s+rel="canonical"\s+href="[^"]*"\s*\/>/i,
    `<link data-rh="true" rel="canonical" href="${canonical}" />`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${staticContent(route)}</div>`,
  );

  const routeDir = join(distDir.pathname, route.path);
  await mkdir(routeDir, { recursive: true });
  await writeFile(join(routeDir, "index.html"), html, "utf8");
}

console.log(`Prerendered ${routes.length} SEO service routes.`);
