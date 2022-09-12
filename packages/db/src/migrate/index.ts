import path from "path";
import { migrate as pgMigrate } from "postgres-migrations";

import { initDB } from "../client";

async function migrate() {
  const client = await initDB();
  try {
    await pgMigrate({ client }, path.resolve(__dirname, "./migrations"));
  } catch (error) {
    console.log("DB migration error", error);
  } finally {
    await client.end();
  }
}

migrate();
