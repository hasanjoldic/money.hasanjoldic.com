FROM node:16 as build

WORKDIR /app

COPY package.json package-lock.json* lerna.json ./
COPY packages/openapi/ packages/
COPY services/backend/package.json services/backend/package-lock.json* services/backend/
RUN npm install lerna --global
RUN lerna bootstrap
RUN lerna link

COPY . .

RUN npm -w @money.hasanjoldic.com/backend run build

CMD ["npm", "-w", "@money.hasanjoldic.com/backend", "run", "start"]
