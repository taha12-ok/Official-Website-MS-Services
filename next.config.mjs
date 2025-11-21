/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-domain.com'], // Add your production domain
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Optional: Add this for better performance on Vercel
  swcMinify: true,
  compress: true,
}

export default nextConfig
