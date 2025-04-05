#!/bin/sh

rootdir=`git rev-parse --show-toplevel`
if [ $? -ne 0 ]; then
  echo "cannot get rootdir"
  exit 1
fi
cd "$rootdir"

if ! docker compose --help >/dev/null 2>&1; then
  echo "docker compose not found"
  exit 2
fi

docker compose up -d node
docker compose exec node npm run dev -- --host
docker compose down
