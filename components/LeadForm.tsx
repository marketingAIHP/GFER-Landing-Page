"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, Loader2, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    workstations: string;
};

export default function LeadForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<FormData>();

    const nextStep = async () => {
        const result = await trigger(["fullName", "email", "phone"]);
        if (result) setStep(2);
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Data:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-[460px] w-full text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-brand-navy-ink">Request received!</h3>
                    <p className="text-brand-navy-grey mt-2">
                        We&apos;ll call you within 24 hours to discuss your tailored office space options.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-[460px] w-full space-y-6">
            <div className="space-y-2">
                <h3 className="text-[clamp(1.75rem,3vw,2rem)] font-bold text-brand-navy-ink whitespace-nowrap">
                    Get Your Custom Quote
                </h3>
                <p className="text-sm text-brand-navy-grey">
                    Office space tailored to your needs. We&apos;ll call within 24 hours.
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                    className={cn(
                        "bg-brand-burgundy h-full transition-all duration-500",
                        step === 1 ? "w-1/2" : "w-full"
                    )}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {step === 1 ? (
                    <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-brand-navy-ink">Full Name *</label>
                            <input
                                {...register("fullName", { required: "Name is required", minLength: 2 })}
                                placeholder="Ex: John Doe"
                                className={cn(
                                    "w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-brand-muted-teal outline-none transition-all",
                                    errors.fullName ? "border-red-500" : "border-brand-slate-grey/30"
                                )}
                            />
                            {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-brand-navy-ink">Work Email *</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="john@company.com"
                                className={cn(
                                    "w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-brand-muted-teal outline-none transition-all",
                                    errors.email ? "border-red-500" : "border-brand-slate-grey/30"
                                )}
                            />
                            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-brand-navy-ink">Phone Number *</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy-grey border-r pr-2 border-brand-slate-grey/30">
                                    +91
                                </span>
                                <input
                                    {...register("phone", {
                                        required: "Phone is required",
                                        pattern: { value: /^[6-9]\d{9}$/, message: "Invalid 10-digit phone number" },
                                    })}
                                    placeholder="9876543210"
                                    className={cn(
                                        "w-full h-12 pl-16 px-4 border rounded-lg focus:ring-2 focus:ring-brand-muted-teal outline-none transition-all",
                                        errors.phone ? "border-red-500" : "border-brand-slate-grey/30"
                                    )}
                                />
                            </div>
                            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                        </div>

                        <button
                            type="button"
                            onClick={nextStep}
                            className="w-full h-13 bg-brand-burgundy text-white font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
                        >
                            Next
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-brand-navy-ink">Company Name *</label>
                            <input
                                {...register("companyName", { required: "Company name is required", minLength: 2 })}
                                placeholder="Ex: Google"
                                className={cn(
                                    "w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-brand-muted-teal outline-none transition-all",
                                    errors.companyName ? "border-red-500" : "border-brand-slate-grey/30"
                                )}
                            />
                            {errors.companyName && (
                                <p className="text-xs text-red-500">{errors.companyName.message}</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-brand-navy-ink">No. of Workstations *</label>
                            <select
                                {...register("workstations", { required: "Select workstation requirement" })}
                                className={cn(
                                    "w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-brand-muted-teal outline-none transition-all appearance-none bg-white",
                                    errors.workstations ? "border-red-500" : "border-brand-slate-grey/30"
                                )}
                            >
                                <option value="">Select Range</option>
                                <option value="20-50">20–50 seats</option>
                                <option value="51-100">51–100 seats</option>
                                <option value="101-250">101–250 seats</option>
                                <option value="251-500">251–500 seats</option>
                                <option value="500+">500+ seats</option>
                            </select>
                            {errors.workstations && (
                                <p className="text-xs text-red-500">{errors.workstations.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-13 bg-brand-burgundy text-white font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "Get Your Custom Quote"
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-sm text-brand-cool-grey hover:text-brand-navy-ink transition-colors"
                        >
                            ← Back to contact details
                        </button>
                    </div>
                )}

                <div className="pt-2 text-center space-y-2">
                    <div className="flex items-center justify-center gap-1.5 text-[12px] text-brand-cool-grey">
                        <Lock className="w-3.5 h-3.5" />
                        We&apos;ll call only about office options - no spam.
                    </div>
                    <p className="text-[13px] font-medium text-brand-muted-teal">
                        ⚡ Our team responds within 24 hours
                    </p>
                </div>
            </form>
        </div>
    );
}
