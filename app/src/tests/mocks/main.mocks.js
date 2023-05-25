export const countriesMock = {
  response: [
    { name: "Brazil" },
    { name: "England" },
    { name: "Spain" },
    { name: "Italy" },
  ],
};

export const seasonsMock = {
  response: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
};

// export const leaguesMock = {
//   response: [
//     { league: { name: "Serie A", id: 1 } },
//     { league: { name: "Premier League", id: 2 } },
//     { league: { name: "Laliga", id: 3 } },
//   ],
// };

export const leaguesMock = {
  get: "leagues",
  parameters: {
    id: "39",
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      league: {
        id: 39,
        name: "Premier League",
        type: "League",
        logo: "https://media.api-sports.io/football/leagues/2.png",
      },
      country: {
        name: "England",
        code: "GB",
        flag: "https://media.api-sports.io/flags/gb.svg",
      },
      seasons: [
        {
          year: 2010,
          start: "2010-08-14",
          end: "2011-05-17",
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false,
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: true,
            predictions: true,
            odds: false,
          },
        },
        {
          year: 2011,
          start: "2011-08-13",
          end: "2012-05-13",
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false,
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: true,
            predictions: true,
            odds: false,
          },
        },
      ],
    },
  ],
};

export const teamsMock = {
  response: [
    { team: { name: "Manchester United", id: 1 } },
    { team: { name: "Liverpool", id: 2 } },
    { team: { name: "Arsenal", id: 3 } },
  ],
};

export const playersMock = {
  response: [
    {
      player: {
        id: 1,
        name: "Richarlison",
        age: 25,
        nationality: "Brazil",
      },
    },
    {
      player: {
        id: 2,
        name: "Messi",
        age: 35,
        nationality: "Argentina",
      },
    },
    {
      player: {
        id: 3,
        name: "Cristiano Ronaldo",
        age: 37,
        nationality: "Portugal",
      },
    },
  ],
};

export const informationMock = {
  response: {
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-3.api-sports.io/football/leagues/39.png",
      flag: "https://media-1.api-sports.io/flags/gb.svg",
      season: 2020,
    },
    team: {
      id: 40,
      name: "Liverpool",
      logo: "https://media-1.api-sports.io/football/teams/40.png",
    },
    form: "WWWLDWWDWDWDWWDDLDLWWLLLLWLLWWWDDWWWWW",
    fixtures: {
      played: {
        home: 19,
        away: 19,
        total: 38,
      },
      wins: {
        home: 10,
        away: 10,
        total: 20,
      },
      draws: {
        home: 3,
        away: 6,
        total: 9,
      },
      loses: {
        home: 6,
        away: 3,
        total: 9,
      },
    },
    goals: {
      for: {
        total: {
          home: 29,
          away: 39,
          total: 68,
        },
        average: {
          home: "1.5",
          away: "2.1",
          total: "1.8",
        },
        minute: {
          "0-15": {
            total: 6,
            percentage: "9.23%",
          },
          "16-30": {
            total: 4,
            percentage: "6.15%",
          },
          "31-45": {
            total: 14,
            percentage: "21.54%",
          },
          "46-60": {
            total: 15,
            percentage: "23.08%",
          },
          "61-75": {
            total: 11,
            percentage: "16.92%",
          },
          "76-90": {
            total: 13,
            percentage: "20.00%",
          },
          "91-105": {
            total: 2,
            percentage: "3.08%",
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
      },
      against: {
        total: {
          home: 20,
          away: 22,
          total: 42,
        },
        average: {
          home: "1.1",
          away: "1.2",
          total: "1.1",
        },
        minute: {
          "0-15": {
            total: 8,
            percentage: "17.78%",
          },
          "16-30": {
            total: 6,
            percentage: "13.33%",
          },
          "31-45": {
            total: 7,
            percentage: "15.56%",
          },
          "46-60": {
            total: 4,
            percentage: "8.89%",
          },
          "61-75": {
            total: 6,
            percentage: "13.33%",
          },
          "76-90": {
            total: 12,
            percentage: "26.67%",
          },
          "91-105": {
            total: 2,
            percentage: "4.44%",
          },
          "106-120": {
            total: null,
            percentage: null,
          },
        },
      },
    },
    biggest: {
      streak: {
        wins: 3,
        draws: 2,
        loses: 4,
      },
      wins: {
        home: "4-0",
        away: "0-7",
      },
      loses: {
        home: "1-4",
        away: "7-2",
      },
      goals: {
        for: {
          home: 4,
          away: 7,
        },
        against: {
          home: 4,
          away: 7,
        },
      },
    },
    clean_sheet: {
      home: 5,
      away: 7,
      total: 12,
    },
    failed_to_score: {
      home: 6,
      away: 2,
      total: 8,
    },
    penalty: {
      scored: {
        total: 6,
        percentage: "100.00%",
      },
      missed: {
        total: 0,
        percentage: "0%",
      },
      total: 6,
    },
    lineups: [
      {
        formation: "4-3-3",
        played: 34,
      },
      {
        formation: "4-2-3-1",
        played: 2,
      },
      {
        formation: "4-3-1-2",
        played: 1,
      },
      {
        formation: "4-4-2",
        played: 1,
      },
    ],
    cards: {
      yellow: {
        "0-15": {
          total: 6,
          percentage: "15.00%",
        },
        "16-30": {
          total: 2,
          percentage: "5.00%",
        },
        "31-45": {
          total: 9,
          percentage: "22.50%",
        },
        "46-60": {
          total: 4,
          percentage: "10.00%",
        },
        "61-75": {
          total: 10,
          percentage: "25.00%",
        },
        "76-90": {
          total: 9,
          percentage: "22.50%",
        },
        "91-105": {
          total: null,
          percentage: null,
        },
        "106-120": {
          total: null,
          percentage: null,
        },
      },
      red: {
        "0-15": {
          total: null,
          percentage: null,
        },
        "16-30": {
          total: null,
          percentage: null,
        },
        "31-45": {
          total: null,
          percentage: null,
        },
        "46-60": {
          total: null,
          percentage: null,
        },
        "61-75": {
          total: null,
          percentage: null,
        },
        "76-90": {
          total: null,
          percentage: null,
        },
        "91-105": {
          total: null,
          percentage: null,
        },
        "106-120": {
          total: null,
          percentage: null,
        },
      },
    },
  },
};
