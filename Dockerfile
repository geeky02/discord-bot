# Use a Node.js base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Yarn
RUN npm install -g yarn

# Copy package.json and yarn.lock (if it exists)
COPY package.json ./

# Install production dependencies
RUN yarn install --production

# Copy the rest of the application code
COPY . .

RUN yarn build

# Define the command to run your application
CMD ["node", "dist/main.js"]
