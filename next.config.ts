import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isPages
    ? {
        basePath: "/seabornmedia",
        assetPrefix: "/seabornmedia/",
      }
    : {}),
};

export default nextConfig;
