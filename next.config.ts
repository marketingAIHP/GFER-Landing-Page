import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [45, 60, 75],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
