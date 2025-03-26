/** @type {import('next').NextConfig} */
const nextConfig = {
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