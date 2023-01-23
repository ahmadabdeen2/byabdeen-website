/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental:{
    appDir: true
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  compiler:{
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
