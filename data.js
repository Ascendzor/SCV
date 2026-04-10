/**
 * North American Data Center Dataset
 *
 * type: "hyperscale" | "colocation" | "enterprise" | "edge"
 * tier: "Tier I" – "Tier IV"
 * capacityMW: power capacity in megawatts
 */
const DATA_CENTERS = [
  // ─── United States ────────────────────────────────────────

  // Virginia – "Data Center Alley"
  { name: "Ashburn VA Campus",        provider: "Equinix",        lat: 39.0438, lng: -77.4874, type: "colocation",  tier: "Tier IV",  capacityMW: 130, year: 2008, city: "Ashburn",        state: "VA", country: "US" },
  { name: "Ashburn DC10-DC15",        provider: "Digital Realty", lat: 39.0535, lng: -77.4620, type: "colocation",  tier: "Tier III", capacityMW: 105, year: 2012, city: "Ashburn",        state: "VA", country: "US" },
  { name: "Manassas Cloud Center",    provider: "AWS",            lat: 38.7509, lng: -77.4753, type: "hyperscale",  tier: "Tier III", capacityMW: 150, year: 2011, city: "Manassas",       state: "VA", country: "US" },
  { name: "Sterling Cloud Region",    provider: "AWS",            lat: 39.0066, lng: -77.4286, type: "hyperscale",  tier: "Tier III", capacityMW: 200, year: 2015, city: "Sterling",       state: "VA", country: "US" },
  { name: "Loudoun County Campus",    provider: "Microsoft",      lat: 39.0810, lng: -77.5500, type: "hyperscale",  tier: "Tier IV",  capacityMW: 180, year: 2014, city: "Leesburg",       state: "VA", country: "US" },
  { name: "Reston NAP",               provider: "Equinix",        lat: 38.9540, lng: -77.3464, type: "colocation",  tier: "Tier IV",  capacityMW: 45,  year: 2000, city: "Reston",         state: "VA", country: "US" },

  // Texas
  { name: "Dallas Infomart",          provider: "Equinix",        lat: 32.7923, lng: -96.8100, type: "colocation",  tier: "Tier III", capacityMW: 55,  year: 2001, city: "Dallas",         state: "TX", country: "US" },
  { name: "Dallas Fort Worth Campus", provider: "Digital Realty", lat: 32.8998, lng: -97.0403, type: "colocation",  tier: "Tier III", capacityMW: 72,  year: 2010, city: "Dallas",         state: "TX", country: "US" },
  { name: "San Antonio Cloud",        provider: "Microsoft",      lat: 29.4241, lng: -98.4936, type: "hyperscale",  tier: "Tier IV",  capacityMW: 160, year: 2013, city: "San Antonio",    state: "TX", country: "US" },
  { name: "Fort Worth DC",            provider: "Meta",           lat: 32.7555, lng: -97.3308, type: "hyperscale",  tier: "Tier III", capacityMW: 110, year: 2016, city: "Fort Worth",     state: "TX", country: "US" },
  { name: "Houston Westway Hub",      provider: "CyrusOne",       lat: 29.7604, lng: -95.3698, type: "colocation",  tier: "Tier III", capacityMW: 40,  year: 2009, city: "Houston",        state: "TX", country: "US" },

  // California
  { name: "San Jose SV Campus",       provider: "Equinix",        lat: 37.3880, lng: -121.9090, type: "colocation",  tier: "Tier IV",  capacityMW: 85,  year: 2003, city: "San Jose",      state: "CA", country: "US" },
  { name: "Santa Clara Campus",       provider: "Digital Realty", lat: 37.3541, lng: -121.9552, type: "colocation",  tier: "Tier III", capacityMW: 65,  year: 2007, city: "Santa Clara",   state: "CA", country: "US" },
  { name: "Los Angeles One Wilshire", provider: "CoreSite",       lat: 34.0498, lng: -118.2568, type: "colocation",  tier: "Tier III", capacityMW: 38,  year: 1992, city: "Los Angeles",   state: "CA", country: "US" },
  { name: "Sacramento Cloud",         provider: "Google",         lat: 38.5816, lng: -121.4944, type: "hyperscale",  tier: "Tier III", capacityMW: 80,  year: 2018, city: "Sacramento",    state: "CA", country: "US" },
  { name: "LA El Segundo DC",         provider: "Equinix",        lat: 33.9192, lng: -118.4165, type: "colocation",  tier: "Tier III", capacityMW: 30,  year: 2014, city: "El Segundo",    state: "CA", country: "US" },

  // Pacific Northwest
  { name: "Seattle Westin Building",  provider: "Digital Realty", lat: 47.6131, lng: -122.3390, type: "colocation",  tier: "Tier III", capacityMW: 28,  year: 2000, city: "Seattle",        state: "WA", country: "US" },
  { name: "Quincy Cloud Campus",      provider: "Microsoft",      lat: 47.2343, lng: -119.8526, type: "hyperscale",  tier: "Tier IV",  capacityMW: 250, year: 2007, city: "Quincy",         state: "WA", country: "US" },
  { name: "Quincy Compute Center",    provider: "Google",         lat: 47.2290, lng: -119.8600, type: "hyperscale",  tier: "Tier III", capacityMW: 90,  year: 2019, city: "Quincy",         state: "WA", country: "US" },
  { name: "The Dalles Campus",        provider: "Google",         lat: 45.5946, lng: -121.1787, type: "hyperscale",  tier: "Tier III", capacityMW: 175, year: 2006, city: "The Dalles",    state: "OR", country: "US" },
  { name: "Prineville DC",            provider: "Meta",           lat: 44.2998, lng: -120.7345, type: "hyperscale",  tier: "Tier III", capacityMW: 120, year: 2011, city: "Prineville",    state: "OR", country: "US" },
  { name: "Hillsboro Campus",         provider: "Intel",          lat: 45.5229, lng: -122.9365, type: "enterprise",  tier: "Tier III", capacityMW: 50,  year: 2010, city: "Hillsboro",     state: "OR", country: "US" },
  { name: "Portland Campus",          provider: "Digital Realty", lat: 45.5152, lng: -122.6784, type: "colocation",  tier: "Tier III", capacityMW: 22,  year: 2015, city: "Portland",       state: "OR", country: "US" },

  // Illinois / Midwest
  { name: "Chicago CH Campus",        provider: "Equinix",        lat: 41.8534, lng: -87.6187, type: "colocation",  tier: "Tier IV",  capacityMW: 90,  year: 2002, city: "Chicago",        state: "IL", country: "US" },
  { name: "Elk Grove Village DC",     provider: "Digital Realty", lat: 42.0039, lng: -87.9706, type: "colocation",  tier: "Tier III", capacityMW: 48,  year: 2013, city: "Elk Grove",      state: "IL", country: "US" },
  { name: "Council Bluffs Campus",    provider: "Google",         lat: 41.2619, lng: -95.8608, type: "hyperscale",  tier: "Tier IV",  capacityMW: 200, year: 2009, city: "Council Bluffs", state: "IA", country: "US" },
  { name: "Altoona DC",               provider: "Meta",           lat: 41.6447, lng: -93.4646, type: "hyperscale",  tier: "Tier III", capacityMW: 150, year: 2014, city: "Altoona",        state: "IA", country: "US" },
  { name: "Des Moines Campus",        provider: "Microsoft",      lat: 41.6005, lng: -93.6091, type: "hyperscale",  tier: "Tier III", capacityMW: 100, year: 2017, city: "Des Moines",     state: "IA", country: "US" },

  // Arizona / Mountain West
  { name: "Phoenix Campus",           provider: "CyrusOne",       lat: 33.4484, lng: -112.0740, type: "colocation",  tier: "Tier III", capacityMW: 70,  year: 2011, city: "Phoenix",        state: "AZ", country: "US" },
  { name: "Mesa Cloud Center",        provider: "Apple",          lat: 33.4152, lng: -111.8315, type: "hyperscale",  tier: "Tier IV",  capacityMW: 130, year: 2018, city: "Mesa",            state: "AZ", country: "US" },
  { name: "Goodyear Cloud",           provider: "Microsoft",      lat: 33.4353, lng: -112.3585, type: "hyperscale",  tier: "Tier III", capacityMW: 120, year: 2021, city: "Goodyear",       state: "AZ", country: "US" },
  { name: "Denver Campus",            provider: "Equinix",        lat: 39.7392, lng: -104.9903, type: "colocation",  tier: "Tier III", capacityMW: 35,  year: 2008, city: "Denver",         state: "CO", country: "US" },
  { name: "Salt Lake City DC",        provider: "DataBank",       lat: 40.7608, lng: -111.8910, type: "colocation",  tier: "Tier III", capacityMW: 20,  year: 2015, city: "Salt Lake City", state: "UT", country: "US" },
  { name: "Reno Cloud Campus",        provider: "Apple",          lat: 39.5296, lng: -119.8138, type: "hyperscale",  tier: "Tier III", capacityMW: 80,  year: 2019, city: "Reno",           state: "NV", country: "US" },
  { name: "Las Vegas DC",             provider: "Switch",         lat: 36.0831, lng: -115.1500, type: "colocation",  tier: "Tier IV",  capacityMW: 200, year: 2010, city: "Las Vegas",     state: "NV", country: "US" },

  // Southeast
  { name: "Atlanta Metro Campus",     provider: "Equinix",        lat: 33.7490, lng: -84.3880, type: "colocation",  tier: "Tier III", capacityMW: 50,  year: 2005, city: "Atlanta",        state: "GA", country: "US" },
  { name: "Atlanta Cloud Hub",        provider: "Google",         lat: 33.7700, lng: -84.4200, type: "hyperscale",  tier: "Tier III", capacityMW: 90,  year: 2020, city: "Atlanta",        state: "GA", country: "US" },
  { name: "Maiden NC Campus",         provider: "Apple",          lat: 35.5760, lng: -81.3817, type: "hyperscale",  tier: "Tier IV",  capacityMW: 100, year: 2010, city: "Maiden",         state: "NC", country: "US" },
  { name: "Lenoir NC Campus",         provider: "Google",         lat: 35.9140, lng: -81.5390, type: "hyperscale",  tier: "Tier III", capacityMW: 110, year: 2007, city: "Lenoir",         state: "NC", country: "US" },
  { name: "Durham NC Campus",         provider: "Meta",           lat: 35.9940, lng: -78.8986, type: "hyperscale",  tier: "Tier III", capacityMW: 75,  year: 2022, city: "Durham",         state: "NC", country: "US" },
  { name: "Charlotte DC",             provider: "Flexential",     lat: 35.2271, lng: -80.8431, type: "colocation",  tier: "Tier III", capacityMW: 25,  year: 2012, city: "Charlotte",      state: "NC", country: "US" },
  { name: "Miami NAP Americas",       provider: "Equinix",        lat: 25.7617, lng: -80.1918, type: "colocation",  tier: "Tier IV",  capacityMW: 42,  year: 2001, city: "Miami",          state: "FL", country: "US" },
  { name: "Jacksonville DC",          provider: "Digital Realty", lat: 30.3322, lng: -81.6557, type: "colocation",  tier: "Tier III", capacityMW: 18,  year: 2016, city: "Jacksonville",   state: "FL", country: "US" },

  // Northeast
  { name: "New York NY Campus",       provider: "Equinix",        lat: 40.7282, lng: -74.0776, type: "colocation",  tier: "Tier IV",  capacityMW: 95,  year: 1999, city: "New York",      state: "NY", country: "US" },
  { name: "Secaucus NJ Campus",       provider: "Equinix",        lat: 40.7895, lng: -74.0565, type: "colocation",  tier: "Tier III", capacityMW: 60,  year: 2005, city: "Secaucus",      state: "NJ", country: "US" },
  { name: "Newark NJ DC",             provider: "Digital Realty", lat: 40.7357, lng: -74.1724, type: "colocation",  tier: "Tier III", capacityMW: 32,  year: 2010, city: "Newark",         state: "NJ", country: "US" },
  { name: "Boston DC Campus",         provider: "CyrusOne",       lat: 42.3601, lng: -71.0589, type: "colocation",  tier: "Tier III", capacityMW: 26,  year: 2014, city: "Boston",         state: "MA", country: "US" },

  // Other US
  { name: "Columbus OH Campus",       provider: "QTS Realty",     lat: 39.9612, lng: -82.9988, type: "colocation",  tier: "Tier III", capacityMW: 50,  year: 2010, city: "Columbus",       state: "OH", country: "US" },
  { name: "Columbus Cloud",           provider: "AWS",            lat: 40.0000, lng: -82.9300, type: "hyperscale",  tier: "Tier III", capacityMW: 100, year: 2016, city: "Columbus",       state: "OH", country: "US" },
  { name: "Kansas City DC",           provider: "DataBank",       lat: 39.0997, lng: -94.5786, type: "colocation",  tier: "Tier III", capacityMW: 22,  year: 2013, city: "Kansas City",    state: "MO", country: "US" },
  { name: "Minneapolis DC",           provider: "DataBank",       lat: 44.9778, lng: -93.2650, type: "colocation",  tier: "Tier III", capacityMW: 18,  year: 2011, city: "Minneapolis",    state: "MN", country: "US" },
  { name: "Omaha NE Campus",          provider: "Meta",           lat: 41.2565, lng: -95.9345, type: "hyperscale",  tier: "Tier III", capacityMW: 130, year: 2020, city: "Papillion",      state: "NE", country: "US" },
  { name: "Mayes County Campus",      provider: "Google",         lat: 36.3120, lng: -95.2144, type: "hyperscale",  tier: "Tier III", capacityMW: 140, year: 2012, city: "Pryor Creek",    state: "OK", country: "US" },
  { name: "Nashville DC",             provider: "Digital Realty", lat: 36.1627, lng: -86.7816, type: "colocation",  tier: "Tier III", capacityMW: 20,  year: 2017, city: "Nashville",      state: "TN", country: "US" },

  // Edge / CDN – US
  { name: "Seattle Edge POP",         provider: "Cloudflare",     lat: 47.6062, lng: -122.3321, type: "edge", tier: "Tier II", capacityMW: 3,  year: 2015, city: "Seattle",     state: "WA", country: "US" },
  { name: "San Francisco Edge POP",   provider: "Cloudflare",     lat: 37.7749, lng: -122.4194, type: "edge", tier: "Tier II", capacityMW: 4,  year: 2013, city: "San Francisco",state: "CA", country: "US" },
  { name: "Chicago Edge POP",         provider: "Fastly",         lat: 41.8781, lng: -87.6298, type: "edge", tier: "Tier II", capacityMW: 3,  year: 2016, city: "Chicago",      state: "IL", country: "US" },
  { name: "Dallas Edge POP",          provider: "Akamai",         lat: 32.7767, lng: -96.7970, type: "edge", tier: "Tier II", capacityMW: 3,  year: 2010, city: "Dallas",       state: "TX", country: "US" },
  { name: "Atlanta Edge POP",         provider: "Akamai",         lat: 33.7600, lng: -84.3900, type: "edge", tier: "Tier II", capacityMW: 2,  year: 2012, city: "Atlanta",      state: "GA", country: "US" },

  // ─── Canada ───────────────────────────────────────────────
  { name: "Toronto TR Campus",        provider: "Equinix",        lat: 43.6532, lng: -79.3832, type: "colocation",  tier: "Tier III", capacityMW: 40,  year: 2006, city: "Toronto",        state: "ON", country: "CA" },
  { name: "Toronto Cloud Region",     provider: "AWS",            lat: 43.7000, lng: -79.4200, type: "hyperscale",  tier: "Tier III", capacityMW: 70,  year: 2016, city: "Toronto",        state: "ON", country: "CA" },
  { name: "Toronto Cloud Hub",        provider: "Google",         lat: 43.6650, lng: -79.3800, type: "hyperscale",  tier: "Tier III", capacityMW: 60,  year: 2021, city: "Toronto",        state: "ON", country: "CA" },
  { name: "Montreal QC Campus",       provider: "Equinix",        lat: 45.5017, lng: -73.5673, type: "colocation",  tier: "Tier III", capacityMW: 30,  year: 2010, city: "Montreal",       state: "QC", country: "CA" },
  { name: "Montreal Cloud Region",    provider: "AWS",            lat: 45.5200, lng: -73.5700, type: "hyperscale",  tier: "Tier III", capacityMW: 80,  year: 2016, city: "Montreal",       state: "QC", country: "CA" },
  { name: "Montreal Azure DC",        provider: "Microsoft",      lat: 45.4850, lng: -73.5900, type: "hyperscale",  tier: "Tier III", capacityMW: 55,  year: 2019, city: "Montreal",       state: "QC", country: "CA" },
  { name: "Vancouver BC DC",          provider: "Cologix",        lat: 49.2827, lng: -123.1207, type: "colocation",  tier: "Tier III", capacityMW: 18,  year: 2013, city: "Vancouver",     state: "BC", country: "CA" },
  { name: "Calgary AB DC",            provider: "eStruxture",     lat: 51.0447, lng: -114.0719, type: "colocation",  tier: "Tier III", capacityMW: 12,  year: 2015, city: "Calgary",        state: "AB", country: "CA" },

  // ─── Mexico ───────────────────────────────────────────────
  { name: "Querétaro QR1",            provider: "Equinix",        lat: 20.5888, lng: -100.3899, type: "colocation",  tier: "Tier III", capacityMW: 16,  year: 2018, city: "Querétaro",    state: "QT", country: "MX" },
  { name: "Querétaro Cloud",          provider: "Microsoft",      lat: 20.6100, lng: -100.4100, type: "hyperscale",  tier: "Tier III", capacityMW: 40,  year: 2020, city: "Querétaro",    state: "QT", country: "MX" },
  { name: "Mexico City DC",           provider: "KIO Networks",   lat: 19.4326, lng: -99.1332, type: "colocation",  tier: "Tier IV",  capacityMW: 20,  year: 2010, city: "Mexico City",   state: "DF", country: "MX" },
  { name: "Mexico City Cloud",        provider: "AWS",            lat: 19.4500, lng: -99.1200, type: "hyperscale",  tier: "Tier III", capacityMW: 35,  year: 2022, city: "Mexico City",   state: "DF", country: "MX" },
  { name: "Monterrey DC",             provider: "KIO Networks",   lat: 25.6866, lng: -100.3161, type: "colocation",  tier: "Tier III", capacityMW: 10,  year: 2014, city: "Monterrey",    state: "NL", country: "MX" },
];
