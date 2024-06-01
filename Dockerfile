FROM node:14-alpine

EXPOSE 80

CMD ["node", "dist/main.js"]
