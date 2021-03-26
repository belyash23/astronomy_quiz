const path = require("path");
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  configureWebpack: {
    entry: './src/js/main.js',
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, './src/assets/'),
        Components: path.resolve(__dirname, './src/components/'),
        Js: path.resolve(__dirname, './src/js/'),
        Sass: path.resolve(__dirname, './src/sass/'),
        CommonSass: path.resolve(__dirname, './src/sass/common.sass')
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/astronomy_quiz/'
    : '/'
}
