module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    MAP_ID: process.env.NEXT_PUBLIC_MAP_ID, // Pass through env variables
  },
  images: {
    deviceSizes: [500, 640, 750, 828, 1080, 1200, 1920],
  },

  // webpack: (config, { isServer }) => {
  //   if (process.env.ANALYZE) {
  //     config.plugins.push(
  //       new BundleAnalyzerPlugin({
  //         analyzerMode: 'server',
  //         analyzerPort: isServer ? 8888 : 8889,
  //         openAnalyzer: true,
  //       }),
  //     );
  //   }
  //   return config;
  // },
};
