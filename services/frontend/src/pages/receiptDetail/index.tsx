import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DefaultService, Receipt } from "../../openapi";

import { ReceiptComponent } from "../../components/receipt";

export const ReceiptDetail: React.FC = () => {
  const [receipt, setReceipt] = useState<Receipt>();

  let { id } = useParams();

  useEffect(() => {
    if (!id) return;

    DefaultService.getReceiptById(id).then((receipt) => setReceipt(receipt));
  }, [id]);

  return <ReceiptComponent data={receipt} />;
};
