import PropTypes from "prop-types";
import PlayersInfo from "./PlayersInfo";
import { useEffect, useState } from "react";
import getAPI from "../utils/getAPI";
import Lineups from "./Lineups";
import Statistics from "./Statistics";
import BarChart from "./Chart";

// import { informationMock, playersMock } from '../pages/mock';

export default function Information({ team, league, season, apiKey }) {
  const [showPlayers, setShowPlayers] = useState(false);
  const [showFormation, setShowFormation] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showGraphic, setShowGraphic] = useState(false);
  const [players, setPlayers] = useState([]);
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const getInformation = async () => {
      await getAPI(
        `/players?team=${team}&league=${league}&season=${season}`,
        (data) => setPlayers(data.response),
        apiKey
      );
      await getAPI(
        `/teams/statistics?team=${team}&league=${league}&season=${season}`,
        (data) => setStatistics(data.response),
        apiKey
      );
    };
    getInformation();
    // setPlayers(playersMock.response)
    // setStatistics(informationMock)
    setShowPlayers(false);
  }, [team]);

  return (
    <div>
      <button onClick={() => setShowPlayers((prev) => !prev)}>Jogadores</button>
      {showPlayers && <PlayersInfo players={players} />}
      <br />
      <button onClick={() => setShowFormation((prev) => !prev)}>
        Formação
      </button>
      {showFormation && <Lineups lineups={statistics.lineups} />}
      <br />
      <button onClick={() => setShowStatistics((prev) => !prev)}>
        Estatísticas
      </button>
      {showStatistics && <Statistics statistics={statistics.fixtures} />}
      <br />
      <button onClick={() => setShowGraphic((prev) => !prev)}>Gráfico</button>
      {showGraphic && (
        <BarChart
          goalsFor={statistics.goals.for.minute}
          goalsAgainst={statistics.goals.against.minute}
        />
      )}
    </div>
  );
}

Information.propTypes = {
  team: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};
