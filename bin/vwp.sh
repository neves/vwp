#!/bin/sh
# add local and global node_modules to the path
# https://gist.github.com/branneman/8048520#4-the-environment

parent=$(node -e "console.log(require('path').resolve('$0', '../..'))")
NODE_PATH="$parent/node_modules" $parent/node_modules/.bin/wpc $@ --config "$parent/webpackfile.js"
