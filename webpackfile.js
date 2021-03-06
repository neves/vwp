console.error('NODE_ENV:', process.env.NODE_ENV)

merge = require('wpc/merge')
const Path = require('path')
const webpack = require('webpack')

module.exports = (env = {}, argv) => merge(
  {env, argv},
  require('wpc/env'),
  require('wpc/required'),
  require('wpc/argv'),
  require('wpc/dev-server'),

  ({context}) => ({
    env: {
      src: context + '/src'
    },
    stats: {children: false},
    entry: context + '/src/index.js',
    output: {
      path: context + '/dist'
    },
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true,
      noInfo: true
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  }),

  require('wpc/resolve-src'),
  require('wpc/global-modules'),
  require('wpc/global-loaders'),

  require('wpc/define-env'),
  require('wpc/define-version'),

  require('wpc/css'),
  require('wpc/html'),
  require('wpc/coffee'),
  require('wpc/yml'),
  require('wpc/images'),
  require('wpc/fonts'),

  require('wpc/babel'),
  require('wpc/babel-vue'),
  require('wpc/babel-stage3'),

  require('wpc/vue'),
  require('wpc/vue-babel'),

  require('wpc/vendor'),
  require('wpc/manifest'),
  require('wpc/friendly-errors'),
  require('wpc/custom'),
  require('wpc/dump-conf'),
  require('wpc/delete-properties')
)
