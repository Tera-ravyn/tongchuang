/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imglf4.lf127.net",
      },
      {
        protocol: "https",
        hostname: "imglf5.lf127.net",
      },
      {
        protocol: "https",
        hostname: "imglf6.lf127.net",
      },
      {
        protocol: "https",
        hostname: "m.qpic.cn",
      },
    ],
  },
};

export default nextConfig;
