/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = {
    nextConfig,
    images: {
      domains: ['briowindows.mugenhub.com', 'res.cloudinary.com'],
    },
  }