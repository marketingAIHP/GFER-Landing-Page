"use client";

interface HubSpotFormProps {
  shareUrl?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  shareUrl = "https://rbzud.share-na2.hsforms.com/2iStDmME0R5GqNPV1FdgXTA",
}) => {
  return (
    <div className="w-full overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(5,22,34,0.18)] ring-1 ring-black/5">
      <iframe
        src={shareUrl}
        title="AIHP enquiry form"
        loading="lazy"
        className="block h-[500px] w-full border-0 sm:h-[520px] lg:h-[540px]"
      />
    </div>
  );
};

export default HubSpotForm;
