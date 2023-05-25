/* eslint-disable no-undef */
import { screen, waitFor } from '@testing-library/react';
import renderPath from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';

import { invalidKey, validKey, apiKeyMock } from '../tests/mocks/login.mocks';
import { countriesMock } from './mocks/main.mocks';

describe('Testa a tela de Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    jest.spyOn(console, 'error');
    console.error.mockImplementation(() => null);
  });

  it('Verifica se possui um formulario de login', () => {
    renderPath('/');

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /submit/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Verifica o botão submit ativa somente quando possuir uma APIKEY digitada', () => {
    renderPath('/');

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /submit/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(input, apiKeyMock);

    expect(button).toBeEnabled();
  });

  it('Tenta fazer login com uma APIKEY inválida', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(invalidKey)
    });
    renderPath('/');

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /submit/i });

    userEvent.type(input, apiKeyMock);

    userEvent.click(button);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(screen.getByText(/api key inválida/i)).toBeInTheDocument();
  });

  it('Faz login com uma APIKEY válida e redireciona para a pagina /main', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(countriesMock).mockResolvedValueOnce(validKey)
    });
    const { history } = renderPath('/');

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /submit/i });

    userEvent.type(input, apiKeyMock);

    userEvent.click(button);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());

    const {
      location: { pathname }
    } = history;
    expect(pathname).toBe('/main');

    const apiKey = JSON.parse(localStorage.getItem('apiKey'));
    const apiReturn = JSON.parse(localStorage.getItem('apiReturn'));

    expect(apiKey).toEqual(apiKeyMock);
    expect(apiReturn).toEqual(validKey);
  });
});

// beforeEach(() => {
//   jest.clearAllMocks();
//   localStorage.clear();
// });
