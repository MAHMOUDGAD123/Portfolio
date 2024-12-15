import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
    workerThreads: true,
    webpackMemoryOptimizations: true,
    turbo: {
      minify: true,
    },
    serverSourceMaps: true,
    serverMinification: true,
    parallelServerCompiles: true,
    reactCompiler: true,
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
    styledComponents: {
      minify: true,
    },
  },
};

export default nextConfig;
