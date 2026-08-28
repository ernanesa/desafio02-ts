import { Box, Heading, Link } from "@chakra-ui/react";

type HeaderProps = {
  brand?: string;
};

export function Header({ brand = "Dio Bank" }: HeaderProps) {
  return (
    <Box as="header" borderBottomWidth="1px" bg="white">
      <Box mx="auto" px={4} py={4} maxW="7xl">
        <Link href="/" aria-label={`${brand} - página inicial`}>
          <Heading as="h1" size="lg">
            {brand}
          </Heading>
        </Link>
      </Box>
    </Box>
  );
}
