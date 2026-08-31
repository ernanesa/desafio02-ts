import { Card as ChakraCard } from "@chakra-ui/react";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <ChakraCard.Root width="100%" maxW="md">
      <ChakraCard.Body>{children}</ChakraCard.Body>
    </ChakraCard.Root>
  );
}
