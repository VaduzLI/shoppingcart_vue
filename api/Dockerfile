FROM node:12.8

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install bcrypt

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]
