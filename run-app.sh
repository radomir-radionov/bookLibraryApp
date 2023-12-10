#!/bin/bash

cd client yarn install && \
cd ../server yarn install && \
cp .env.example .env && \  
yarn run db:migrate && \
yarn run db:seed:up && \
yarn run docker:rss && \

echo "Project installed and ready to run"