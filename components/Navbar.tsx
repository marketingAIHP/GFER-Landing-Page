import { Phone } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/lib/siteContent";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 py-8 px-6 md:px-12 bg-transparent">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center">
                <div className="relative w-64 h-20">
                    <Image
                        src="/logo.png"
                        alt="AIHP Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                {/* Contact Info */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href={siteContent.contact.phoneHref}
                        className="inline-flex items-center gap-3 rounded-full bg-brand-burgundy px-6 py-3 text-white font-bold shadow-lg transition-opacity hover:opacity-90"
                    >
                        <Phone className="w-5 h-5" />
                        <span>{siteContent.contact.phoneDisplay}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
