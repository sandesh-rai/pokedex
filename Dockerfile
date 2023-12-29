# Pull official base image
FROM node:18-alpine

# Create and move into working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy rest of application code to working directory
COPY . .

# Start the application
CMD ["npm", "start"]