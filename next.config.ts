import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },

      {
        protocol: 'https',
        hostname: 'image.mux.com',
      },

      {
        protocol: 'https',
        hostname: '797gbf04n5.ufs.sh',
      },
    ],
  },
};

export default nextConfig;
