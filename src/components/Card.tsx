import {
  Card as ChakraCard,
  Heading,
  Text,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <ChakraCard.Root
      width="100%"
      maxW="md"
      overflow="hidden"
      bg="dio.card"
      borderWidth="1px"
      borderColor="dio.border"
      borderRadius="2xl"
      boxShadow="2xl"
    >
      <ChakraCard.Header
        px={{ base: "6", md: "8" }}
        pt={{ base: "6", md: "8" }}
        pb="0"
      >
        <Heading
          as="h2"
          size="lg"
          color="dio.text"
        >
          Acesse sua conta
        </Heading>

        <Text
          mt="2"
          color="dio.textMuted"
        >
          Entre para continuar no Dio Bank.
        </Text>
      </ChakraCard.Header>

      <ChakraCard.Body
        px={{ base: "6", md: "8" }}
        py={{ base: "6", md: "8" }}
      >
        {children}
      </ChakraCard.Body>
    </ChakraCard.Root>
  );
}