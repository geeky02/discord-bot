FROM node:14-alpine

WORKDIR /usr/src/app

COPY ./dist /usr/src/app

CMD ["node", "main.js"]
