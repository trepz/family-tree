module.exports = {
  chainWebpack: config => {
    config.module.rule('ts').exclude.add(/\.lit\.ts$/)

    config.module
      .rule('lit')
      .test(/\.lit\.ts$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compiler: require('vue-literal-compiler'),
      })
  },
}
