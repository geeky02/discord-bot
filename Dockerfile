FROM node:14-alpine

COPY .env ./dist/.env

CMD ["node", "./dist/main.js"]
