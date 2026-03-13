/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/-next-ads-sample-4' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/-next-ads-sample-4' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
