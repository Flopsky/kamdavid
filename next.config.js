/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable API routes and server/edge runtimes by removing static export
  images: { unoptimized: true },
}

module.exports = nextConfig
