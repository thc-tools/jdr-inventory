FROM node:14.15.0-alpine@sha256:5a940b79d5655cc688cfb319bd4d0f18565bc732ae19fab6106daaa72aeb7a63

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
