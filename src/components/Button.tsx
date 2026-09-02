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
    <ChakraButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      width="100%"
      size="lg"
      color="dio.text"
      bg="dio.cta"
      borderRadius="md"
      fontWeight="700"
      transition="all 0.2s ease"
      _hover={{
        bg: "dio.ctaHover",
        transform: "translateY(-1px)",
      }}
      _active={{
        transform: "translateY(0)",
      }}
      _focusVisible={{
        outline: "3px solid",
        outlineColor: "dio.lavender",
        outlineOffset: "2px",
      }}
    >
      {children}
    </ChakraButton>
  );
}
