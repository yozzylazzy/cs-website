FROM node:16

WORKDIR /app

COPY package*.json /

RUN npm install
RUN npm install -g serve

COPY . /app

RUN npm run build
RUN serve -s build

EXPOSE 3000