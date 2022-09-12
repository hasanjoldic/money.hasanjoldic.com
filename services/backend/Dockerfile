FROM node:16 as build

WORKDIR /app

COPY package.json package-lock.json* ./
COPY packages/db/package.json packages/db/package-lock.json* packages/db/
COPY services/backend/package.json services/backend/package-lock.json* services/backend/
RUN npm ci

COPY . .

RUN npm -w @money.hasanjoldic.com/backend run build

CMD ["npm", "-w", "@money.hasanjoldic.com/backend", "run", "start"]
