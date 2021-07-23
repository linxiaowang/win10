
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('store', resolve('./src/store'))
      .set('router', resolve('./src/router'))
      .set('plugins', resolve('./src/plugins'))
      .set('comps', resolve('./src/components'))
      .set('styles', resolve('./src/styles'))
  }
}
