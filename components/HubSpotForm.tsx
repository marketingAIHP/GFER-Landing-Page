"use client";

import LazyMount from "./LazyMount";

interface HubSpotFormProps {
  shareUrl?: string;
  loadStrategy?: "idle" | "visible";
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  shareUrl = "https://rbzud.share-na2.hsforms.com/2iStDmME0R5GqNPV1FdgXTA",
  loadStrategy = "visible",
}) => {
  const fallback = (
    <div className="flex h-[500px] w-full items-center justify-center bg-[linear-gradient(180deg,#fafafa_0%,#f3f4f6_100%)] text-center text-sm font-medium text-brand-navy-grey sm:h-[520px] lg:h-[540px]">
      Loading enquiry form...
    </div>
  );

  return (
    <div className="w-full overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(5,22,34,0.18)] ring-1 ring-black/5">
      <LazyMount
        idle={loadStrategy === "idle"}
        fallback={fallback}
        rootMargin="300px"
      >
        <iframe
          src={shareUrl}
          title="AIHP enquiry form"
          loading="lazy"
          className="block h-[500px] w-full border-0 sm:h-[520px] lg:h-[540px]"
        />
      </LazyMount>
    </div>
  );
};

export default HubSpotForm;
