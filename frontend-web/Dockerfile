FROM node:20 AS builder
WORKDIR /app
COPY frontend-web/package*.json ./
RUN npm install
COPY frontend-web .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
