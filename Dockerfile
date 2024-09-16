FROM node:20.9.0

WORKDIR /app

COPY package*.json ./

COPY pnpm-lock.yaml ./

COPY . .

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm","start" ]