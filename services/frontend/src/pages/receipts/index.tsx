import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { DefaultService, Receipt } from "../../openapi";

import { ReceiptComponent } from "../../components/receipt";
import { Input } from "../../components";

type Inputs = {
  total: string;
  file: FileList;
};

export const Receipts: React.FC = () => {
  const [receipts, setReceipts] = useState<Receipt[]>();

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.file[0]);
    DefaultService.postReceipts({
      scanFile: data.file[0],
      total: Number.parseFloat(data.total),
    });
  };

  useEffect(() => {
    DefaultService.getReceipts().then((receipts) => setReceipts(receipts.data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", rowGap: 20, marginBottom: 100 }}
      >
        <Input
          label="Total"
          inputProps={{
            ...register("total", { required: true }),
            type: "number",
            step: "0.01",
          }}
        />
        <Input
          label="Scan of receipt"
          inputProps={{
            ...register("file", { required: true }),
            type: "file",
          }}
        />

        <input type="submit" value="Save receipt" />
      </form>
      {receipts?.map((receipt) => (
        <div>
          <hr />
          <ReceiptComponent data={receipt} />
        </div>
      ))}
    </div>
  );
};
