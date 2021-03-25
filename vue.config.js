module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
