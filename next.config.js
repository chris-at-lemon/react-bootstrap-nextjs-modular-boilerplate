/** @type {import('next').NextConfig} */
const withImages = require('next-images');


// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ['en-GB'],
//     defaultLocale: 'en-GB',
//   }
// };

// module.exports = withBundleAnalyzer({nextConfig})

module.exports = withImages({
  reactStrictMode: true,
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
  serverRuntimeConfig: {
      secret: 'yabadabadoo'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/api' // development api
          : 'http://localhost:3000/api' // production api
  }
})
