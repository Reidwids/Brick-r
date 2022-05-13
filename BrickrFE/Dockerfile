FROM node:alpine

WORKDIR /code

# install dependencies
COPY package.json . /code/
COPY package-lock.json . /code/
RUN npm install

COPY . /code/

EXPOSE 3000

RUN ["npm", "run", "build"]
CMD ["npm", "run", "docker-dev"]
