#!/bin/sh
# add local and global node_modules to the path
# https://gist.github.com/branneman/8048520#4-the-environment

dir=$(realpath $(dirname "$0"))

NODE_PATH=$(realpath "$dir/../node_modules") webpack --config "$dir/../webpackfile.js" --progress $@
