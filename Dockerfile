FROM node:12

WORKDIR /var/www/laboratory_api

COPY . .

RUN mkdir -p /var/www/laboratory_api
RUN mkdir -p /var/log/laboratory_api

ADD . /var/www/laboratory_api

RUN npm install

RUN npm run migrate

RUN npm run build

COPY ./src/swagger.json /var/www/laboratory_api/build/

EXPOSE 3003
