/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export - let Vercel handle it
  // output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
