#step 0 : Build
FROM node:16 as build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#step 1 : Buat container
FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
