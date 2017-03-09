const Path = require('path')

const action = process.argv[2]
var args = process.argv.slice(3)
var env, bin

switch (action) {
  case 'build':
    bin = 'webpack'
    env = 'production'
    break

  case 'dist':
  case 'stats':
    bin = 'webpack'
    env = 'production'
    args.push('-p')
    break

  case 'dev':
  case 'start':
    bin = 'webpack-dev-server'
    env = 'development'
    args.push('--hot')
    break

  case '--version':
  case '-v':
    console.log(require('../package.json').version)
    process.exit(1)
    return

  default:
    console.log('missing command: build, dev or dist')
    process.exit(1)
}

var cmd = []
if (!process.env.NODE_ENV) {
  cmd.push(`NODE_ENV=${env}`) // add NODE_ENV only if not already defined
}
cmd.push(require.resolve(`.bin/${bin}`))
cmd.push('--config')
cmd.push(Path.resolve(__dirname, '../webpackfile.js'))
cmd.push('--progress')

if (action === 'stats') {
  cmd.push('--profile', '--json')
} else if (bin === 'webpack') {
  cmd.push('--hide-modules') // webpack-dev-server does not have hide-modules
}

cmd.push(...args)

console.log(cmd.join(' '))
