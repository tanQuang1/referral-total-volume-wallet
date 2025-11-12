# ===== Build stage =====
FROM node:22-alpine AS build
WORKDIR /trading-event

# không dùng package-lock
RUN npm config set package-lock false

# copy package và cài
COPY package.json ./
RUN npm install --no-audit --no-fund --include=dev

# bỏ tsc -b để tránh TS6133 khi build trong container
RUN npm pkg set scripts.build="vite build"

COPY . .

RUN npm run build

FROM nginx:alpine AS runner

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/trading-event.conf

# copy build đã tạo
COPY --from=build /trading-event/dist /usr/share/nginx/html/trading-event

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
