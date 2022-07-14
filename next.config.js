/** @type {import('next').NextConfig} */

module.exports = {
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
  },
  env: {
    googleMapsApiKey: 'AIzaSyASj51Y1vhC74Cr-wPqKSHLg8DW8HMTITI',
    openWeatherApiKey: '47f409a9010a803408dc5f5242fd4b2d',
    rapidApiKey: 'f7c2fcdb11msh1942c6e2a678652p1915e5jsnb460a722d3da'
  }
}
