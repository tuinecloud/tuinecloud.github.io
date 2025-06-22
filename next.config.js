/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['source.unsplash.com', 'images.unsplash.com', 'ext.same-assets.com', 'ugc.same-assets.com'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
