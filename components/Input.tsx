import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  variant?: "primary";
  label?: string;
  caption?: string;
}

export default function Input({
  variant,
  id,
  label,
  caption,
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <p>{caption}</p>
    </div>
  );
}
