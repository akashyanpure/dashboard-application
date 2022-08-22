FROM node:16-alpine AS ui-build
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:16-alpine AS server-build
COPY --from=ui-build ./client/build ./client/build
COPY server/ ./server/
RUN cd server && npm install
# COPY server/app.js ./server/

EXPOSE 80

CMD ["node", "./server/app.js"]
# CMD ["npm", "run", "start"]