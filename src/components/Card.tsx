import { Card as ChakraCard } from "@chakra-ui/react";
import type { ReactNode } from "react";

type cardProps = {
  children: ReactNode;
};

export function Card({ children }: cardProps) {
  return (
    <ChakraCard.Root width="100%" maxW="md">
      <ChakraCard.Body>{children}</ChakraCard.Body>
    </ChakraCard.Root>
  );
}
