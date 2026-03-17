"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/siteContent";

export default function PropertyShowcase() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        skipSnaps: false,
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        queueMicrotask(() => {
            onSelect();
            setScrollSnaps(emblaApi.scrollSnapList());
        });
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <section className="bg-brand-almost-white py-20 px-6">
            <div className="max-w-[1280px] mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-ink uppercase tracking-tight leading-tight">
                            Premium Managed <span className="text-brand-burgundy">Offices on GCE Road</span>
                        </h2>
                        <p className="text-lg text-brand-navy-grey">
                            Explore office destinations across Golf Course Extension Road, curated for visibility, flexibility, and faster occupancy.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-full border border-brand-slate-grey/20 bg-white text-brand-navy-ink transition-all shadow-sm group",
                                canScrollPrev ? "hover:bg-brand-burgundy hover:text-white" : "opacity-30 cursor-not-allowed"
                            )}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-full border border-brand-slate-grey/20 bg-white text-brand-navy-ink transition-all shadow-sm group",
                                canScrollNext ? "hover:bg-brand-burgundy hover:text-white" : "opacity-30 cursor-not-allowed"
                            )}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {siteContent.properties.map((property, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={property.image}
                                            alt={property.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-1.5 text-brand-burgundy">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.15em]">{property.location}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-brand-navy-ink group-hover:text-brand-burgundy transition-colors">{property.name}</h3>
                                        </div>
                                        <p className="text-brand-navy-grey text-sm leading-relaxed">
                                            {property.description}
                                        </p>
                                        <div className="pt-4 border-t border-slate-50">
                                            <span className="flex items-center gap-2 text-brand-burgundy font-bold text-sm">
                                                Managed office option
                                                <ChevronRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                selectedIndex === index
                                    ? "w-8 bg-brand-burgundy"
                                    : "w-2 bg-brand-slate-grey/20 hover:bg-brand-slate-grey/40"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
