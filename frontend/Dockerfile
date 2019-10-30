### Stage 1: build ###
FROM node:12-alpine as builder

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY web/package.json web/yarn.lock /app/web/

# Install app dependencies.
RUN npm install --prefix web

# Copy app files.
COPY . /app

# Build app
RUN npm run build --prefix web -- --output-path=./dist/out

### Stage 2: delivery ###
FROM nginx:1.15.7-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /app/web/dist/out /usr/share/nginx/html

# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf