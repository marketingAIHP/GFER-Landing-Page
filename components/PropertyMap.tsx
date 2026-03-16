"use client";

import { useEffect, useRef, useState } from "react";
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

function createPropertyLabelOverlay(googleMaps: any, map: any, position: any, title: string) {
  class PropertyLabelOverlay extends googleMaps.OverlayView {
    div: HTMLDivElement | null = null;
    position: any;
    title: string;

    constructor(overlayPosition: any, overlayTitle: string) {
      super();
      this.position = overlayPosition;
      this.title = overlayTitle;
    }

    onAdd() {
      const div = document.createElement("div");
      div.className = "pointer-events-none absolute -translate-y-1/2";
      div.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:999px;background:rgba(255,255,255,0.96);box-shadow:0 10px 30px rgba(5,22,34,0.16);border:1px solid rgba(139,18,18,0.12);font-family:Segoe UI,Arial,sans-serif;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:#1A2B47;white-space:nowrap;">
          <span style="width:14px;height:14px;border-radius:999px;background:#8B1212;box-shadow:0 0 0 4px rgba(139,18,18,0.14);display:inline-block;"></span>
          <span>${this.title}</span>
        </div>
      `;

      this.div = div;
      const panes = this.getPanes();
      panes?.overlayMouseTarget.appendChild(div);
    }

    draw() {
      const projection = this.getProjection();
      const pixel = projection?.fromLatLngToDivPixel(this.position);

      if (!this.div || !pixel) {
        return;
      }

      this.div.style.left = `${pixel.x + 14}px`;
      this.div.style.top = `${pixel.y - 8}px`;
    }

    onRemove() {
      this.div?.remove();
      this.div = null;
    }
  }

  const overlay = new PropertyLabelOverlay(position, title);
  overlay.setMap(map);
  return overlay;
}

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
          zoom: 14,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          styles: [
            { featureType: "poi.business", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] },
          ],
        });

        const bounds = new googleMaps.LatLngBounds();
        const infoWindow = new googleMaps.InfoWindow();

        properties.forEach((property) => {
          const position = new googleMaps.LatLng(
            property.coordinates.lat,
            property.coordinates.lng
          );

          const marker = new googleMaps.Marker({
            map,
            position,
            title: property.name,
            animation: googleMaps.Animation.DROP,
            icon: {
              path: googleMaps.SymbolPath.CIRCLE,
              fillColor: "#8B1212",
              fillOpacity: 1,
              strokeColor: "#FFFFFF",
              strokeWeight: 2,
              scale: 0,
            },
          });

          createPropertyLabelOverlay(googleMaps, map, position, property.name);

          marker.addListener("click", () => {
            infoWindow.setContent(
              `<div style="padding:8px 10px; font-family:Segoe UI, Arial, sans-serif;">
                <div style="font-weight:700; color:#051622;">${property.name}</div>
                <div style="margin-top:4px; color:#475569;">${property.location}</div>
              </div>`
            );
            infoWindow.open({ anchor: marker, map });
          });

          bounds.extend(position);
        });

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
    <div className="relative h-[520px] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
      <div ref={mapRef} className="h-full w-full bg-brand-almost-white" />
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
          <div className="rounded-full bg-brand-navy-ink px-4 py-2 text-sm font-semibold text-white">
            Loading map...
          </div>
        </div>
      )}
    </div>
  );
}
