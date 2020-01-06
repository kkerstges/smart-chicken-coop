const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
  chainWebpack: config => {
    const sassRule = config.module.rule('sass')
    sassRule.uses.clear()
    sassRule.use('null-loader').loader('null-loader')

    const scssRule = config.module.rule('scss')
    scssRule.uses.clear()
    scssRule.use('null-loader').loader('null-loader')
  }
}
