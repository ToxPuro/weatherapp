FROM node:14-alpine AS builder

WORKDIR /usr/src/app

COPY . .

RUN npm install

# prevents security issues where bug in docker let's the application to escape the container
RUN adduser -D appuser
USER appuser

EXPOSE 9000


## Hot reload
CMD npm run dev