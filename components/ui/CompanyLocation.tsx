import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

type CompanyLocationProps = {
  city: string;
  address: string;
  mapsUrl: string;
  className?: string;
};

export function CompanyLocation({
  city,
  address,
  mapsUrl,
  className = "",
}: CompanyLocationProps) {
  return (
    <div className={className}>
      <p className="py-2 text-[15px] font-semibold text-white">
        {city}
      </p>

      <p className="text-[14px] leading-6 text-white/70">
        {address}
      </p>

      <Link
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${city} office on Google Maps`}
        className="mt-2 inline-flex min-h-9 items-center gap-2 text-[13px] font-semibold text-white/90 transition-colors hover:text-signal"
      >
        <MapPin aria-hidden="true" className="h-4 w-4" />
        View on Google Maps
        <ArrowUpRight
          aria-hidden="true"
          className="h-3.5 w-3.5"
        />
      </Link>
    </div>
  );
}