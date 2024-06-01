# Use a Node.js base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock (if it exists)
COPY package.json ./

# Install production dependencies
RUN yarn install --production

# Copy the rest of the application code
COPY . .

# Build the application (reemplaza esto con tu comando de construcción real)
RUN yarn build

# Define the command to run your application
CMD ["node", "dist/main.js"]
