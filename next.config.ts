import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
    styledComponents: {
      minify: true,
    },
  },
};

export default nextConfig;
