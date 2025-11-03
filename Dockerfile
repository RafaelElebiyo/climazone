FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Configurar para subdirectorio
ENV PUBLIC_URL=/climazone
RUN npm run build

FROM nginx:alpine

# Copiar a subdirectorio en nginx
COPY --from=build /app/build /usr/share/nginx/html/climazone

# Configuración nginx actualizada
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]