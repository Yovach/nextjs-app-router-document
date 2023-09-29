/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  poweredByHeader: false,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  experimental: {
    serverActions: true,
    fallbackNodePolyfills: false,
    logging: {
      level: "verbose"
    },
    esmExternals: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
