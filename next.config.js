/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'github-readme-activity-graph.vercel.app',
      'github-profile-trophy.vercel.app',
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
