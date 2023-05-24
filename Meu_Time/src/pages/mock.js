export const teamsMock = {
  "get": "teams",
  "parameters": {
      "league": "39",
      "season": "2021"
  },
  "errors": [],
  "results": 20,
  "paging": {
      "current": 1,
      "total": 1
  },
  "response": [
      {
          "team": {
              "id": 33,
              "name": "Manchester United",
              "code": "MUN",
              "country": "England",
              "founded": 1878,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/33.png"
          },
          "venue": {
              "id": 556,
              "name": "Old Trafford",
              "address": "Sir Matt Busby Way",
              "city": "Manchester",
              "capacity": 76212,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/556.png"
          }
      },
      {
          "team": {
              "id": 34,
              "name": "Newcastle",
              "code": "NEW",
              "country": "England",
              "founded": 1892,
              "national": false,
              "logo": "https://media.api-sports.io/football/teams/34.png"
          },
          "venue": {
              "id": 562,
              "name": "St. James' Park",
              "address": "St. James' Street",
              "city": "Newcastle upon Tyne",
              "capacity": 52389,
              "surface": "grass",
              "image": "https://media.api-sports.io/football/venues/562.png"
          }
      }]}

export const playersMock = {
  "get": "players",
  "parameters": {
    "id": "276",
    "season": "2019"
  },
  "errors": [],
  "results": 1,
  "paging": {
    "current": 1,
    "total": 1
  },
  "response": [
    {
      "player": {
        "id": 276,
        "name": "Neymar",
        "firstname": "Neymar",
        "lastname": "da Silva Santos Júnior",
        "age": 28,
        "birth": {
          "date": "1992-02-05",
          "place": "Mogi das Cruzes",
          "country": "Brazil"
        },
        "nationality": "Brazil",
        "height": "175 cm",
        "weight": "68 kg",
        "injured": false,
        "photo": "https://media.api-sports.io/football/players/276.png"
      },
      "statistics": [
        {
          "team": {
            "id": 85,
            "name": "Paris Saint Germain",
            "logo": "https://media.api-sports.io/football/teams/85.png"
          },
          "league": {
            "id": 61,
            "name": "Ligue 1",
            "country": "France",
            "logo": "https://media.api-sports.io/football/leagues/61.png",
            "flag": "https://media.api-sports.io/flags/fr.svg",
            "season": 2019
          },
          "games": {
            "appearences": 15,
            "lineups": 15,
            "minutes": 1322,
            "number": null,
            "position": "Attacker",
            "rating": "8.053333",
            "captain": false
          },
          "substitutes": {
            "in": 0,
            "out": 3,
            "bench": 0
          },
          "shots": {
            "total": 70,
            "on": 36
          },
          "goals": {
            "total": 13,
            "conceded": null,
            "assists": 6,
            "saves": 0
          },
          "passes": {
            "total": 704,
            "key": 39,
            "accuracy": 79
          },
          "tackles": {
            "total": 13,
            "blocks": 0,
            "interceptions": 4
          },
          "duels": {
            "total": null,
            "won": null
          },
          "dribbles": {
            "attempts": 143,
            "success": 88,
            "past": null
          },
          "fouls": {
            "drawn": 62,
            "committed": 14
          },
          "cards": {
            "yellow": 3,
            "yellowred": 1,
            "red": 0
          },
          "penalty": {
            "won": 1,
            "commited": null,
            "scored": 4,
            "missed": 1,
            "saved": null
          }
        }
      ]
    }
  ]
}