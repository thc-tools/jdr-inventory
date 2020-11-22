FROM node:14.15.0-alpine@sha256:dc9641311155f990b713df6ab2751c9dc487bd64dd66fb3a25dce673fd4167cc

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
