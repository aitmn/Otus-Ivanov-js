
FROM node:alpine

WORKDIR /projects/otus-ivanov-js
COPY . .
RUN npm i

CMD ["npm", "test"]