/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      encoding: false,
      "pino-pretty": false,
    };
    return config;
  },
};

export default nextConfig;
