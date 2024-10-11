# Use an official Node.js runtime as a parent image
FROM node:lts-slim

# Set the working directory
WORKDIR /usr/src/timer-service

# Copy package.json and package-lock.json (if available)
COPY src/timer-service/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src/timer-service .

# Expose the port the app runs on
EXPOSE 3200

# Define the command to run the app
CMD ["npm", "run", "dev"]
