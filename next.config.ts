import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**', // опционально
      },
      {
        protocol: 'https', 
        hostname: 'cdn.example.org',
      },
    ],
  },
  experimental: {
    optimizeCss: true, 
  },
};

export default nextConfig;
