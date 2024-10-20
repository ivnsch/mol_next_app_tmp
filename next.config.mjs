export default {
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      syncWebAssembly: true,
    };
    return config;
  },
};
