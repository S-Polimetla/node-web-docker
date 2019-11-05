FROM node:10

WORKDIR /usr/share/app

COPY package.json package-lock.json /usr/share/app/
RUN npm install --production

COPY . /usr/share/app

EXPOSE 3000
CMD npm start

