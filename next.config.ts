import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 HTTPS 이미지 허용
      },
      {
        protocol: 'http',
        hostname: '**', // HTTP 허용
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
