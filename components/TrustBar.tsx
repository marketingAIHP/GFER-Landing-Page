import { siteContent } from "@/lib/siteContent";

export default function TrustBar() {
    return (
        <section className="bg-brand-modern-beige py-10 px-6">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {siteContent.stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                            <div className="flex items-center gap-3">
                                <item.icon className="w-6 h-6 text-brand-burgundy" />
                                <span className="text-3xl font-black text-brand-navy-ink tracking-tight">
                                    {item.stat}
                                </span>
                            </div>
                            <p className="text-sm font-bold text-brand-cool-grey uppercase tracking-wider">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
