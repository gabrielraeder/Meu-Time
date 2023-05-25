export const invalidKey = {
  errors: {
    token: "error",
  },
};

export const validKey = {
  get: "status",
  parameters: [],
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: {
    account: {
      firstname: "Gabriel",
      lastname: "RG",
      email: "gabrielraederg@gmail.com",
    },
    subscription: {
      plan: "Free",
      end: "2024-05-25T00:00:00+00:00",
      active: false,
    },
    requests: {
      current: 8,
      limit_day: 100,
    },
  },
};

export const apiKeyMock = "2b4a70b2698b3968fb5cd316a05b47d6";
