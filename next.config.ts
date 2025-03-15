import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
