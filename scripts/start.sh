#!/bin/sh

# 启动你的应用
pnpm start &

# 启动 Nginx
nginx -g "daemon off;"