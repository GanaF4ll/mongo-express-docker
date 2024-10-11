FROM node:lts-slim

WORKDIR /usr/src/timer-service

COPY src/timer-service/package*.json ./

RUN npm install

COPY src/timer-service .

EXPOSE 3200

CMD ["npm", "run", "dev"]
