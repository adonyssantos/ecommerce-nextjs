/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['adonys.me', 'www.adonys.me', 'dev.adonys.me', 'next.adonys.me'],
  },
};

module.exports = nextConfig;
