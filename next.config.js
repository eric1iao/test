import "./ser/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    localed: ["en"],
    defaultLocale: "en",
  },
  output: 'standalone',
  transilePackages: ["geist"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use:["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*svg":{
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};
