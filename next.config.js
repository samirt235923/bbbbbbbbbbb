/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: false,
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
