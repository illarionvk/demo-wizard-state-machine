#! /bin/bash

set -euo pipefail

./bin/watchexec --exts js,jsx --watch ./ \
  -i '**/node_modules/**' -i '**/tmp/**' \
  'yarn -s run lint ; echo "DONE"'
