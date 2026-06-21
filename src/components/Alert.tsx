import type { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
}

export default function Alert({ children }: AlertProp) {
  return <div className="alert alert-primary">{children}</div>;
}
