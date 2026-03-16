"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import type { Property } from "@/lib/siteContent";

declare global {
  interface Window {
    google?: any;
    __googleMapsInitPromise?: Promise<void>;
  }
}

type PropertyMapProps = {
  properties: readonly Property[];
};

const DEFAULT_CENTER = { lat: 28.4315, lng: 77.1037 };

function loadGoogleMaps(apiKey: string) {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (window.__googleMapsInitPromise) {
    return window.__googleMapsInitPromise;
  }

  window.__googleMapsInitPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps failed to load."));
    document.head.appendChild(script);
  });

  return window.__googleMapsInitPromise;
}

export default function PropertyMap({ properties }: PropertyMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!apiKey || !mapRef.current) {
        setStatus("error");
        return;
      }

      try {
        await loadGoogleMaps(apiKey);

        if (!isMounted || !window.google?.maps || !mapRef.current) {
          return;
        }

        const googleMaps = window.google.maps;
        const map = new googleMaps.Map(mapRef.current, {
          center: DEFAULT_CENTER,
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          styles: [
            { featureType: "poi.business", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] },
          ],
        });

        const geocoder = new googleMaps.Geocoder();
        const bounds = new googleMaps.LatLngBounds();
        const infoWindow = new googleMaps.InfoWindow();

        await Promise.all(
          properties.map(
            (property) =>
              new Promise<void>((resolve) => {
                const query = `${property.name}, Golf Course Extension Road, Gurugram, Haryana`;

                geocoder.geocode(
                  { address: query },
                  (results: any[] | null, geocodeStatus: string) => {
                  if (
                    geocodeStatus === "OK" &&
                    results &&
                    results[0]?.geometry?.location
                  ) {
                    const marker = new googleMaps.Marker({
                      map,
                      position: results[0].geometry.location,
                      title: property.name,
                      animation: googleMaps.Animation.DROP,
                    });

                    marker.addListener("click", () => {
                      infoWindow.setContent(
                        `<div style="padding:8px 10px; font-family:Segoe UI, Arial, sans-serif;">
                          <div style="font-weight:700; color:#051622;">${property.name}</div>
                          <div style="margin-top:4px; color:#475569;">${property.location}</div>
                        </div>`
                      );
                      infoWindow.open({ anchor: marker, map });
                    });

                    bounds.extend(results[0].geometry.location);
                  }

                    resolve();
                  }
                );
              })
          )
        );

        if (!bounds.isEmpty()) {
          map.fitBounds(bounds, 60);
        }

        if (isMounted) {
          setStatus("ready");
        }
      } catch {
        if (isMounted) {
          setStatus("error");
        }
      }
    }

    void initMap();

    return () => {
      isMounted = false;
    };
  }, [apiKey, properties]);

  if (!apiKey) {
    return (
      <div className="flex h-[360px] items-center justify-center rounded-2xl border-4 border-white bg-white p-6 text-center shadow-xl">
        <p className="max-w-sm text-sm font-medium text-brand-navy-grey">
          Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to load the interactive property map.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="relative h-[360px] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
        <div ref={mapRef} className="h-full w-full bg-brand-almost-white" />
        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
            <div className="rounded-full bg-brand-navy-ink px-4 py-2 text-sm font-semibold text-white">
              Loading map...
            </div>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-brand-burgundy" />
          <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy-ink">
            Sites On This Corridor
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {properties.map((property) => {
            const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${property.name}, Golf Course Extension Road, Gurugram`
            )}`;

            return (
              <a
                key={property.name}
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brand-navy-ink transition-colors hover:border-brand-burgundy/30 hover:bg-brand-almost-white"
              >
                <span>{property.name}</span>
                <ExternalLink className="h-4 w-4 shrink-0 text-brand-burgundy" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
