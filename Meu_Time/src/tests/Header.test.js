/* eslint-disable no-undef */
import { screen, waitFor } from "@testing-library/react";
import renderPath from "./utils/renderWithRouter";
import userEvent from "@testing-library/user-event";

import LocalStorage from "../utils/localStorage";
import { apiKeyMock, validKey } from "./mocks/login.mocks";
import { countriesMock } from "./mocks/main.mocks";

describe("Testa o Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    LocalStorage.setLocalStorage("apiKey", apiKeyMock);
    LocalStorage.setLocalStorage("apiReturn", validKey);
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(countriesMock),
    });
  });

  it("Verifica renderização", async () => {
    const { history } = renderPath("/");

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/main");
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(screen.getByText("Football Teams")).toBeInTheDocument();
    expect(screen.getByText("Gabriel RG")).toBeInTheDocument();
  });

  it("Verifica logout retorna para pagina de login e limpa localstorage", async () => {
    const { history } = renderPath("/");

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    const logout = screen.getByText("Logout");
    expect(logout).toBeInTheDocument();
    userEvent.click(logout);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/");

    expect(localStorage.getItem("apiKey")).toBeNull();
    expect(localStorage.getItem("apiReturn")).toBeNull();
  });
});
