FROM node:14.15.0-alpine@sha256:5a940b79d5655cc688cfb319bd4d0f18565bc732ae19fab6106daaa72aeb7a63

COPY entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh 
RUN chown root:root /entrypoint.sh

RUN mkdir -p /inventory/inventory-app 
RUN apk add git python make su-exec shadow g++

WORKDIR /inventory/inventory-app

EXPOSE 5000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "start"]
