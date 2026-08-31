import { afterEach, describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe("login", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("exibe a mensagem de boas-vindas", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => undefined);

    login();

    expect(alertMock).toHaveBeenCalledWith("Bem vinda!");
  });
});
