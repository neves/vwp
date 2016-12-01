const merge = require('wpc/merge')

var config = merge(
  require('wpc/defaults'),
{
  env: {
    root: process.cwd(),
    src: process.cwd() + '/src'
  }
}
,
{
  context: process.cwd(),
  entry: process.cwd() + '/src/index.js',
  output: {
    path: process.cwd() + '/dist',
    filename: '[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    noInfo: true
  },

},
  require('wpc/resolve-src'),
  require('wpc/global-node-modules'),
  require('wpc/define-env'),
  require('wpc/define-version'),
  require('wpc/css'),
  require('wpc/coffee'),

  require('wpc/babel'),
  require('wpc/babel-es2015'),
  require('wpc/babel-stage3'),

  require('wpc/vue'),
  require('wpc/vue-babel'),
  require('wpc/vue-pug'),
  require('wpc/vue-scss'),
  require('wpc/vue-sass'),
  require('wpc/vue-stylus'),

  require('wpc/html')
)

delete config.env
// console.log(new Set(config.packages))
delete config.packages

module.exports = config
