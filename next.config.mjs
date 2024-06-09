/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pereiralivia.github.io',
      },
    ],
  },
};

export default nextConfig;
