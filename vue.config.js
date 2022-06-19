const  path = require('path')

function resolve(dir){
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8888,
    open: 'http://localhost:8888'
  },
  chainWebpack(config) {
    config.resolve.alias
        .set('~@', resolve('src'))
        .set('~assets', resolve('src/assets'))
  }
}