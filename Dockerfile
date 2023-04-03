FROM node:14-alpine as step01
WORKDIR /todo/src
COPY ./package.json /todo/src/package.json
RUN npm install
COPY . /todo/src
RUN npm run build

FROM nginx:1.13.6
WORKDIR /usr/share/nginx/html
COPY --from=step01 /todo/src/dist .