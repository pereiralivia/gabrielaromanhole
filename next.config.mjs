/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gabrielaromanhole.com.br',
      },
    ],
  },
};

export default nextConfig;
