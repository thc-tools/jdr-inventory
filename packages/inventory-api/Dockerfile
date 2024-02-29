FROM node:14.21.3-alpine@sha256:434215b487a329c9e867202ff89e704d3a75e554822e07f3e0c0f9e606121b33

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
