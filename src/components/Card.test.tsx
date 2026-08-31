import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import system from "../theme";
import { Card } from "./Card";

describe("Card", () => {
  it("renderiza o conteúdo recebido por children", () => {
    render(
      <ChakraProvider value={system}>
        <Card>
          <p>Conteúdo do cartão</p>
        </Card>
      </ChakraProvider>,
    );

    expect(screen.getByText("Conteúdo do cartão")).toBeInTheDocument();
  });
});
