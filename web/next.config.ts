import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/api/.well-known/apple-app-site-association",
      },
      {
        source: '/.well-known/assetlinks.json',
        destination: '/api/.well-known/assetlinks',
      },
    ];
  },
};

export default nextConfig;
