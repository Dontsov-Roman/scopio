FROM node:14.1.0 as build

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]