FROM node:lts-alpine

WORKDIR /app

# Create app directory and set permissions
RUN chown -R node:node /app

COPY --chown=node:node package*.json .

# Install dependencies
RUN apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

  # Copy the rest of the code
COPY --chown=node:node . .

# Switch to non-root user
USER node

EXPOSE 80
CMD [ "npm", "start" ]