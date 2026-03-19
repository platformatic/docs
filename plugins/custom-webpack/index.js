const webpack = require('webpack')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

module.exports = function customWebpackPlugin () {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack () {
      return {
        resolve: {
          fullySpecified: false,
          alias: {
            '@orama/react-components': path.resolve(process.cwd(), 'node_modules', '@orama', 'react-components', 'dist', 'index.mjs'),
            'process/browser': path.resolve(process.cwd(), 'node_modules', 'process', 'browser.js')
          },
          fallback: {
            process: require.resolve('process/browser'),
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            crypto: require.resolve('crypto-browserify')
          }
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
          })
        ]
      }
    }
  }
}
