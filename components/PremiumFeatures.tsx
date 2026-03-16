"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/siteContent";

export default function PremiumFeatures() {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-[1280px] mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-ink uppercase tracking-tight">
                        Premium <span className="text-brand-burgundy">Managed Features</span>
                    </h2>
                    <p className="text-lg text-brand-navy-grey max-w-2xl mx-auto">
                        The workspace features companies usually prioritize when comparing offices on Golf Course Extension Road.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteContent.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-brand-almost-white/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-brand-burgundy/10 rounded-xl flex items-center justify-center text-brand-burgundy mb-6 group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy-ink mb-3 leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-brand-navy-grey text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
