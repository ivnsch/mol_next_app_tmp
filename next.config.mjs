const nextConfig = {
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      syncWebAssembly: true,
    };
    return config;
  },
};

export default nextConfig;
