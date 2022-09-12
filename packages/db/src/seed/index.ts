import dotenv from "dotenv";

import seed_0001 from "./data/0001-receipt_item_tags";

import { initDB } from "../client";

dotenv.config();

async function main() {
  try {
    console.log(`Start seeding ...`);

    const client = await initDB();

    if (await seed_0001.shouldApply()) {
      await Promise.all(
        seed_0001.data.map((o) =>
          client.query(
            `
              INSERT INTO receipt_item_tags (title)
              VALUES ($1)
              RETURNING id, title;
            `,
            [o.title]
          )
        )
      );

      console.log(
        `Seeding receipt item tags is a success. Seeded ${seed_0001.data.length} items.`
      );
    }

    process.exit(0);
  } catch (error) {
    console.error("Error while seeding database.", error);
    process.exit(1);
  }
}

main();
