const TYPE_COLORS = {
  hyperscale: "#00e5ff",
  colocation: "#76ff03",
  enterprise: "#ff9100",
  edge:       "#ea80fc",
};

const map = L.map("map", {
  center: [44, -98], zoom: 4, zoomControl: true,
  attributionControl: true, minZoom: 3, maxZoom: 14,
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: "abcd", maxZoom: 19,
}).addTo(map);

let activeFilters = { provider: new Set(), tier: new Set(), country: new Set() };
let markers = [];
let currentYear = 2032;

// ── Helpers ─────────────────────────────────────────────────
function getCapacityAtYear(dc, year) {
  if (!dc.capacityHistory) return year >= dc.year ? dc.capacityMW : 0;
  if (year < dc.year) return 0;
  const entries = Object.entries(dc.capacityHistory)
    .map(([y, mw]) => [parseInt(y), mw])
    .sort((a, b) => a[0] - b[0]);
  let val = 0;
  for (const [y, mw] of entries) {
    if (y <= year) val = mw;
  }
  return val || dc.capacityMW;
}

function hexAlpha(hex, a) {
  return `rgba(${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)},${a})`;
}

function getFilteredBase() {
  return DATA_CENTERS.filter((dc) => {
    if (activeFilters.provider.size && !activeFilters.provider.has(dc.provider)) return false;
    if (activeFilters.tier.size && !activeFilters.tier.has(dc.tier)) return false;
    if (activeFilters.country.size && !activeFilters.country.has(dc.country)) return false;
    return true;
  });
}

function getFilteredData() {
  return getFilteredBase().filter((dc) => dc.year <= currentYear);
}

// ── Filters ─────────────────────────────────────────────────
function buildFilters() {
  const providers = [...new Set(DATA_CENTERS.map((d) => d.provider))].sort();
  const tiers = [...new Set(DATA_CENTERS.map((d) => d.tier))].sort();
  const countries = [
    { code: "US", label: "United States" },
    { code: "CA", label: "Canada" },
    { code: "MX", label: "Mexico" },
  ];
  const providerEl = document.getElementById("provider-filters");
  const tierEl = document.getElementById("tier-filters");
  const countryEl = document.getElementById("country-filters");
  providers.forEach((p) => providerEl.appendChild(makeChip(p, "provider", p)));
  tiers.forEach((t) => tierEl.appendChild(makeChip(t, "tier", t)));
  countries.forEach(({ code, label }) => countryEl.appendChild(makeChip(label, "country", code)));
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
    drawTimelineChart();
  });
  return el;
}

// ── Markers ─────────────────────────────────────────────────
function markerRadius(mw) {
  if (mw >= 150) return 9;
  if (mw >= 80) return 7;
  if (mw >= 30) return 5;
  return 4;
}

function renderMarkers() {
  markers.forEach((m) => map.removeLayer(m));
  markers = [];
  const filtered = getFilteredData();
  filtered.forEach((dc) => {
    const color = TYPE_COLORS[dc.type] || "#ffffff";
    const mwNow = getCapacityAtYear(dc, currentYear);
    const r = markerRadius(mwNow);
    const glow = L.circleMarker([dc.lat, dc.lng], {
      radius: r + 5, fillColor: color, fillOpacity: 0.12,
      color: color, weight: 0, opacity: 0, interactive: false,
    });
    const marker = L.circleMarker([dc.lat, dc.lng], {
      radius: r, fillColor: color, fillOpacity: 0.85,
      color: "#ffffff", weight: 1, opacity: 0.25,
    });
    marker.bindTooltip(
      `<div class="dc-tooltip-name">${dc.name}</div><div class="dc-tooltip-provider">${dc.provider} · ${mwNow} MW</div>`,
      { className: "dc-tooltip", direction: "top", offset: [0, -r] }
    );
    marker.on("click", () => showModal(dc));
    glow.addTo(map);
    marker.addTo(map);
    markers.push(glow, marker);
  });
  updateStats(filtered);
}

// ── Stats ───────────────────────────────────────────────────
function updateStats(data) {
  animateCounter("total-count", data.length);
  animateCounter("us-count", data.filter((d) => d.country === "US").length);
  animateCounter("ca-count", data.filter((d) => d.country === "CA").length);
  animateCounter("mx-count", data.filter((d) => d.country === "MX").length);
  animateCounter("total-mw", data.reduce((s, dc) => s + getCapacityAtYear(dc, currentYear), 0));
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent.replace(/,/g, "")) || 0;
  const diff = target - start;
  if (diff === 0) return;
  const duration = 400, t0 = performance.now();
  function tick(now) {
    const p = Math.min((now - t0) / duration, 1);
    const v = Math.round(start + diff * (1 - Math.pow(1 - p, 3)));
    el.textContent = v >= 1000 ? v.toLocaleString() : v;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ── Timeline ────────────────────────────────────────────────
function buildTimeline() {
  const slider = document.getElementById("timeline-slider");
  const ticksEl = document.getElementById("timeline-ticks");
  for (let y = 2010; y <= 2032; y++) {
    const t = document.createElement("span");
    t.className = "timeline-tick";
    t.textContent = y % 2 === 0 ? y : "";
    ticksEl.appendChild(t);
  }
  slider.addEventListener("input", () => {
    currentYear = parseInt(slider.value);
    document.getElementById("timeline-year-label").textContent =
      currentYear === 2032 ? "2010 – 2032" : "Showing: " + currentYear;
    renderMarkers();
    drawTimelineChart();
  });
  drawTimelineChart();
}

function computeYearlyTotals() {
  const base = getFilteredBase();
  const totals = [];
  for (let y = 2010; y <= 2032; y++) {
    let sum = 0;
    base.forEach((dc) => { sum += getCapacityAtYear(dc, y); });
    totals.push({ year: y, mw: sum });
  }
  return totals;
}

function drawTimelineChart() {
  const canvas = document.getElementById("timeline-chart");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;
  const pad = { top: 4, bottom: 4, left: 0, right: 0 };
  const pw = w - pad.left - pad.right, ph = h - pad.top - pad.bottom;
  const data = computeYearlyTotals();
  const maxMW = Math.max(...data.map((d) => d.mw), 1);
  ctx.clearRect(0, 0, w, h);

  // Projected zone background (2025+)
  const projIdx = 15; // index of 2025
  const projX = pad.left + (projIdx / (data.length - 1)) * pw;
  ctx.fillStyle = "rgba(234, 128, 252, 0.04)";
  ctx.fillRect(projX, 0, w - projX, h);

  // Area
  const grad = ctx.createLinearGradient(0, pad.top, 0, h);
  grad.addColorStop(0, "rgba(0,229,255,0.35)");
  grad.addColorStop(1, "rgba(0,229,255,0.02)");
  ctx.beginPath();
  ctx.moveTo(pad.left, h - pad.bottom);
  data.forEach((d, i) => {
    ctx.lineTo(pad.left + (i / (data.length - 1)) * pw, pad.top + ph - (d.mw / maxMW) * ph);
  });
  ctx.lineTo(pad.left + pw, h - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = pad.left + (i / (data.length - 1)) * pw;
    const y = pad.top + ph - (d.mw / maxMW) * ph;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#00e5ff";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Current year marker
  const yi = currentYear - 2010;
  const mx = pad.left + (yi / (data.length - 1)) * pw;
  ctx.beginPath();
  ctx.moveTo(mx, pad.top);
  ctx.lineTo(mx, h - pad.bottom);
  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Label
  const cmw = data[yi]?.mw || 0;
  ctx.fillStyle = "#fff";
  ctx.font = "bold 11px -apple-system,sans-serif";
  ctx.textAlign = mx > w / 2 ? "right" : "left";
  ctx.fillText(cmw.toLocaleString() + " MW", mx + (mx > w / 2 ? -6 : 6), pad.top + 13);
}

// ── Modal ───────────────────────────────────────────────────
function showModal(dc) {
  document.getElementById("detail-modal").classList.remove("hidden");
  document.getElementById("modal-name").textContent = dc.name;
  document.getElementById("modal-provider-badge").textContent = dc.provider;
  document.getElementById("modal-capacity").textContent = getCapacityAtYear(dc, currentYear);
  document.getElementById("modal-type").textContent = dc.type.charAt(0).toUpperCase() + dc.type.slice(1);
  document.getElementById("modal-tier").textContent = dc.tier;
  document.getElementById("modal-year").textContent = dc.year;
  document.getElementById("modal-location").textContent = dc.city + ", " + dc.state;

  const img = document.getElementById("modal-image");
  const hero = document.getElementById("modal-hero");
  if (dc.imageUrl) {
    img.src = dc.imageUrl;
    img.alt = dc.name;
    img.style.display = "block";
    hero.style.height = "200px";
  } else {
    img.style.display = "none";
    hero.style.height = "80px";
    hero.style.background = "linear-gradient(135deg, #1a2236, #111827)";
  }

  requestAnimationFrame(() => drawModalChart(dc));
}

function drawModalChart(dc) {
  const canvas = document.getElementById("modal-chart");
  const dpr = window.devicePixelRatio || 1;
  const wrap = canvas.parentElement;
  const rect = wrap.getBoundingClientRect();
  const padP = 20;
  canvas.width = (rect.width - padP) * dpr;
  canvas.height = (rect.height - padP) * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  const w = rect.width - padP, h = rect.height - padP;
  const pad = { top: 8, bottom: 22, left: 36, right: 10 };
  const pw = w - pad.left - pad.right, ph = h - pad.top - pad.bottom;

  const startY = Math.max(dc.year, 2010);
  const points = [];
  for (let y = startY; y <= 2032; y++) points.push({ year: y, mw: getCapacityAtYear(dc, y) });
  const maxMW = Math.max(...points.map((p) => p.mw), 1) * 1.15;

  ctx.clearRect(0, 0, w, h);

  // Grid
  const gl = 4;
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= gl; i++) {
    const y = pad.top + (i / gl) * ph;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + pw, y); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "10px -apple-system,sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(Math.round(maxMW * (1 - i / gl)), pad.left - 6, y + 3);
  }

  // X labels
  ctx.textAlign = "center";
  points.forEach((p, i) => {
    if (p.year % 4 === 0 || i === 0) {
      ctx.fillText(p.year, pad.left + (i / Math.max(points.length - 1, 1)) * pw, h - 2);
    }
  });

  if (points.length < 2) return;

  const color = TYPE_COLORS[dc.type] || "#00e5ff";

  // Area
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + ph);
  grad.addColorStop(0, hexAlpha(color, 0.4));
  grad.addColorStop(1, hexAlpha(color, 0.02));
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top + ph);
  points.forEach((p, i) => {
    ctx.lineTo(pad.left + (i / (points.length - 1)) * pw, pad.top + ph - (p.mw / maxMW) * ph);
  });
  ctx.lineTo(pad.left + pw, pad.top + ph);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  points.forEach((p, i) => {
    const x = pad.left + (i / (points.length - 1)) * pw;
    const y = pad.top + ph - (p.mw / maxMW) * ph;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Dots at expansion points
  points.forEach((p, i) => {
    if (i === 0 || p.mw !== points[i - 1].mw) {
      const x = pad.left + (i / (points.length - 1)) * pw;
      const y = pad.top + ph - (p.mw / maxMW) * ph;
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.fill();
      ctx.strokeStyle = "#fff"; ctx.lineWidth = 1; ctx.stroke();
    }
  });
}

document.getElementById("modal-close").addEventListener("click", () => {
  document.getElementById("detail-modal").classList.add("hidden");
});
document.getElementById("detail-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) document.getElementById("detail-modal").classList.add("hidden");
});

window.addEventListener("resize", () => drawTimelineChart());

// ── Boot ────────────────────────────────────────────────────
buildFilters();
renderMarkers();
buildTimeline();
