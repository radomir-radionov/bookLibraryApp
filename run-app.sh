#!/bin/bash

cd client && yarn install && \
cd ../server && yarn install && \
cp .env.example .env && \
yarn run db:migrate && \
yarn run db:seed:up && \

echo "Project installed and ready to run. Start server: cd server && yarn start. Start client: cd client && yarn start."
