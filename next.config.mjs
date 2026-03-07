/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
