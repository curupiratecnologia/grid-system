FROM node:14 AS build
LABEL stage=intermediate

RUN apt update && apt install nano tree

ADD . /app

WORKDIR /app

RUN echo "INSTALL..........."
RUN npm install



RUN echo "BUILDING..........."
RUN echo "Constrói a aplicação"

RUN npm run build

RUN echo "lista artefatos"

RUN tree /app/dist


FROM nginx:stable

RUN apt update && apt install nano tree

COPY --from=build /app/dist/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN tree /var/www

COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["./entrypoint.sh"]
