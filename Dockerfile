FROM node:18-alpine

WORKDIR /fuzzy-broccoli-frontend/

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]


