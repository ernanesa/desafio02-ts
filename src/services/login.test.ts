import { afterEach, describe, expect, it, vi } from "vitest";
import { login } from "./login";

describe("login", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("exibe uma saudação personalizada", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => undefined);

    login("João");

    expect(alertMock).toHaveBeenCalledWith("Bem vindo(a) João!");
  });
});
