import { initDB } from "../../client";

const shouldApply = async () => {
  const client = await initDB();

  const queryResult = await client.query(`
    SELECT *
    FROM receipt_item_tags
    WHERE parent_id IS NOT NULL;
  `);

  return queryResult.rowCount === 0;
};

export default {
  shouldApply,
};
