FROM node:20-alpine3.17

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["node_modules/.bin/nodemon", "src/index.mjs"]

