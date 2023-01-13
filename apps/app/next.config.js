/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["vinci-web.s3.amazonaws.com"],
  },
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    transpilePackages: ["ui"],
  },
};

module.exports = nextConfig;

// const withPWA = require("next-pwa")({
//   dest: "public",
// });

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
//   reactStrictMode: false,
//   swcMinify: true,
//   images: {
//     domains: ["vinci-web.s3.amazonaws.com"],
//   },
//   output: "standalone",
//   experimental: {
//     outputFileTracingRoot: path.join(__dirname, "../../"),
//     transpilePackages: ["ui"],
//   },
// });
