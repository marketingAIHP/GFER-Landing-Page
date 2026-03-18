import { CheckCircle2 } from "lucide-react";
import PropertyMap from "./PropertyMap";
import LazyMount from "./LazyMount";
import { siteContent } from "@/lib/siteContent";

export default function LocationBenefits() {
    return (
        <section className="bg-brand-almost-white py-16 px-6">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-ink uppercase tracking-tight">
                            Why <span className="text-brand-burgundy">{siteContent.location.title}?</span>
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
                </div>

                <div className="space-y-5">
                    <LazyMount
                        rootMargin="100px"
                        fallback={
                            <div className="flex h-[520px] items-center justify-center rounded-2xl border-4 border-white bg-white p-6 text-center shadow-xl">
                                <p className="max-w-sm text-sm font-medium text-brand-navy-grey">
                                    Loading interactive property map...
                                </p>
                            </div>
                        }
                    >
                        <PropertyMap properties={siteContent.properties} />
                    </LazyMount>
                </div>
            </div>
        </section>
    );
}
