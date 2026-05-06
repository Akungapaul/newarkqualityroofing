import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/flat-roof-installation-newark-nj',
        destination: '/flat-roof-installation-repair-newark-nj',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.newarkqualityroofing.com' }],
        destination: 'https://newarkqualityroofing.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
