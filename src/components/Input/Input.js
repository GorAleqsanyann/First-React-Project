import { useController } from "react-hook-form";
import "./input.css";

export default function Input({
  placeholder,
  type,
  className = "input",
  name,
  control,
  required = true,
}) {
  const { field } = useController({ name, control });
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={undefined}
      className={className}
      required={required}
      {...field}
    />
  );
}
