/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'aurarenovations.ca', 'aurarenos.ca', 'aurarenos.com'],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'aurarenos.ca',
          },
        ],
        destination: '/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'aurarenos.com',
          },
        ],
        destination: '/:path*',
      },
    ]
  },
}

module.exports = nextConfig
