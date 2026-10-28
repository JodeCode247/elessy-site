"use client";

import { useState } from "react";
import { MapPin, X, ExternalLink } from "lucide-react";

type CompanyMapProps = {
  city: string;
  address: string;
  mapsQuery?: string;
};

export function CompanyMap({
  city,
  address,
  mapsQuery,
}: CompanyMapProps) {
  const [isOpen, setIsOpen] = useState(false);

  const location = mapsQuery || `${address}, ${city}, Nigeria`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&output=embed`;

  const externalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;

  return (
    <>
      <div>
        <p className="py-2 text-[15px] font-semibold text-white">
          {city}
        </p>

        <p className="text-[14px] leading-6 text-white/70">
          {address}
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mt-2 inline-flex min-h-9 items-center gap-2 text-[13px] font-semibold text-white/90 transition-colors hover:text-signal"
        >
          <MapPin aria-hidden="true" className="h-4 w-4" />
          View Location
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`company-map-title-${city}`}
            className="w-full max-w-4xl overflow-hidden bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4 sm:px-7">
              <div>
                <div className="flex items-center gap-2 text-red-600">
                  <MapPin aria-hidden="true" className="h-5 w-5" />

                  <span className="text-xs font-bold uppercase tracking-[0.16em]">
                    Our Office
                  </span>
                </div>

                <h2
                  id={`company-map-title-${city}`}
                  className="mt-1 text-lg font-bold text-neutral-950 sm:text-xl"
                >
                  ELESSY — {city}
                </h2>

                <p className="mt-1 text-sm text-neutral-600">
                  {address}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close map"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="relative h-[350px] bg-neutral-100 sm:h-[480px]">
              <iframe
                title={`Google Maps location of ELESSY ${city} office`}
                src={embedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 border-0"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-sm text-neutral-600">
                Find our office on Google Maps.
              </p>

              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Get Directions
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}