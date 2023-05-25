/* eslint-disable no-undef */
import { screen, waitFor } from "@testing-library/react";
import renderPath from "./utils/renderWithRouter";
import userEvent from "@testing-library/user-event";

import LocalStorage from "../utils/localStorage";
import { apiKeyMock, validKey } from "./mocks/login.mocks";
import {
  countriesMock,
  leaguesMock,
  teamsMock,
  playersMock,
  informationMock,
} from "./mocks/main.mocks";

describe("Testa a tela de Main", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    LocalStorage.setLocalStorage("apiKey", apiKeyMock);
    LocalStorage.setLocalStorage("apiReturn", validKey);
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue(informationMock)
        .mockResolvedValueOnce(countriesMock)
        .mockResolvedValueOnce(leaguesMock)
        .mockResolvedValueOnce(countriesMock)
        .mockResolvedValueOnce(teamsMock)
        .mockResolvedValueOnce(playersMock),
    });
    jest.spyOn(console, "error");
    console.error.mockImplementation(() => null);
  });

  it("Verifica se com informações no localStorage, renderiza diretamente na pagina /main", async () => {
    const { history } = renderPath("/");

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/main");
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes.length).toBe(4);
  });

  it("Selecionar itens nos combobox ativa outros fetchs", async () => {
    const { history } = renderPath("/");

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/main");
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    const comboboxes = screen.getAllByRole("combobox");
    expect(comboboxes.length).toBe(4);

    userEvent.selectOptions(comboboxes[0], "Italy");
    expect(comboboxes[0]).toHaveValue("Italy");

    userEvent.selectOptions(comboboxes[0], "England");
    expect(comboboxes[0]).toHaveValue("England");

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(3));
    userEvent.selectOptions(comboboxes[1], "2011");
    expect(comboboxes[1]).toHaveValue("2011");

    userEvent.selectOptions(comboboxes[2], "Premier League");
    expect(comboboxes[2]).toHaveTextContent("Premier League");
    expect(comboboxes[2]).toHaveValue("39");

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(4));

    userEvent.selectOptions(comboboxes[3], "Manchester United");
    expect(comboboxes[3]).toHaveTextContent("Manchester United");
    expect(comboboxes[3]).toHaveValue("1");

    userEvent.selectOptions(comboboxes[3], "Arsenal");
    expect(comboboxes[3]).toHaveTextContent("Arsenal");

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(4));

    const playersBtn = screen.getByText("Jogadores");
    expect(playersBtn).toBeInTheDocument();

    userEvent.click(playersBtn);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(5));

    const playersRows = screen.getAllByRole("row");
    expect(playersRows).toHaveLength(4);

    userEvent.click(playersBtn);
    expect(playersRows[0]).not.toBeInTheDocument();

    const formationBtn = screen.getByText("Formação");
    expect(formationBtn).toBeInTheDocument();
  });
});
