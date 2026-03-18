import HubSpotForm from "./HubSpotForm";
import { siteContent } from "@/lib/siteContent";

export default function SecondaryCTA() {
    return (
        <section className="bg-brand-navy-ink py-24 px-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-burgundy/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-muted-teal/10 rounded-full blur-3xl" />

            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Need a managed office on <span className="text-brand-burgundy">{siteContent.secondaryCta.highlight}?</span>
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed">
                            {siteContent.secondaryCta.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <span className="text-brand-burgundy font-black text-2xl">{siteContent.secondaryCta.statOne.value}</span>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">{siteContent.secondaryCta.statOne.label}</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <span className="text-brand-burgundy font-black text-2xl">{siteContent.secondaryCta.statTwo.value}</span>
                            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mt-1">{siteContent.secondaryCta.statTwo.label}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end w-full max-w-[680px] mx-auto lg:mx-0">
                    <div id="secondary-lead-form" className="w-full scroll-mt-28">
                        <HubSpotForm loadStrategy="visible" />
                    </div>
                </div>
            </div>
        </section>
    );
}
