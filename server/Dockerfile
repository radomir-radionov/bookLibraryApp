FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn add

COPY . .

CMD ["node_modules/.bin/nodemon", "index.mjs"]

