const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.config()

module.exports = function customWebpackPlugin () {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack (config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            crypto: require.resolve('crypto-browserify')
          }
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
          }),
          new webpack.DefinePlugin({
            'process.env.STORYBLOK_ACCESS_TOKEN': JSON.stringify(
              process.env.STORYBLOK_ACCESS_TOKEN
            ),
            'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL)
          })
        ]
      }
    }
  }
}
