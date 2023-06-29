import { ChangeEvent } from "react";

interface InputProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

function Input({ value, onChange, type = "text" }: InputProps) {
  return <input value={value} onChange={onChange} type={type} />;
}

export default Input;
