FROM node:lts-alpine

ENV NODE_ENV=development

WORKDIR /app

# Create app directory and set permissions
RUN chown -R node:node /app

# Switch to non-root user
USER node

# Copy package files
COPY --chown=node:node package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY --chown=node:node . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]