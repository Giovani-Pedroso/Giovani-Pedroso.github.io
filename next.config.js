/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  //exportTrailingSlash: true,
  trailingSlash: true,
  /*
    basePath:"/nextjs-pages",
    assetPrefix:"/nextjs-pages"
    */
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.html$/i,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "html-loader",
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
