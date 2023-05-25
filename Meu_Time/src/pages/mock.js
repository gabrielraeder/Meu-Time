export const teamsMock = {
  get: "teams",
  parameters: {
    league: "39",
    season: "2021",
  },
  errors: [],
  results: 20,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      team: {
        id: 33,
        name: "Manchester United",
        code: "MUN",
        country: "England",
        founded: 1878,
        national: false,
        logo: "https://media.api-sports.io/football/teams/33.png",
      },
      venue: {
        id: 556,
        name: "Old Trafford",
        address: "Sir Matt Busby Way",
        city: "Manchester",
        capacity: 76212,
        surface: "grass",
        image: "https://media.api-sports.io/football/venues/556.png",
      },
    },
    {
      team: {
        id: 34,
        name: "Newcastle",
        code: "NEW",
        country: "England",
        founded: 1892,
        national: false,
        logo: "https://media.api-sports.io/football/teams/34.png",
      },
      venue: {
        id: 562,
        name: "St. James' Park",
        address: "St. James' Street",
        city: "Newcastle upon Tyne",
        capacity: 52389,
        surface: "grass",
        image: "https://media.api-sports.io/football/venues/562.png",
      },
    },
  ],
};

export const playersMock = {
  get: "players",
  parameters: {
    id: "276",
    season: "2019",
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      player: {
        id: 276,
        name: "Neymar",
        firstname: "Neymar",
        lastname: "da Silva Santos Júnior",
        age: 28,
        birth: {
          date: "1992-02-05",
          place: "Mogi das Cruzes",
          country: "Brazil",
        },
        nationality: "Brazil",
        height: "175 cm",
        weight: "68 kg",
        injured: false,
        photo: "https://media.api-sports.io/football/players/276.png",
      },
      statistics: [
        {
          team: {
            id: 85,
            name: "Paris Saint Germain",
            logo: "https://media.api-sports.io/football/teams/85.png",
          },
          league: {
            id: 61,
            name: "Ligue 1",
            country: "France",
            logo: "https://media.api-sports.io/football/leagues/61.png",
            flag: "https://media.api-sports.io/flags/fr.svg",
            season: 2019,
          },
          games: {
            appearences: 15,
            lineups: 15,
            minutes: 1322,
            number: null,
            position: "Attacker",
            rating: "8.053333",
            captain: false,
          },
          substitutes: {
            in: 0,
            out: 3,
            bench: 0,
          },
          shots: {
            total: 70,
            on: 36,
          },
          goals: {
            total: 13,
            conceded: null,
            assists: 6,
            saves: 0,
          },
          passes: {
            total: 704,
            key: 39,
            accuracy: 79,
          },
          tackles: {
            total: 13,
            blocks: 0,
            interceptions: 4,
          },
          duels: {
            total: null,
            won: null,
          },
          dribbles: {
            attempts: 143,
            success: 88,
            past: null,
          },
          fouls: {
            drawn: 62,
            committed: 14,
          },
          cards: {
            yellow: 3,
            yellowred: 1,
            red: 0,
          },
          penalty: {
            won: 1,
            commited: null,
            scored: 4,
            missed: 1,
            saved: null,
          },
        },
      ],
    },
  ],
};

export const informationMock = {
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
};
