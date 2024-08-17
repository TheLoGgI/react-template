FROM node:22-alpine AS build

WORKDIR /app

COPY *.json ./
COPY *.ts ./
COPY *.js ./
COPY index.html ./
COPY /src ./src
COPY /public ./public

RUN yarn install
RUN yarn build

FROM nginx:1.27.1

WORKDIR /etc/nginx

COPY nginx.conf ./nginx.conf
COPY --from=build /app/dist ./html

# USER 1000

EXPOSE 8080