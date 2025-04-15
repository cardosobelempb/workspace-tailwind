# Stage 1 - build
FROM node:18 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2 - serve
FROM node:18

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "run", "start"]
