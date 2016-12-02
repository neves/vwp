const Path = require('path')

const action = process.argv[2]
var args = process.argv.slice(3)
var env = process.env.NODE_ENV
var webpack

switch (action) {
  case 'build':
    webpack = 'webpack'
    env = env || 'production'
    break

  case 'dist':
    webpack = 'webpack'
    env = env || 'production'
    args.push('-p')
    break

  case 'dev':
  case 'start':
    webpack = 'webpack-dev-server'
    env = env || 'development'
    args.push('--hot')
    break

  default:
    console.log('missing command: build, dev or dist')
    process.exit(1)
}

var cmd = []
cmd.push(require.resolve(`.bin/${webpack}`))
cmd.push('--config')
cmd.push(Path.resolve(__dirname, '../webpackfile.js'))
cmd.push('--progress')
cmd.push(...args)

console.log(cmd.join(' '))
