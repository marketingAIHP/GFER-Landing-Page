"use client";

import Image from "next/image";
import HubSpotForm from "./HubSpotForm";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/siteContent";

export default function Hero() {
    return (
        <section className="relative min-h-[900px] md:min-h-screen flex items-center justify-center pt-32 pb-12 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={siteContent.hero.backgroundImage}
                    alt="AIHP Golf Course Extension Road"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-brand-navy-ink/60" />
            </div>

            <div className="relative z-10 max-w-[1360px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:pr-4"
                >
                    <div className="rounded-[32px] bg-white/68 p-8 shadow-[0_26px_80px_rgba(5,22,34,0.24)] ring-1 ring-white/45 backdrop-blur-sm md:p-10 lg:p-12">
                        <div className="space-y-6">
                            <h1 className="max-w-[14ch] text-[clamp(1.7rem,3.4vw,2.85rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-[#7D2328] [font-family:Georgia,'Times_New_Roman',serif]">
                                Office Space for Rent on {siteContent.hero.highlight}
                            </h1>
                            <p className="max-w-[30ch] text-lg leading-[1.55] text-brand-navy-ink/82 md:text-xl">
                                {siteContent.hero.description}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {siteContent.stats.slice(0, 3).map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.45 + index * 0.1 }}
                                        className={[
                                            "inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold shadow-sm md:text-base",
                                            index === 0
                                                ? "bg-brand-burgundy text-white"
                                            : index === 1
                                                  ? "bg-brand-muted-teal text-white"
                                                  : "bg-brand-navy-ink text-white",
                                        ].join(" ")}
                                    >
                                        <Icon className="h-4 w-4 shrink-0" />
                                        <span className="whitespace-nowrap">{item.stat} {item.label.toLowerCase()}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex w-full justify-start scroll-mt-28"
                    id="lead-form"
                >
                    <div className="w-full max-w-[680px] mr-auto">
                        <HubSpotForm />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
