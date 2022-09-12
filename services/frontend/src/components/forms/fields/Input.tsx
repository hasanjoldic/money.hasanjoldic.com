import { InputHTMLAttributes } from "react";

interface Props {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({ label, inputProps }) => {
  return (
    <div style={{ display: "flex" }}>
      <label style={{ marginRight: 10 }}>{label}</label>
      <input {...inputProps} />
    </div>
  );
};
