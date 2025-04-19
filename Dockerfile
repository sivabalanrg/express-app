FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies which are in package.json
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 to outside
EXPOSE 3000

# Command to run app
CMD ["node", "index.js"]
