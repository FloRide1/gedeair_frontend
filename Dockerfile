FROM node:lts-alpine as builder

WORKDIR /app
COPY . ./
RUN npm install && npm run build

EXPOSE 80

CMD npm run preview -- --host 0.0.0.0 --port 80
