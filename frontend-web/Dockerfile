# Etapa de build
FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de produção
FROM node:alpine AS production

WORKDIR /app

# Copiando apenas o necessário
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copiando variáveis de ambiente (opcional, se for usar .env)
COPY .env.prod .env

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "run", "start" ]
