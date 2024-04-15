FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN yarn install --quiet --no-optional --no-fund --loglevel=error

COPY .  .

RUN yarn run build

EXPOSE 3000

CMD ["yarn",  "run", "start:prod"]
