import Image from "next/image";
import { siteContent } from "@/lib/siteContent";

export default function Testimonials() {
    return (
        <section className="bg-brand-almost-white py-16 px-6">
            <div className="max-w-[1280px] mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-ink uppercase tracking-tight">
                        Trusted by Teams That Chose <span className="text-brand-burgundy">AIHP to Scale Faster</span>
                    </h2>
                    <p className="text-lg text-brand-navy-grey max-w-2xl mx-auto">
                        Real feedback from businesses that wanted premium offices, quicker execution, and a smoother move-in experience.
                    </p>
                </div>

                <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 lg:grid-cols-3">
                    {siteContent.testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[88%] snap-center bg-white p-8 rounded-[28px] shadow-sm border border-slate-200 flex flex-col justify-between min-h-[400px] md:min-w-0"
                        >
                            <div className="space-y-8">
                                <div className="w-16 h-1 rounded-full bg-brand-burgundy/40" />
                                <div className="border-l-4 border-brand-burgundy/40 pl-8 min-h-[190px]">
                                    <p className="text-brand-navy-ink text-base md:text-lg leading-8 italic">
                                        {item.quote}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-slate-200">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xl font-bold leading-tight text-brand-navy-ink">
                                        {item.name}
                                    </p>
                                    <p className="text-brand-navy-grey text-sm leading-relaxed">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
