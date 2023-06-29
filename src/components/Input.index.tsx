interface InputProps {
  value: string | number;
  handleOnChange: (event: any) => void;
  type: string;
}

function Input({ value, handleOnChange, type = "text" }: InputProps) {
  return <input value={value} onChange={handleOnChange} type={type} />;
}

export default Input;
