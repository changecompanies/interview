FROM node:alpine

RUN apk add bash

RUN npm -g config set user root
RUN npm install -g nodemon

# Create app directory
RUN mkdir -p /var/www/server/node_modules && chown -R node:node /var/www/server/
WORKDIR /var/www/server

# Install app dependencies

COPY yarn.lock ./
COPY package.json ./
COPY prisma ./prisma/

RUN yarn install
RUN yarn prisma generate

USER node

# Bundle app source
COPY --chown=node:node . .

EXPOSE 5221

CMD [-d "node_modules"] && yarn start || yarn install && yarn start
