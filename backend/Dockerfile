# Etapa de build
FROM node:20 AS builder
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend .
RUN npm run build

# Etapa de produção
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3000
CMD ["node", "dist/main"]