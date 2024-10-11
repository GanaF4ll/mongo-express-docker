FROM node:lts-slim

WORKDIR /usr/src/user-service

COPY src/user-service/package*.json ./
RUN npm install

COPY src/user-service .

EXPOSE 3000
CMD ["npm", "run", "dev"]
