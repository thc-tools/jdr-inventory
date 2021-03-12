FROM node:14.16.0-alpine@sha256:a75f7cc536062f9266f602d49047bc249826581406f8bc5a6605c76f9ed18e98

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
