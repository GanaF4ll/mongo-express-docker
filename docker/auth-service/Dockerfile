FROM node:lts-slim

WORKDIR /usr/src/auth-service

COPY src/auth-service/package*.json ./
RUN npm install

COPY src/auth-service .

EXPOSE 3300
CMD ["npm", "run", "dev"]
