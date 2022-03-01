# pull official base image
FROM node:16-alpine3.12

# set working directory
WORKDIR /Portfolio


# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# add app
COPY ./ ./


RUN npm install 

RUN ["npm", "run", "build"]

EXPOSE 4001
# start app
CMD ["npm", "run", "dev-server"]

