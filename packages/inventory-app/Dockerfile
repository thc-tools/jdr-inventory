FROM node:14.15.4-alpine@sha256:2ae9624a39ce437e7f58931a5747fdc60224c6e40f8980db90728de58e22af7c

COPY entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh 
RUN chown root:root /entrypoint.sh

RUN mkdir -p /inventory/inventory-app 
RUN apk add git python make su-exec shadow g++

WORKDIR /inventory/inventory-app

EXPOSE 5000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "start"]
