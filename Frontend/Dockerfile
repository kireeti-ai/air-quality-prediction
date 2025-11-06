# --- Stage 1: Build the React App ---

# Use an official Node.js image as the builder
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Run the build command (from your package.json)
# This creates a 'dist' folder with your static files
RUN npm run build

# --- Stage 2: Serve the App with Nginx ---

# Use a lightweight Nginx image
FROM nginx:1.25-alpine

# Copy the build output from the 'builder' stage
# The 'dist' folder is the standard output for Vite/React
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (default Nginx port)
EXPOSE 80

# The default Nginx command will start the server
CMD ["nginx", "-g", "daemon off;"]