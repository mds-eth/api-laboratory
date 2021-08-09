FROM node:12

# Create app directory
WORKDIR /var/www/laboratory_api

COPY . .

# Install PM2
RUN npm install -g pm2  

RUN mkdir -p /var/www/laboratory_api
RUN mkdir -p /var/log/laboratory_api

ADD . /var/www/laboratory_api

RUN npm install

EXPOSE 3003

CMD pm2 start --no-daemon  ecosystem.config.js