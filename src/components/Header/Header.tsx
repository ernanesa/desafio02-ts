import { Box, Heading, Link } from "@chakra-ui/react";

type HeaderProps = {
  brand?: string;
};

export function Header({ brand = "Dio Bank" }: HeaderProps) {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="dio.card"
      borderBottomWidth="1px"
      borderBottomColor="dio.border"
      boxShadow="sm"
    >
      <Box maxW="7xl" mx="auto" px={{ base: "4", md: "8" }} py="4">
        <Link
          href="/"
          aria-label={`${brand} - página inicial`}
          color="dio.text"
          _hover={{
            color: "dio.lavender",
            textDecoration: "none",
          }}
        >
          <Heading as="h1" size="lg" letterSpacing="tight">
            {brand}
          </Heading>
        </Link>
      </Box>
    </Box>
  );
}
