import {
  Building2,
  Calendar,
  DraftingCompass,
  Layout,
  MapPinned,
  ShieldCheck,
  Users2,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Property = {
  name: string;
  location: string;
  description: string;
  image: string;
  href: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Stat = {
  icon: LucideIcon;
  stat: string;
  label: string;
};

export type Client = {
  name: string;
  image?: string;
};

export type JourneyStep = {
  day: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const siteContent = {
  metadata: {
    baseUrl: "https://golf-course-extension-road.aihp.in",
    title:
      "Office Space for Rent on Golf Course Extension Road | AIHP Managed Workspaces",
    description:
      "Premium managed office spaces on Golf Course Extension Road, Gurgaon. Explore flexible 20 to 500+ seat offices with zero capex and fast move-in support.",
    ogTitle: "Office Space for Rent on Golf Course Extension Road | AIHP",
    ogImage: "/Sites/Golf Course Ext. Road/AIHP One/AIHP-Millennium-Reception.webp",
  },
  contact: {
    phoneDisplay: "+91 7303060067",
    phoneHref: "tel:+917303060067",
    email: "leasing@aihp.in",
    address: "AIHP Tower, 249 G, Udyog Vihar, Phase 4, Gurgaon 122015",
  },
  hero: {
    highlight: "Golf Course Extension Road",
    description:
      "Discover premium managed offices across Gurgaon’s fastest-growing commercial corridor. AIHP helps teams move into brand-ready workspaces with flexible seat counts and zero setup friction.",
    backgroundImage:
      "/Sites/Golf Course Ext. Road/949dccc2-9f60-461e-8f9e-2a0c669d3f4e-e1770032516616.jpeg",
    trustBadges: [
      "Prime GCE Road location",
      "20 to 500+ seats",
      "Move-in ready options",
    ],
  },
  stats: [
    { icon: Building2, stat: "10M+", label: "SQ. FT DELIVERED" },
    { icon: Users2, stat: "500+", label: "Clients Served" },
    { icon: Calendar, stat: "15+", label: "Years Experience" },
    { icon: Layout, stat: "20-500+", label: "Seat Formats" },
  ] satisfies Stat[],
  properties: [
    {
      name: "AIHP One",
      location: "Golf Course Ext. Road",
      description:
        "Grade A building with strong frontage and visibility | 1,500-seat capacity | 100 Dedicated car parking | Corporate-grade reception",
      image:
        "/Sites/Golf Course Ext. Road/949dccc2-9f60-461e-8f9e-2a0c669d3f4e-e1770032516616.jpeg",
      href: "#lead-form",
      coordinates: { lat: 28.3945, lng: 77.0715 },
    },
    {
      name: "M3M Urbana",
      location: "Golf Course Ext. Road",
      description:
        "Mixed-use destination suited for high-visibility office formats with strong retail adjacency.",
      image: "/Sites/Golf Course Ext. Road/M3M Urbana/M3M-Urbana.webp",
      href: "#lead-form",
      coordinates: { lat: 28.3987, lng: 77.0736 },
    },
    {
      name: "Unitech Business Zone",
      location: "Golf Course Ext. Road",
      description:
        "Established business address designed for operational convenience and scalable team occupancy.",
      image:
        "/Sites/Golf Course Ext. Road/Unitech Business Zone/UNITECH-BUSINESS-ZONE-1-e1753089211223.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4118, lng: 77.0629 },
    },
    {
      name: "Spaze Business Park",
      location: "Golf Course Ext. Road",
      description:
        "Practical corporate campus environment with efficient floor plates and day-to-day accessibility.",
      image:
        "/Sites/Golf Course Ext. Road/Spaze Business Park/Spaze-Business-Park.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4026, lng: 77.0679 },
    },
    {
      name: "Pioneer Urban Square",
      location: "Golf Course Ext. Road",
      description:
        "Well-connected office destination with strong frontage and convenient access for clients and teams.",
      image:
        "/Sites/Golf Course Ext. Road/Pioneer Urban Square/Pioneer-Urban-Square.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4222, lng: 77.1062 },
    },
    {
      name: "Eros City Square",
      location: "Golf Course Ext. Road",
      description:
        "Business-ready office option in a mixed-use hub with nearby dining and retail support.",
      image:
        "/Sites/Golf Course Ext. Road/Eros City Square/Eros-City-Square.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4137, lng: 77.0581 },
    },
    {
      name: "BPTP Centre One",
      location: "Golf Course Ext. Road",
      description:
        "Commercial office address suited for teams that need practical floor plates and fast access across the corridor.",
      image:
        "/Sites/Golf Course Ext. Road/BPTP Centre One/bptp-centra.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4211, lng: 77.1118 },
    },
    {
      name: "Silverton Tower",
      location: "Golf Course Ext. Road",
      description:
        "Corporate office option with a straightforward business setup, suitable for managed occupancy and client-facing teams.",
      image:
        "/Sites/Golf Course Ext. Road/Silverton Tower/Silverton-Tower.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4104, lng: 77.0644 },
    },
    {
      name: "Splendor Spectrum",
      location: "Golf Course Ext. Road",
      description:
        "Flexible office destination for companies comparing newer Gurgaon inventory with balanced visibility and daily convenience.",
      image:
        "/Sites/Golf Course Ext. Road/Splendor Spectrum/SPLENDOR-SPECTRUM-1.webp",
      href: "#lead-form",
      coordinates: { lat: 28.4281, lng: 77.1102 },
    },
  ] satisfies Property[],
  clients: [
    {
      name: "Anand Rathi",
      image: "/4-1.jpg",
    },
    {
      name: "Dentsu",
      image: "/GFHJKJHGMHHGJH.png",
    },
    {
      name: "OLX",
      image: "/Group-274.jpg",
    },
    {
      name: "ArcelorMittal",
      image: "/Group-269.jpg",
    },
  ] satisfies Client[],
  process: [
    {
      day: "Day 1",
      title: "Design Kick-off",
      description:
        "Custom layouts and finishes designed to reflect your brand identity. You approve the design.",
    },
    {
      day: "Days 2-59",
      title: "Approval & Build",
      description:
        "Quick approvals and expert construction by AIHP's certified teams. Zero disruption to you.",
    },
    {
      day: "Day 60",
      title: "Move-in Day",
      description:
        "Walk into your fully furnished, technology-ready office space on Golf Course Extension Road. Your team, day one.",
    },
  ] satisfies JourneyStep[],
  testimonials: [
    {
      quote:
        "AIHP has transformed our office into a space that reflects our brand and impresses clients. Their expert design, attention to detail, and seamless blend of comfort and professionalism make them our trusted partner. Highly recommended.",
      name: "Mukesh Kumawat",
      role: "Executive Director & Unit Head - Gurgaon, Anand Rathi Wealth Limited",
      image: "/Mukesh-Kumawat.webp",
    },
    {
      quote:
        "At AIHP, excellence is standard. From top-tier offices to tailored designs, every aspect exceeds expectations. Choosing AIHP was simple - simply exceptional.",
      name: "Sudhir Sharma",
      role: "Regional Head, Arcelor Mittal Nippon Steel",
      image: "/Sudhir-Sharma.webp",
    },
    {
      quote:
        "AIHP created diverse spaces like conference rooms and collaboration zones with great amenities and natural light. AIHP's management and shared facilities are a huge plus, and their design team truly understood our needs!",
      name: "Harpreet Singh",
      role: "Co-founder, ProcDNA",
      image: "/Harpreet-Singh.webp",
    },
  ] satisfies Testimonial[],
  features: [
    {
      icon: Wallet,
      title: "Zero-capex flexibility",
      description:
        "Reduce upfront office setup costs and allocate capital toward hiring, sales, and growth priorities.",
    },
    {
      icon: MapPinned,
      title: "Prime GCE Road access",
      description:
        "Operate from one of Gurgaon’s most in-demand office corridors with direct connectivity to major sectors.",
    },
    {
      icon: ShieldCheck,
      title: "Managed operations",
      description:
        "AIHP handles facility oversight, support services, and workspace readiness so your team can stay focused.",
    },
    {
      icon: DraftingCompass,
      title: "Tailored space planning",
      description:
        "Adapt cabins, collaboration zones, and branding details to the way your team actually works.",
    },
  ] satisfies Feature[],
  location: {
    title: "Golf Course Extension Road",
    description:
      "A high-demand business corridor for companies that want modern inventory, premium catchments, and better access across new Gurgaon.",
    benefits: [
      "Direct road connectivity to Golf Course Road, Sohna Road, SPR, and key southern Gurgaon sectors",
      "Dense residential catchment nearby, helping teams reduce commute times and improve hiring appeal",
      "Growing ecosystem of premium offices, retail, cafes, and daily convenience infrastructure",
      "Strong fit for managed office, enterprise leasing, and hybrid workspace strategies",
      "Well-positioned for businesses serving clients across Gurgaon while avoiding older, congested office pockets",
    ],
    mapEmbed:
      "https://www.google.com/maps?q=Golf+Course+Extension+Road,+Gurugram&output=embed",
  },
  secondaryCta: {
    highlight: "Golf Course Extension Road",
    description:
      "Tell us your seat count and workplace requirements. We’ll help you compare the right assets across the corridor and move faster.",
    statOne: { value: "10M+", label: "Sq. Ft. Delivered" },
    statTwo: { value: "20-500+", label: "Seats supported" },
  },
  footer: {
    about:
      "AIHP delivers institutional-grade managed workspaces designed for faster occupancy, better operational control, and long-term business flexibility.",
  },
} as const;
