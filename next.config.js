/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
          },
        ],
      },
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    }
}

module.exports = nextConfig
