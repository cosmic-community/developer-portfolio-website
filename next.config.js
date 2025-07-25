/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.cosmicjs.com',
      'imgix.cosmicjs.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
      },
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
      }
    ]
  },
  experimental: {
    typedRoutes: false
  }
}

module.exports = nextConfig