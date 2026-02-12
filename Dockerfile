FROM node:20 AS build

WORKDIR /app

# Downgrade npm to stable v9 (fixes Exit handler bug)
RUN npm install -g npm@9

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
