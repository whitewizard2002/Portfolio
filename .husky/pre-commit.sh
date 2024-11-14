#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Checking code style of all the files"
npx prettier --check . || exit 1
echo "Files have proper code styling"

echo "Checking if lint rules are followed"
npx eslint . || exit 1
echo "All files following the lint rules"
