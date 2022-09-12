import { Receipt } from "../../openapi";

interface Props {
  data?: Receipt;
}

export const ReceiptComponent: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <a href={data?.scanUrl}>{data?.scanUrl}</a>
      <div>{data?.receivedAt}</div>
      <div>{data?.total}</div>
    </div>
  );
};
