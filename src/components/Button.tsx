import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

export function Button({ children, onClick, type = "submit", disabled = false }: ButtonProps) {
  return (
    <ChakraButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ChakraButton>
  );
}
