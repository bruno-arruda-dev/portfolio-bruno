/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/About',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/Projects',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/Contact',
        destination: '/#contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
