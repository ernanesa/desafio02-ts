import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import system from "../theme";
import { Button } from "./Button";

describe("Button", () => {
  it("chama onClick quando clicado", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <ChakraProvider value={system}>
        <Button onClick={handleClick}>Entrar</Button>
      </ChakraProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("usa submit como tipo padrão", () => {
    render(
      <ChakraProvider value={system}>
        <Button>Entrar</Button>
      </ChakraProvider>,
    );

    expect(screen.getByRole("button", { name: "Entrar" })).toHaveAttribute("type", "submit");
  });
});
