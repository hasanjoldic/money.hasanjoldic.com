import { Base } from "./Base";
import { ReceiptItem } from "./ReceiptItem";

export interface Receipt extends Base, CreateReceipt {
  receiptItemIds: string[];
  receiptItems: ReceiptItem[];
}

export interface CreateReceipt {
  scanUrl: string;

  receivedAt: string;

  receiptItemIds?: string[];
}
