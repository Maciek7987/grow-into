/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

nextConfig.images = {
  deviceSizes: [360, 1440, 1920],
};
module.exports = nextConfig;
