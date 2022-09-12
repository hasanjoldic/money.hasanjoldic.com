FROM node:16 as build

WORKDIR /app

COPY package.json package-lock.json* lerna.json ./
COPY packages/db/package.json packages/db/package-lock.json* packages/db/
COPY services/backend/package.json services/backend/package-lock.json* services/backend/
RUN npm install lerna --global
RUN lerna bootstrap
RUN lerna run build --scope=@money.hasanjoldic.com/openapi
RUN lerna link

COPY . .

RUN npm -w @money.hasanjoldic.com/backend run build

CMD ["npm", "-w", "@money.hasanjoldic.com/backend", "run", "start"]
