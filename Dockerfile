#step 0 : Build
FROM node:16 AS build-step

WORKDIR /cs-website

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#step 1 : Buat container
FROM nginx:1.18-alpine
WORKDIR /src

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /cs-website/build /usr/share/nginx/html
