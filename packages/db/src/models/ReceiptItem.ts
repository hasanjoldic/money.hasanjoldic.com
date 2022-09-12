import { Base } from "./Base";
import { ReceiptItemTag } from "./ReceiptItemTag";

export interface ReceiptItem extends Base {
  total: number;

  tagIds: string[];
  tags: ReceiptItemTag[];
}
