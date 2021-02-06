FROM node:14.15.4-alpine@sha256:2ae9624a39ce437e7f58931a5747fdc60224c6e40f8980db90728de58e22af7c

COPY entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh 
RUN chown root:root /entrypoint.sh

RUN mkdir -p /inventory/inventory-api 
RUN apk add git python make su-exec shadow g++

ENV PORT=9000

WORKDIR /inventory/inventory-api

EXPOSE 9000
EXPOSE 9042

ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "watch"]
