FROM node:alpine

WORKDIR /BrickrFE/app

# install dependencies
COPY package.json . /BrickrFE/app/
RUN npm install

COPY . /BrickrFE/app/

EXPOSE 3000

RUN ["npm", "run", "build"]
CMD ["npm", "run", "docker-dev"]
