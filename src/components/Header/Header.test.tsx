import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "./Header";
import system from "../../theme";

describe("Header", () => {
  it("renderiza o link com o nome acessível 'Dio Bank - página inicial'", () => {
    render(
      <ChakraProvider value={system}>
        <Header />
      </ChakraProvider>,
    );

    const link = screen.getByRole("link", { name: "Dio Bank - página inicial" });

    expect(link).toBeInTheDocument();
  });
});
