"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PropertyMap from "./PropertyMap";
import { siteContent } from "@/lib/siteContent";

export default function LocationBenefits() {
    return (
        <section className="bg-brand-almost-white py-16 px-6">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-ink uppercase tracking-tight">
                            Why <span className="text-brand-burgundy">{siteContent.location.title}</span>?
                        </h2>
                        <p className="text-lg text-brand-navy-grey">
                            {siteContent.location.description}
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {siteContent.location.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-4 group">
                                <CheckCircle2 className="w-6 h-6 text-brand-muted-teal flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="text-brand-navy-grey leading-relaxed">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                >
                    <PropertyMap properties={siteContent.properties} />
                </motion.div>
            </div>
        </section>
    );
}
