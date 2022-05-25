/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  }
};

module.exports = withBundleAnalyzer({nextConfig})
