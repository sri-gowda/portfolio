const withImages = require("next-images");

module.exports = withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    });

    return config;
  },
});
