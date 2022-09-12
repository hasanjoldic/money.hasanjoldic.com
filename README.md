# money.enki.ba

## How to run the project?

1. Run locally

   1. Open project in dev container using VS Code

   2. Execute `./scripts/init.sh`

      This will clean the project and install all the dependencies

   3. Execute `./scripts/packages:build:watch.sh`

      This will build the `packages/*` projects in watch mode

   4. In another shell, execute `./scripts/services:start:watch.sh`

      This will start the `services/*` projects in watch mode

   5. In `devcontainer.json` it should be defined which ports should be forwarded to the host. `3000` and `80` should be forwarded and should be accessible from the host.

2. Deploy

   1. Development

      ```terminal
      docker-compose -f docker/docker-compose.yml -f docker/docker-compose.dev.yml up --build
      ```

   2. Production

      ```terminal
      docker-compose -f docker/docker-compose.yml -f docker/docker-compose.prod.yml up --build
      ```
