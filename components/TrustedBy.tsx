import Image from "next/image";
import { siteContent } from "@/lib/siteContent";

export default function TrustedBy() {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-[1280px] mx-auto space-y-10">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-brand-navy-ink tracking-tight uppercase">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-brand-navy-grey font-medium uppercase tracking-[0.2em] text-sm">
                        15+ years | 500+ clients | premium managed offices
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-center">
                    {siteContent.clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex justify-center py-4 px-4 border border-slate-100 rounded-xl md:py-6 md:px-8 md:grayscale md:opacity-50 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300"
                        >
                            {client.image ? (
                                <div className="relative h-24 w-full max-w-[140px] sm:h-28 sm:max-w-[160px] md:h-40 md:max-w-[280px]">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        fill
                                        className="object-contain"
                                        sizes="280px"
                                    />
                                </div>
                            ) : (
                                <div className="flex h-40 w-full max-w-[280px] items-center justify-center text-center">
                                    <span className="text-2xl font-bold uppercase tracking-[0.08em] text-brand-navy-ink">
                                        {client.name}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
