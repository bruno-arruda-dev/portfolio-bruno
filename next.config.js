const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
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
