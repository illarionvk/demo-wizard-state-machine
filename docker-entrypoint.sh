#! /bin/bash

set -euxo pipefail

mkdir /mnt/tmp/node_modules || true
ln -Ffsv /mnt/tmp/node_modules $WORKDIR

yarn install

exec "$@"
