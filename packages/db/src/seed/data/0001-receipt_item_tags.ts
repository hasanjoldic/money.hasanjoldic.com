import { initDB } from "../../client";
import { CreateReceiptItemTag } from "../../models";

// const data: CreateReceiptItemTag[] = Array(100)
//   .fill(null)
//   .map((_, i) => ({
//     title: `receipt_item_tag-${i}`,
//   }));

const data: CreateReceiptItemTag[] = [
  "Food",
  "Housing",
  "Transportation",
  "Utilities",
  "Taxes",
  "Clothing",
  "Medical",
  "Personal",
  "Household items",
  "Investing",
  "Education",
  "Entertainment",
  "Travel",
  "Miscellaneous",
].map((title) => ({
  title,
}));

const shouldApply = async () => {
  const client = await initDB();

  const queryResult = await client.query(`
    SELECT *
    FROM receipt_item_tags;
  `);

  return queryResult.rowCount === 0;
};

export default {
  data,
  shouldApply,
};
