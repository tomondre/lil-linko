FROM node:16
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src/assets ./assets
COPY prisma ./prisma
COPY src ./src
RUN ls -a
RUN npm install
RUN npm install -g typescript
RUN npm run build

FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY --from=0 /app/build ./src
COPY --from=0 /app/assets ./src/assets
COPY --from=0 /app/prisma ./prisma
RUN npx prisma generate
EXPOSE 8080
CMD ["node","/app/src/Server.js"]

#ENV NODE_ENV=production
#
#WORKDIR /app
#
#COPY ["package.json", "package-lock.json*", "./"]
#
#RUN npm install
#
#COPY . .
#
#EXPOSE 8080
#
#CMD [ "node", "./build/Server.js" ]