'use client';

import { MapPin, ExternalLink } from 'lucide-react';

interface DistrictServiceAreaMapProps {
  districtName: string;
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
};

export default function DistrictServiceAreaMap({
  districtName,
  mapQuery,
  mapHeading,
  coordinates,
  popularRoutes = [],
  pincodeCoverage = [],
}: DistrictServiceAreaMapProps) {
  const slug = districtName.toLowerCase().replace(/\s+/g, '-');
  const coords = coordinates || districtCoordinates[slug];

  if (!coords) {
    return null;
  }

  // Using OpenStreetMap via iframe - no API key required
//   const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng - 0.15},${coords.lat - 0.15},${coords.lng + 0.15},${coords.lat + 0.15}&layer=mapnik`;

  const effectiveMapQuery = mapQuery ?? `${districtName}, Jharkhand`;
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
              {popularRoutes.map((route) => (
                <li key={route} className="rounded-2xl bg-white px-3 py-2 text-slate-800 shadow-sm">
                  {route}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm animate-fade-right" style={{ animationDelay: "140ms" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">Pincode coverage</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pincodeCoverage.map((code) => (
                <span key={code} className="inline-flex rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
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
