#!/bin/sh
# add local and global node_modules to the path
# https://gist.github.com/branneman/8048520#4-the-environment

parent=$(node -e "console.log(require('path').resolve(require('fs').realpathSync('$0'), '../..'))")
global=$(dirname $parent)
NODE_PATH="$global" $parent/node_modules/.bin/wpc $@ --config "$parent/webpackfile.js"
