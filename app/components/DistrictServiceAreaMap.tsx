'use client';

import { MapPin, ExternalLink } from 'lucide-react';

interface DistrictServiceAreaMapProps {
  districtName: string;
  districtSlug?: string;
  stateName?: string;
  mapQuery?: string;
  mapHeading?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  popularRoutes?: string[];
  pincodeCoverage?: string[];
}

const districtCoordinates: { [key: string]: { lat: number; lng: number } } = {
  ranchi: { lat: 23.3441, lng: 85.3096 },
  bokaro: { lat: 23.8103, lng: 86.1537 },
  ramgarh: { lat: 23.5833, lng: 85.55 },
  hazaribagh: { lat: 24.1542, lng: 85.3757 },
  dhanbad: { lat: 23.7957, lng: 86.4304 },
  jamshedpur: { lat: 22.8046, lng: 86.2029 },
  deoghar: { lat: 24.5128, lng: 86.6641 },
  dumka: { lat: 24.2679, lng: 87.2553 },
  giridih: { lat: 24.1844, lng: 86.1868 },
  godda: { lat: 24.3667, lng: 87.1667 },
  gumla: { lat: 23.4306, lng: 85.0125 },
  chatra: { lat: 24.2028, lng: 84.9392 },
  garhwa: { lat: 24.0916, lng: 83.4625 },
  jamtara: { lat: 24.4136, lng: 87.2639 },
  khunti: { lat: 22.7639, lng: 85.4125 },
  koderma: { lat: 24.5, lng: 85.5667 },
  latehar: { lat: 24.2375, lng: 84.5625 },
  lohardaga: { lat: 23.9833, lng: 84.6833 },
  pakur: { lat: 25.3139, lng: 87.7631 },
  palamu: { lat: 24.0833, lng: 84.6333 },
  sahebganj: { lat: 25.2333, lng: 87.55 },
  'seraikela-kharsawan': { lat: 22.3858, lng: 86.8075 },
  simdega: { lat: 23.4564, lng: 84.0739 },
  'west-singhbhum': { lat: 22.3833, lng: 85.3167 },
  'east-singhbhum': { lat: 22.8046, lng: 86.2029 },
  patna: { lat: 25.5941, lng: 85.1376 },
  gaya: { lat: 24.7969, lng: 85.0039 },
  muzaffarpur: { lat: 26.1209, lng: 85.3647 },
  bhagalpur: { lat: 25.2425, lng: 86.9842 },
  darbhanga: { lat: 26.1542, lng: 85.8918 },
  purnia: { lat: 25.7771, lng: 87.4753 },
  begusarai: { lat: 25.4182, lng: 86.1272 },
  munger: { lat: 25.3748, lng: 86.4735 },
  nalanda: { lat: 25.2049, lng: 85.5206 },
  samastipur: { lat: 25.862, lng: 85.781 },
  rohtas: { lat: 24.7471, lng: 84.0167 },
  vaishali: { lat: 25.75, lng: 85.1333 },
  'west-champaran': { lat: 27.154, lng: 84.3542 },
  madhubani: { lat: 26.348, lng: 86.071 },
  siwan: { lat: 26.2196, lng: 84.356 },
  saran: { lat: 25.95, lng: 84.75 },
  aurangabad: { lat: 24.752, lng: 84.374 },
  jehanabad: { lat: 25.2138, lng: 85.0179 },
  nawada: { lat: 24.877, lng: 85.539 },
  katihar: { lat: 25.552, lng: 87.559 },
  sitamarhi: { lat: 26.595, lng: 85.49 },
  'east-champaran': { lat: 26.65, lng: 84.9167 },
  kishanganj: { lat: 26.095, lng: 87.956 },
  jamui: { lat: 24.917, lng: 86.224 },
  sheikhpura: { lat: 25.15, lng: 85.85 },
  lakhisarai: { lat: 25.183, lng: 86.1 },
  khagaria: { lat: 25.5, lng: 86.4667 },
  supaul: { lat: 26.126, lng: 86.605 },
  araria: { lat: 26.15, lng: 87.5167 },
  banka: { lat: 24.887, lng: 86.924 },
  buxar: { lat: 25.5647, lng: 83.9777 },
  kaimur: { lat: 25.05, lng: 83.6 },
  sheohar: { lat: 26.5167, lng: 85.3 },
  bhojpur: { lat: 25.55, lng: 84.6667 },
  saharsa: { lat: 25.88, lng: 86.6 },
};

export default function DistrictServiceAreaMap({
  districtName,
  districtSlug,
  stateName = "Jharkhand",
  mapQuery,
  mapHeading,
  coordinates,
  popularRoutes = [],
  pincodeCoverage = [],
}: DistrictServiceAreaMapProps) {
  const slug = districtSlug ?? districtName.toLowerCase().replace(/\s+/g, '-');
  const coords = coordinates || districtCoordinates[slug];
  const uniquePopularRoutes = Array.from(new Set(popularRoutes));
  const uniquePincodeCoverage = Array.from(new Set(pincodeCoverage));

  // Using OpenStreetMap via iframe - no API key required
//   const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.15},${coords.lat - 0.15},${coords.lng + 0.15},${coords.lat + 0.15}&layer=mapnik`;

  const effectiveMapQuery = mapQuery ?? `${districtName}, ${stateName}`;
  const googleMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(effectiveMapQuery)}&t=&z=12&ie=UTF8&iwloc=&output=embed`;


  // Google Maps link for "Open in Maps"
  const mapsLink = `https://www.google.com/maps/search/${encodeURIComponent(effectiveMapQuery)}`;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden animate-pop-in" style={{ animationDelay: "160ms" }}>
      <div className="relative w-full h-80 md:h-96 bg-slate-100 overflow-hidden animate-fade-up" style={{ animationDelay: "100ms" }}>
        {/* <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          style={{ border: 0, borderRadius: '12px' }}
          src={osmUrl}
        ></iframe> */}

        <iframe
  width="100%"
  height="100%"
  frameBorder="0"
  scrolling="no"
  style={{ border: 0, borderRadius: '12px' }}
  src={googleMapUrl}
  loading="lazy"
></iframe>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-md font-black text-slate-950">{mapHeading ?? `Our Service Area in ${districtName}`}</h3>
            <p className="mt-2 text-sm text-slate-600">
              We cover all neighbourhoods, pincodes & nearby areas of {effectiveMapQuery}.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {coords ? "Coordinate reference available for this location." : "Google Maps query view enabled for this location."}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            <MapPin size={16} />
            Open in Maps
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm animate-fade-left" style={{ animationDelay: "120ms" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Popular routes</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {uniquePopularRoutes.map((route, index) => (
                <li key={`${route}-${index}`} className="rounded-2xl bg-white px-3 py-2 text-slate-800 shadow-sm">
                  {route}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm animate-fade-right" style={{ animationDelay: "140ms" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Pincode coverage</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {uniquePincodeCoverage.map((code, index) => (
                <span key={`${code}-${index}`} className="inline-flex rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
