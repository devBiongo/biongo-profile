FROM node:20.9.0

RUN apt-get update && apt-get install -y nginx

WORKDIR /app

# 复制项目文件
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY . .

# 复制 Nginx 配置文件
# COPY configs/*.conf /etc/nginx/
COPY configs/test.conf /etc/nginx/nginx.conf

# 安装 pnpm 并安装依赖
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 80

# 启动 Nginx 和 Node.js 应用
CMD sh -c "pnpm start & nginx -g 'daemon off;'"


