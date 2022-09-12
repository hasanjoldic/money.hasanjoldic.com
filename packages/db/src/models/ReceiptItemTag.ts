import { Base } from "./Base";

export interface ReceiptItemTag extends Base, CreateReceiptItemTag {
  title: string;

  parentTagId?: string;
  parentTag?: ReceiptItemTag;
}

export interface CreateReceiptItemTag {
  title: string;

  parentTagId?: string;
}
