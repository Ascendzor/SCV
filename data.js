/**
 * North American Data Center Dataset
 *
 * Coordinates target actual facility / campus locations, not city centers.
 * type: "hyperscale" | "colocation" | "enterprise" | "edge"
 * tier: "Tier I" – "Tier IV"
 * capacityMW: power capacity in megawatts
 */
const DATA_CENTERS = [
  // ─── United States ────────────────────────────────────────

  // Virginia – "Data Center Alley" (Loudoun County corridor)
  { name: "Ashburn VA Campus",        provider: "Equinix",        lat: 39.0296, lng: -77.4739, type: "colocation",  tier: "Tier IV",  capacityMW: 130, year: 2008, city: "Ashburn",        state: "VA", country: "US" },
  { name: "Ashburn DC10-DC15",        provider: "Digital Realty", lat: 39.0420, lng: -77.4680, type: "colocation",  tier: "Tier III", capacityMW: 105, year: 2012, city: "Ashburn",        state: "VA", country: "US" },
  { name: "Manassas Cloud Center",    provider: "AWS",            lat: 38.7700, lng: -77.5360, type: "hyperscale",  tier: "Tier III", capacityMW: 150, year: 2011, city: "Manassas",       state: "VA", country: "US" },
  { name: "Sterling Cloud Region",    provider: "AWS",            lat: 39.0130, lng: -77.4080, type: "hyperscale",  tier: "Tier III", capacityMW: 200, year: 2015, city: "Sterling",       state: "VA", country: "US" },
  { name: "Loudoun County Campus",    provider: "Microsoft",      lat: 39.0500, lng: -77.5100, type: "hyperscale",  tier: "Tier IV",  capacityMW: 180, year: 2014, city: "Leesburg",       state: "VA", country: "US" },
  { name: "Reston NAP",               provider: "Equinix",        lat: 38.9586, lng: -77.3574, type: "colocation",  tier: "Tier IV",  capacityMW: 45,  year: 2000, city: "Reston",         state: "VA", country: "US" },

  // Texas
  { name: "Dallas Infomart",          provider: "Equinix",        lat: 32.7945, lng: -96.8190, type: "colocation",  tier: "Tier III", capacityMW: 55,  year: 2001, city: "Dallas",         state: "TX", country: "US" },
  { name: "Dallas Fort Worth Campus", provider: "Digital Realty", lat: 32.8998, lng: -97.0403, type: "colocation",  tier: "Tier III", capacityMW: 72,  year: 2010, city: "Dallas",         state: "TX", country: "US" },
  { name: "San Antonio Cloud",        provider: "Microsoft",      lat: 29.3340, lng: -98.4690, type: "hyperscale",  tier: "Tier IV",  capacityMW: 160, year: 2013, city: "San Antonio",    state: "TX", country: "US" },
  { name: "Fort Worth DC",            provider: "Meta",           lat: 32.7210, lng: -97.4700, type: "hyperscale",  tier: "Tier III", capacityMW: 110, year: 2016, city: "Fort Worth",     state: "TX", country: "US" },
  { name: "Houston Westway Hub",      provider: "CyrusOne",       lat: 29.7450, lng: -95.5600, type: "colocation",  tier: "Tier III", capacityMW: 40,  year: 2009, city: "Houston",        state: "TX", country: "US" },

  // California
  { name: "San Jose SV Campus",       provider: "Equinix",        lat: 37.3730, lng: -121.9180, type: "colocation",  tier: "Tier IV",  capacityMW: 85,  year: 2003, city: "San Jose",      state: "CA", country: "US" },
  { name: "Santa Clara Campus",       provider: "Digital Realty", lat: 37.3860, lng: -121.9640, type: "colocation",  tier: "Tier III", capacityMW: 65,  year: 2007, city: "Santa Clara",   state: "CA", country: "US" },
  { name: "Los Angeles One Wilshire", provider: "CoreSite",       lat: 34.0489, lng: -118.2553, type: "colocation",  tier: "Tier III", capacityMW: 38,  year: 1992, city: "Los Angeles",   state: "CA", country: "US" },
  { name: "LA El Segundo DC",         provider: "Equinix",        lat: 33.9170, lng: -118.3960, type: "colocation",  tier: "Tier III", capacityMW: 30,  year: 2014, city: "El Segundo",    state: "CA", country: "US" },

  // Pacific Northwest
  { name: "Seattle Westin Building",  provider: "Digital Realty", lat: 47.6159, lng: -122.3382, type: "colocation",  tier: "Tier III", capacityMW: 28,  year: 2000, city: "Seattle",        state: "WA", country: "US" },
  { name: "Quincy Cloud Campus",      provider: "Microsoft",      lat: 47.2154, lng: -119.8526, type: "hyperscale",  tier: "Tier IV",  capacityMW: 250, year: 2007, city: "Quincy",         state: "WA", country: "US" },
  { name: "Quincy Compute Center",    provider: "Google",         lat: 47.2200, lng: -119.8400, type: "hyperscale",  tier: "Tier III", capacityMW: 90,  year: 2019, city: "Quincy",         state: "WA", country: "US" },
  { name: "The Dalles Campus",        provider: "Google",         lat: 45.6322, lng: -121.2001, type: "hyperscale",  tier: "Tier III", capacityMW: 175, year: 2006, city: "The Dalles",    state: "OR", country: "US" },
  { name: "Prineville DC",            provider: "Meta",           lat: 44.2866, lng: -120.7622, type: "hyperscale",  tier: "Tier III", capacityMW: 120, year: 2011, city: "Prineville",    state: "OR", country: "US" },
  { name: "Hillsboro Campus",         provider: "Intel",          lat: 45.5229, lng: -122.8995, type: "enterprise",  tier: "Tier III", capacityMW: 50,  year: 2010, city: "Hillsboro",     state: "OR", country: "US" },
  { name: "Portland Campus",          provider: "Digital Realty", lat: 45.5200, lng: -122.6650, type: "colocation",  tier: "Tier III", capacityMW: 22,  year: 2015, city: "Portland",       state: "OR", country: "US" },

  // Illinois / Midwest
  { name: "Chicago CH Campus",        provider: "Equinix",        lat: 41.8534, lng: -87.6187, type: "colocation",  tier: "Tier IV",  capacityMW: 90,  year: 2002, city: "Chicago",        state: "IL", country: "US" },
  { name: "Elk Grove Village DC",     provider: "Digital Realty", lat: 42.0039, lng: -87.9706, type: "colocation",  tier: "Tier III", capacityMW: 48,  year: 2013, city: "Elk Grove",      state: "IL", country: "US" },
  { name: "Council Bluffs Campus",    provider: "Google",         lat: 41.1796, lng: -95.8784, type: "hyperscale",  tier: "Tier IV",  capacityMW: 200, year: 2009, city: "Council Bluffs", state: "IA", country: "US" },
  { name: "Altoona DC",               provider: "Meta",           lat: 41.6743, lng: -93.5220, type: "hyperscale",  tier: "Tier III", capacityMW: 150, year: 2014, city: "Altoona",        state: "IA", country: "US" },
  { name: "Des Moines Campus",        provider: "Microsoft",      lat: 41.5770, lng: -93.8000, type: "hyperscale",  tier: "Tier III", capacityMW: 100, year: 2017, city: "West Des Moines",state: "IA", country: "US" },

  // Arizona / Mountain West
  { name: "Phoenix Campus",           provider: "CyrusOne",       lat: 33.3200, lng: -111.8700, type: "colocation",  tier: "Tier III", capacityMW: 70,  year: 2011, city: "Chandler",       state: "AZ", country: "US" },
  { name: "Mesa Cloud Center",        provider: "Apple",          lat: 33.3730, lng: -111.6820, type: "hyperscale",  tier: "Tier IV",  capacityMW: 130, year: 2018, city: "Mesa",            state: "AZ", country: "US" },
  { name: "Goodyear Cloud",           provider: "Microsoft",      lat: 33.3800, lng: -112.4000, type: "hyperscale",  tier: "Tier III", capacityMW: 120, year: 2021, city: "Goodyear",       state: "AZ", country: "US" },
  { name: "Denver Campus",            provider: "Equinix",        lat: 39.7560, lng: -104.8710, type: "colocation",  tier: "Tier III", capacityMW: 35,  year: 2008, city: "Denver",         state: "CO", country: "US" },
  { name: "Salt Lake City DC",        provider: "DataBank",       lat: 40.7280, lng: -111.9430, type: "colocation",  tier: "Tier III", capacityMW: 20,  year: 2015, city: "Salt Lake City", state: "UT", country: "US" },
  { name: "Reno Cloud Campus",        provider: "Apple",          lat: 39.5400, lng: -119.7500, type: "hyperscale",  tier: "Tier III", capacityMW: 80,  year: 2019, city: "Reno",           state: "NV", country: "US" },
  { name: "Las Vegas SuperNAP",       provider: "Switch",         lat: 36.0646, lng: -115.2089, type: "colocation",  tier: "Tier IV",  capacityMW: 200, year: 2010, city: "Las Vegas",     state: "NV", country: "US" },

  // Southeast
  { name: "Atlanta Metro Campus",     provider: "Equinix",        lat: 33.7560, lng: -84.3880, type: "colocation",  tier: "Tier III", capacityMW: 50,  year: 2005, city: "Atlanta",        state: "GA", country: "US" },
  { name: "Atlanta Cloud Hub",        provider: "Google",         lat: 33.8090, lng: -84.3360, type: "hyperscale",  tier: "Tier III", capacityMW: 90,  year: 2020, city: "Atlanta",        state: "GA", country: "US" },
  { name: "Maiden NC Campus",         provider: "Apple",          lat: 35.5779, lng: -81.3785, type: "hyperscale",  tier: "Tier IV",  capacityMW: 100, year: 2010, city: "Maiden",         state: "NC", country: "US" },
  { name: "Lenoir NC Campus",         provider: "Google",         lat: 35.8985, lng: -81.5622, type: "hyperscale",  tier: "Tier III", capacityMW: 110, year: 2007, city: "Lenoir",         state: "NC", country: "US" },
  { name: "Durham NC Campus",         provider: "Meta",           lat: 35.9540, lng: -78.9200, type: "hyperscale",  tier: "Tier III", capacityMW: 75,  year: 2022, city: "Durham",         state: "NC", country: "US" },
  { name: "Charlotte DC",             provider: "Flexential",     lat: 35.2070, lng: -80.8830, type: "colocation",  tier: "Tier III", capacityMW: 25,  year: 2012, city: "Charlotte",      state: "NC", country: "US" },
  { name: "Miami NAP Americas",       provider: "Equinix",        lat: 25.7617, lng: -80.1918, type: "colocation",  tier: "Tier IV",  capacityMW: 42,  year: 2001, city: "Miami",          state: "FL", country: "US" },
  { name: "Jacksonville DC",          provider: "Digital Realty", lat: 30.3322, lng: -81.6557, type: "colocation",  tier: "Tier III", capacityMW: 18,  year: 2016, city: "Jacksonville",   state: "FL", country: "US" },

  // Northeast
  { name: "Secaucus NJ Campus",       provider: "Equinix",        lat: 40.7895, lng: -74.0565, type: "colocation",  tier: "Tier IV",  capacityMW: 95,  year: 1999, city: "Secaucus",      state: "NJ", country: "US" },
  { name: "Secaucus NJ East",         provider: "Equinix",        lat: 40.7850, lng: -74.0620, type: "colocation",  tier: "Tier III", capacityMW: 60,  year: 2005, city: "Secaucus",      state: "NJ", country: "US" },
  { name: "Newark NJ DC",             provider: "Digital Realty", lat: 40.7357, lng: -74.1724, type: "colocation",  tier: "Tier III", capacityMW: 32,  year: 2010, city: "Newark",         state: "NJ", country: "US" },
  { name: "Boston DC Campus",         provider: "CyrusOne",       lat: 42.3750, lng: -71.0360, type: "colocation",  tier: "Tier III", capacityMW: 26,  year: 2014, city: "Boston",         state: "MA", country: "US" },

  // Other US
  { name: "Columbus OH Campus",       provider: "QTS Realty",     lat: 39.9700, lng: -82.8800, type: "colocation",  tier: "Tier III", capacityMW: 50,  year: 2010, city: "Columbus",       state: "OH", country: "US" },
  { name: "Columbus Cloud",           provider: "AWS",            lat: 39.9610, lng: -82.8100, type: "hyperscale",  tier: "Tier III", capacityMW: 100, year: 2016, city: "Columbus",       state: "OH", country: "US" },
  { name: "Kansas City DC",           provider: "DataBank",       lat: 39.1000, lng: -94.5786, type: "colocation",  tier: "Tier III", capacityMW: 22,  year: 2013, city: "Kansas City",    state: "MO", country: "US" },
  { name: "Minneapolis DC",           provider: "DataBank",       lat: 44.9778, lng: -93.2650, type: "colocation",  tier: "Tier III", capacityMW: 18,  year: 2011, city: "Minneapolis",    state: "MN", country: "US" },
  { name: "Papillion NE Campus",      provider: "Meta",           lat: 41.1414, lng: -96.0395, type: "hyperscale",  tier: "Tier III", capacityMW: 130, year: 2020, city: "Papillion",      state: "NE", country: "US" },
  { name: "Mayes County Campus",      provider: "Google",         lat: 36.2868, lng: -95.2500, type: "hyperscale",  tier: "Tier III", capacityMW: 140, year: 2012, city: "Pryor Creek",    state: "OK", country: "US" },
  { name: "Nashville DC",             provider: "Digital Realty", lat: 36.1430, lng: -86.8180, type: "colocation",  tier: "Tier III", capacityMW: 20,  year: 2017, city: "Nashville",      state: "TN", country: "US" },

  // Edge / CDN – US
  { name: "Seattle Edge POP",         provider: "Cloudflare",     lat: 47.6159, lng: -122.3321, type: "edge", tier: "Tier II", capacityMW: 3,  year: 2015, city: "Seattle",      state: "WA", country: "US" },
  { name: "San Francisco Edge POP",   provider: "Cloudflare",     lat: 37.7749, lng: -122.4194, type: "edge", tier: "Tier II", capacityMW: 4,  year: 2013, city: "San Francisco", state: "CA", country: "US" },
  { name: "Chicago Edge POP",         provider: "Fastly",         lat: 41.8781, lng: -87.6298, type: "edge", tier: "Tier II", capacityMW: 3,  year: 2016, city: "Chicago",       state: "IL", country: "US" },
  { name: "Dallas Edge POP",          provider: "Akamai",         lat: 32.7767, lng: -96.7970, type: "edge", tier: "Tier II", capacityMW: 3,  year: 2010, city: "Dallas",        state: "TX", country: "US" },
  { name: "Atlanta Edge POP",         provider: "Akamai",         lat: 33.7600, lng: -84.3900, type: "edge", tier: "Tier II", capacityMW: 2,  year: 2012, city: "Atlanta",       state: "GA", country: "US" },

  // ─── Canada ───────────────────────────────────────────────
  { name: "Toronto TR Campus",        provider: "Equinix",        lat: 43.7060, lng: -79.3450, type: "colocation",  tier: "Tier III", capacityMW: 40,  year: 2006, city: "Toronto",        state: "ON", country: "CA" },
  { name: "Toronto Cloud Region",     provider: "AWS",            lat: 43.7300, lng: -79.4560, type: "hyperscale",  tier: "Tier III", capacityMW: 70,  year: 2016, city: "Toronto",        state: "ON", country: "CA" },
  { name: "Toronto Cloud Hub",        provider: "Google",         lat: 43.6860, lng: -79.3630, type: "hyperscale",  tier: "Tier III", capacityMW: 60,  year: 2021, city: "Toronto",        state: "ON", country: "CA" },
  { name: "Montreal QC Campus",       provider: "Equinix",        lat: 45.5100, lng: -73.5520, type: "colocation",  tier: "Tier III", capacityMW: 30,  year: 2010, city: "Montreal",       state: "QC", country: "CA" },
  { name: "Montreal Cloud Region",    provider: "AWS",            lat: 45.5380, lng: -73.6100, type: "hyperscale",  tier: "Tier III", capacityMW: 80,  year: 2016, city: "Montreal",       state: "QC", country: "CA" },
  { name: "Montreal Azure DC",        provider: "Microsoft",      lat: 45.4700, lng: -73.5500, type: "hyperscale",  tier: "Tier III", capacityMW: 55,  year: 2019, city: "Montreal",       state: "QC", country: "CA" },
  { name: "Vancouver BC DC",          provider: "Cologix",        lat: 49.2590, lng: -123.0380, type: "colocation",  tier: "Tier III", capacityMW: 18,  year: 2013, city: "Vancouver",     state: "BC", country: "CA" },
  { name: "Calgary AB DC",            provider: "eStruxture",     lat: 51.0200, lng: -114.0400, type: "colocation",  tier: "Tier III", capacityMW: 12,  year: 2015, city: "Calgary",        state: "AB", country: "CA" },

  // ─── Mexico ───────────────────────────────────────────────
  { name: "Querétaro QR1",            provider: "Equinix",        lat: 20.6270, lng: -100.4020, type: "colocation",  tier: "Tier III", capacityMW: 16,  year: 2018, city: "Querétaro",    state: "QT", country: "MX" },
  { name: "Querétaro Cloud",          provider: "Microsoft",      lat: 20.6350, lng: -100.4200, type: "hyperscale",  tier: "Tier III", capacityMW: 40,  year: 2020, city: "Querétaro",    state: "QT", country: "MX" },
  { name: "Mexico City DC",           provider: "KIO Networks",   lat: 19.3910, lng: -99.1800, type: "colocation",  tier: "Tier IV",  capacityMW: 20,  year: 2010, city: "Mexico City",   state: "DF", country: "MX" },
  { name: "Mexico City Cloud",        provider: "AWS",            lat: 19.4060, lng: -99.1500, type: "hyperscale",  tier: "Tier III", capacityMW: 35,  year: 2022, city: "Mexico City",   state: "DF", country: "MX" },
  { name: "Monterrey DC",             provider: "KIO Networks",   lat: 25.6700, lng: -100.2450, type: "colocation",  tier: "Tier III", capacityMW: 10,  year: 2014, city: "Monterrey",    state: "NL", country: "MX" },
];
