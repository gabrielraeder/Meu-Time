import PropTypes from 'prop-types';
import PlayersInfo from './PlayersInfo';
import { useState } from 'react';
import getAPI from '../utils/getAPI';
import Lineups from './Lineups';
import Statistics from './Statistics';
import BarChart from './Chart';

export default function Information({ team, league, season, apiKey }) {
  const [showPlayers, setShowPlayers] = useState(false);
  const [showFormation, setShowFormation] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showGraphic, setShowGraphic] = useState(false);
  const [players, setPlayers] = useState([]);
  const [statistics, setStatistics] = useState({});

  const getPlayers = async () => {
    await getAPI(
      `/players?team=${team}&league=${league}&season=${season}`,
      (data) => {
        setPlayers(data.response);
      },
      apiKey
    );
    setShowPlayers((prev) => !prev);
  };

  const getInformation = async (callback) => {
    await getAPI(
      `/teams/statistics?team=${team}&league=${league}&season=${season}`,
      (data) => {
        setStatistics(data.response);
      },
      apiKey
    );
    callback((prev) => !prev);
  };

  return (
    <div className="information_section">
      <button id="playersBtn" onClick={getPlayers}>
        Players
      </button>
      {showPlayers && <PlayersInfo players={players} />}
      <br />
      <button id="formationBtn" onClick={() => getInformation(setShowFormation)}>
        Formations
      </button>
      {showFormation && <Lineups lineups={statistics.lineups} />}
      <br />
      <button id="statsButton" onClick={() => getInformation(setShowStatistics)}>
        Statistics
      </button>
      {showStatistics && <Statistics statistics={statistics.fixtures} />}
      <br />
      <button id="graficBtn" onClick={() => getInformation(setShowGraphic)}>
        Goals Chart
      </button>
      {showGraphic && (
        <BarChart
          goalsFor={statistics?.goals?.for?.minute}
          goalsAgainst={statistics?.goals?.against?.minute}
        />
      )}
    </div>
  );
}

Information.propTypes = {
  team: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired
};