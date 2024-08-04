/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.googleusercontent.com',
      },
      {
        hostname: 'linklist03.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
