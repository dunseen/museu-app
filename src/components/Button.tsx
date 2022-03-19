import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonHTMLAttributes<ButtonProps>) {
  return <button>{children}</button>;
}

export { Button };
