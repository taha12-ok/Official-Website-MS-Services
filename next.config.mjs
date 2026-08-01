/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local public assets are served from the same origin; no remote domains
    // required. Modern formats reduce payload without changing markup.
    formats: ['image/avif', 'image/webp'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  swcMinify: true,
  compress: true,
}

export default nextConfig
