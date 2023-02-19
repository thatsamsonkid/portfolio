/** @type {import('next').NextConfig} */
const domain = "sammymohamed.com";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    host: process.env.PROD ? domain : `dev.${domain}`,
    // Will be available on both server and client
    recaptchaKey: "",
    production: process.env.PROD,
    apiGateway: process.env.PROD ? "" : "",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
