"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/siteContent";

export default function Process() {
    return (
        <section className="bg-brand-modern-beige py-16 px-6 overflow-hidden">
            <div className="max-w-[1280px] mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-ink uppercase tracking-tight">
                        Your Office Ready in <span className="text-brand-burgundy">60 Days</span>
                    </h2>
                    <p className="text-lg text-brand-navy-grey max-w-2xl mx-auto">
                        Reassuringly fast and hassle-free move-in process tailored to your business timeline.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-brand-burgundy/20" />

                    {siteContent.process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center space-y-6 z-10"
                        >
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-brand-burgundy/10 shadow-lg mb-4">
                                <span className="text-brand-burgundy font-black text-xs uppercase tracking-widest text-center px-2">
                                    {step.day}
                                </span>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-brand-navy-ink">{step.title}</h3>
                                <p className="text-brand-navy-grey text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
