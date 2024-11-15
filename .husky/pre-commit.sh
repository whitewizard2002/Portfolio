#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx prettier --check . || exit 1

echo "Checking if lint rules are followed"
npx eslint . || exit 1
echo "All files following the lint rules"
