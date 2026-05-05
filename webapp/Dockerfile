# syntax=docker/dockerfile:1

FROM node:22-slim AS base

# Install pnpm
RUN npm install -g pnpm@10.33.1

WORKDIR /app

# Copy dependency files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build with internal Docker network URLs baked in
# ENV PUBLIC_CONVEX_URL=http://143.198.85:3210
# ENV PUBLIC_CONVEX_SITE_URL=http://143.198.85:3211
ENV PUBLIC_CONVEX_URL=https://valuable-horse-681.convex.cloud
ENV PUBLIC_CONVEX_SITE_URL=https://valuable-horse-681.convex.site

RUN pnpm build

# Expose SvelteKit Node adapter port
EXPOSE 3000

CMD ["node", "build"]
