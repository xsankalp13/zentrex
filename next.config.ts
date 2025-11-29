/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the images configuration block here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com', // Whitelist the domain for the avatar placeholder
        port: '',
        pathname: '/7.x/avataaars/svg/**',
      },
    ],
  },
};

module.exports = nextConfig;