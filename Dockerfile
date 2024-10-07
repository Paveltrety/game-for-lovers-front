# Используем официальный образ Node.js
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы и собираем проект
COPY . .
RUN npm run build

# Используем Nginx для сервировки статических файлов
FROM nginx:alpine

# Копируем собранные файлы в папку Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
