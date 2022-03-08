# stage1 as builder
FROM node:16-alpine as builder

WORKDIR /Portfolio

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install 


COPY . ./

# Build the project and copy the files
RUN npm run build


FROM nginx:1.20-alpine

#!/bin/sh

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 
COPY --from=builder /Portfolio/dist/ /usr/share/nginx/

EXPOSE  80

ENTRYPOINT ["nginx","-g","daemon off;"]

