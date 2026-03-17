import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/lib/siteContent";

export default function Footer() {
    return (
        <footer className="bg-brand-navy-ink border-t border-white/5 px-6 py-16 sm:px-8 sm:py-18 lg:px-10">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3 md:gap-20 lg:gap-28">
                {/* Logo & About */}
                <div className="space-y-6 text-left">
                    <div className="relative w-56 h-14">
                        <Image
                            src="/logo.png"
                            alt="AIHP Logo"
                            fill
                            className="object-contain object-left"
                            sizes="224px"
                        />
                    </div>
                    <p className="max-w-xs text-sm leading-relaxed text-white/60">
                        Gurgaon&apos;s leading institutional managed workspace provider. Delivering value through architectural precision and operational excellence.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-6 text-left">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                            <Phone className="w-5 h-5 text-brand-burgundy" />
                            <span>{siteContent.contact.phoneDisplay}</span>
                        </li>
                        <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                            <Mail className="w-5 h-5 text-brand-burgundy" />
                            <span>{siteContent.contact.email}</span>
                        </li>
                        <li className="flex items-start gap-3 text-white/60 hover:text-white transition-colors">
                            <MapPin className="w-5 h-5 text-brand-burgundy flex-shrink-0" />
                            <span>{siteContent.contact.address}</span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="text-left">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
                    <ul className="space-y-3 mt-4">
                        <li>
                            <a
                                href="https://aihp.in/about/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://aihp.in/location/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                Locations
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://aihp.in/our-clients/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                Clients
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://aihp.in/gallery/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto mt-12 pt-6 border-t border-white/5 flex justify-center items-center sm:mt-14 sm:pt-7">
                <p className="text-white/55 text-sm font-bold text-center">
                    © {new Date().getFullYear()} AIHP Adding Value. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
