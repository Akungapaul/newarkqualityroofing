import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
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
