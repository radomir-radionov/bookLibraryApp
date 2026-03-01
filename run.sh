#!/bin/bash
# Run server (background) and client (foreground). Ctrl+C stops both.
# Install first: yarn install in server/ and client/; copy server/.env.example to server/.env; run db:migrate and db:seed:up in server/
set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"
SERVER_PID=""

cleanup() {
  if [ -n "$SERVER_PID" ]; then
    kill "$SERVER_PID" 2>/dev/null || true
  fi
  exit 0
}

trap cleanup SIGINT SIGTERM

cd "$ROOT/server"
yarn start &
SERVER_PID=$!

sleep 3

cd "$ROOT/client"
yarn start

cleanup
