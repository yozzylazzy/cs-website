FROM node:16

COPY package*.json /

RUN npm install
RUN npm install -g serve
RUN npm run build
RUN serve -s build

EXPOSE 3000