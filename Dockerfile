# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install sudo and nmap
RUN apt-get update && apt-get install -y sudo nmap

# Copy the rest of the application code to the container
COPY . .

# Create necessary directories
RUN mkdir /budgeticu-backend /sharma /logs /dhheraj

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js", "&"]
