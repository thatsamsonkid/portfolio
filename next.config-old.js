/**
 * @type {import('next').NextConfig}
 *
 *
 */
const path = require('path');

const domain = "sammymohamed.com";


console.log(path.join(__dirname, "src/styles")); 
console.log(path.join(__dirname, "node_modules/bootstrap/scss"));

const nextConfig = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    host: process.env.PROD ? domain : `dev.${domain}`,
    // Will be available on both server and client
    recaptchaKey: "",
    production: process.env.PROD,
    apiGateway: process.env.PROD
      ? ""
      : "",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles"), 
      path.join(__dirname, "node_modules/bootstrap/scss")
    ]
  },
};

module.exports = nextConfig;
