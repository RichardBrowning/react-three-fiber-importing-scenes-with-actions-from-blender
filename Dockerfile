# Specify a base image
FROM node:windows/amd64

#Install some dependencies

#WORKDIR /usr/app
#COPY ./ /usr/app
#RUN npm install --legacy-peer-deps
RUN yarn install

# Set up a default command
CMD [ "yarn","start" ]