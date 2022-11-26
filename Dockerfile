FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY ./ssl/  /etc/nginx/ssl
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"] 


# FROM node:14-alpine as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV production
# WORKDIR /app
# COPY ./ssl/  /etc/nginx/ssl
# COPY --from=builder /app/dist /app
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80 443
# CMD ["nginx", "-g", "daemon off;"] 



# FROM node:10-alpine as builder

# WORKDIR /vue-ui

# # Copy the package.json and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy rest of the files
# COPY . .

# # Build the project
# RUN npm run build


# FROM nginx:alpine as production-build
# COPY ./ssl/  /etc/nginx/ssl
# COPY nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=builder /vue-ui/dist /usr/share/nginx/html


# EXPOSE 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# 


# FROM node:14-alpine as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build

# # production stage
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV=production
# COPY --from=build-stage /app/dist /app
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY ./ssl/ /etc/nginx/ssl
# RUN envsubst /app < /etc/nginx/nginx.conf > /etc/nginx/conf.d/default.conf

# EXPOSE 80 443
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:14-alpine as builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # production stage
# FROM nginx:1.21.0-alpine as production
# COPY --from=build-stage /app/dist /app
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY ./ssl/  /etc/nginx/ssl
# RUN envsubst /app < /etc/nginx/nginx.conf > /etc/nginx/conf.d/default.conf

# EXPOSE 80 443
# CMD ["nginx", "-g", "daemon off;"]



# FROM node:lts-alpine

# # install simple http server for serving static content
# RUN npm install -g http-server

# # make the 'app' folder the current working directory
# WORKDIR /app

# # copy both 'package.json' and 'package-lock.json' (if available)
# COPY package*.json ./

# # install project dependencies
# RUN npm install

# # copy project files and folders to the current working directory (i.e. 'app' folder)
# COPY . .

# # build app for production with minification
# RUN npm run build

# EXPOSE 80
# CMD [ "http-server", "dist" ]