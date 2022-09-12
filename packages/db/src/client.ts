import dotenv from "dotenv";
import path from "path";
import { Client } from "pg";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

const dbConfig = {
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
};

// when passing a client, it is assumed that the database already exists
let client: Client;

export async function initDB() {
  if (!client) {
    client = new Client(dbConfig);
    await client.connect();
  }

  return client;
}
