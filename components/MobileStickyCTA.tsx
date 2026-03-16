"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/lib/siteContent";

export default function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 w-full z-[100] md:hidden transition-all duration-300 transform",
                isVisible ? "translate-y-0" : "translate-y-full"
            )}
        >
            <div className="bg-white border-t border-slate-100 p-4 flex gap-4 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
                <a
                    href={siteContent.contact.phoneHref}
                    className="flex-1 h-14 bg-brand-muted-teal text-white flex items-center justify-center gap-2 rounded-xl font-bold"
                >
                    <Phone className="w-5 h-5" />
                    Call Now
                </a>
                <button
                    onClick={() => {
                        document.getElementById("lead-form")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                    className="flex-1 h-14 bg-brand-burgundy text-white flex items-center justify-center gap-2 rounded-xl font-bold"
                >
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
