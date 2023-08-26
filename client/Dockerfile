FROM node:20-alpine3.17

WORKDIR /client

COPY ["package.json", "yarn.lock","./"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
