import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary";
  onClick: () => void;
}

export default function Button({
  children,
  color = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
