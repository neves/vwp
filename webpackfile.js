const merge = require('wpc/merge')

module.exports = env => {
  var root = process.cwd()
  var config = merge(
    require('wpc/defaults'),
    ({context}) => ({
      env: {
        root: root,
        src: root + '/src'
      },
      entry: root + '/src/index.js',
      output: {
        path: root + '/dist',
        filename: '[name].js'
      },
      devServer: {
        host: '0.0.0.0',
        noInfo: true
      }
    }),
    require('wpc/resolve-src'),
    require('wpc/global-modules'),
    require('wpc/global-loaders'),
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

    require('wpc/html'),
    require('wpc/dump-conf'),
    require('wpc/delete-properties')
  )

  return config
}
