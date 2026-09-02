import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import system from "../theme";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  it("renderiza os campos de e-mail e senha", () => {
    render(
      <ChakraProvider value={system}>
        <LoginForm />
      </ChakraProvider>,
    );

    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha")).toBeInTheDocument();
  });

  it("envia os dados preenchidos", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(
      <ChakraProvider value={system}>
        <LoginForm onSubmit={handleSubmit} />
      </ChakraProvider>,
    );

    await user.type(screen.getByLabelText("Nome"), "Maria");
    await user.type(screen.getByLabelText("E-mail"), "usuario@email.com");
    await user.type(screen.getByLabelText("Senha"), "123456");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Maria",
      email: "usuario@email.com",
      password: "123456",
    });
  });
});
