# FROM node:14

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 3000

# CMD ["node", "dist/main"]


# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

RUN npm run build

# # Set environment variables (baked into the container)
# ENV SUPABASE_URL=https://rwncmxkblyditehcpxlj.supabase.co
# ENV SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3bmNteGtibHlkaXRlaGNweGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MDE2NzQsImV4cCI6MjA1NTM3NzY3NH0.A2Nc2E6DRGzi1ntKJaGnQTk2VnJvdHBuhrqqLnIiKZE
# ENV PORT=3000
# ENV SUPABASE_HOST=db
# ENV SUPABASE_PORT=5432
# ENV SUPABASE_USER=postgres
# ENV SUPABASE_PASSWORD=password
# ENV SUPABASE_DB=postgres
# ENV PORT=3000

# Expose the application port
EXPOSE 3000

# # Add wait-for-it script to wait for the database to be ready
# COPY wait-for-it.sh /wait-for-it.sh
# RUN chmod +x /wait-for-it.sh
# CMD ["./wait-for-it.sh", "database:5432", "--", "npm", "run", "start"]


# Start the application
CMD ["npm", "run", "start"]

