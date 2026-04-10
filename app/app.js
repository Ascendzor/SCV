/* ── Color palette by data-center type ───────────────────── */
const TYPE_COLORS = {
  hyperscale:  "#00e5ff",
  colocation:  "#76ff03",
  enterprise:  "#ff9100",
  edge:        "#ea80fc",
};

/* ── Map setup ───────────────────────────────────────────── */
const map = L.map("map", {
  center: [44, -98],
  zoom: 4,
  zoomControl: true,
  attributionControl: true,
  minZoom: 3,
  maxZoom: 14,
});

// Dark-themed tile layer (CartoDB Dark Matter – free, no key)
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
).addTo(map);

/* ── State ───────────────────────────────────────────────── */
let activeFilters = { provider: new Set(), tier: new Set(), country: new Set() };
let markers = [];

/* ── Build filter chips ──────────────────────────────────── */
function buildFilters() {
  const providers = [...new Set(DATA_CENTERS.map((d) => d.provider))].sort();
  const tiers     = [...new Set(DATA_CENTERS.map((d) => d.tier))].sort();
  const countries = [
    { code: "US", label: "United States" },
    { code: "CA", label: "Canada" },
    { code: "MX", label: "Mexico" },
  ];

  const providerEl = document.getElementById("provider-filters");
  const tierEl     = document.getElementById("tier-filters");
  const countryEl  = document.getElementById("country-filters");

  providers.forEach((p) => {
    const chip = makeChip(p, "provider", p);
    providerEl.appendChild(chip);
  });

  tiers.forEach((t) => {
    const chip = makeChip(t, "tier", t);
    tierEl.appendChild(chip);
  });

  countries.forEach(({ code, label }) => {
    const chip = makeChip(label, "country", code);
    countryEl.appendChild(chip);
  });
}

function makeChip(label, category, value) {
  const el = document.createElement("button");
  el.className = "chip";
  el.textContent = label;
  el.addEventListener("click", () => {
    if (activeFilters[category].has(value)) {
      activeFilters[category].delete(value);
      el.classList.remove("active");
    } else {
      activeFilters[category].add(value);
      el.classList.add("active");
    }
    renderMarkers();
  });
  return el;
}

/* ── Marker rendering ────────────────────────────────────── */
function getFilteredData() {
  return DATA_CENTERS.filter((dc) => {
    if (activeFilters.provider.size && !activeFilters.provider.has(dc.provider)) return false;
    if (activeFilters.tier.size && !activeFilters.tier.has(dc.tier)) return false;
    if (activeFilters.country.size && !activeFilters.country.has(dc.country)) return false;
    return true;
  });
}

function createMarkerIcon(dc) {
  const color = TYPE_COLORS[dc.type] || "#ffffff";
  const size = markerSize(dc.capacityMW);

  return L.divIcon({
    className: "dc-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `
      <div class="dc-marker-pulse" style="background:${color};"></div>
      <div class="dc-marker-dot" style="
        width:${size}px;
        height:${size}px;
        background: radial-gradient(circle at 35% 35%, ${color}, ${hexAlpha(color, 0.5)});
        box-shadow: 0 0 ${size}px ${hexAlpha(color, 0.4)};
      "></div>
    `,
  });
}

function markerSize(mw) {
  if (mw >= 150) return 18;
  if (mw >= 80)  return 14;
  if (mw >= 30)  return 11;
  return 8;
}

function hexAlpha(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function renderMarkers() {
  // Clear existing
  markers.forEach((m) => map.removeLayer(m));
  markers = [];

  const filtered = getFilteredData();

  filtered.forEach((dc) => {
    const marker = L.marker([dc.lat, dc.lng], { icon: createMarkerIcon(dc) });

    // Tooltip on hover
    marker.bindTooltip(
      `<div class="dc-tooltip-name">${dc.name}</div>
       <div class="dc-tooltip-provider">${dc.provider} &middot; ${dc.capacityMW} MW</div>`,
      {
        className: "dc-tooltip",
        direction: "top",
        offset: [0, -8],
      }
    );

    marker.on("click", () => showDetail(dc));
    marker.addTo(map);
    markers.push(marker);
  });

  updateStats(filtered);
}

/* ── Stats ───────────────────────────────────────────────── */
function updateStats(data) {
  animateCounter("total-count", data.length);
  animateCounter("us-count", data.filter((d) => d.country === "US").length);
  animateCounter("ca-count", data.filter((d) => d.country === "CA").length);
  animateCounter("mx-count", data.filter((d) => d.country === "MX").length);
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent) || 0;
  const diff = target - start;
  if (diff === 0) return;

  const duration = 400;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(start + diff * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Detail panel ────────────────────────────────────────── */
function showDetail(dc) {
  const panel = document.getElementById("detail-panel");
  panel.classList.remove("hidden");

  document.getElementById("detail-name").textContent     = dc.name;
  document.getElementById("detail-provider").textContent  = dc.provider;
  document.getElementById("detail-location").textContent  = `${dc.city}, ${dc.state}`;
  document.getElementById("detail-type").textContent      = dc.type.charAt(0).toUpperCase() + dc.type.slice(1);
  document.getElementById("detail-tier").textContent      = dc.tier;
  document.getElementById("detail-capacity").textContent  = `${dc.capacityMW} MW`;
  document.getElementById("detail-year").textContent      = dc.year;
}

document.getElementById("detail-close").addEventListener("click", () => {
  document.getElementById("detail-panel").classList.add("hidden");
});

/* ── Boot ────────────────────────────────────────────────── */
buildFilters();
renderMarkers();
