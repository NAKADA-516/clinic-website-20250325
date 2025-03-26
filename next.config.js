/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
      '@app': './app',
      '@components': './app/components',
    };
    return config;
  },
}

module.exports = nextConfig 