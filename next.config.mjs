/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'], 
  },
  output: "standalone",
  experimental: {
    appDir: true, 
  },
  reactStrictMode: true,
};

export default nextConfig;
