const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = {
  productionSourceMap: false,
  css: {
    extract: {
      filename: 'css/[name].css',
    },
  },
  configureWebpack: {
    entry: {
      index: './src/content/main.js',
    },
    output: {
      filename: 'js/[name].js',
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve('src/plugins/manifest.json'),
            to: `${path.resolve('dist')}/manifest.json`,
          },
          {
            from: path.resolve('src/assets'),
            to: path.resolve('dist/assets'),
          },
        ],
      }),
    ],
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('js/[name].js').end()
      config.output.chunkFilename('js/[name].js').end()
    }
  },
}
