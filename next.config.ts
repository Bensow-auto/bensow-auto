import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qynfucdsediwkcfwaqty.supabase.co",
      },
    ],
  },
};

export default nextConfig;
