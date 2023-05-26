import PropTypes from 'prop-types';
import PlayersInfo from './PlayersInfo';
import { useState } from 'react';
import getAPI from '../utils/getAPI';
import Lineups from './Lineups';
import Statistics from './Statistics';
import BarChart from './Chart';

export default function Information({ team, league, season, apiKey, loading, setLoading }) {
  const [showPlayers, setShowPlayers] = useState(false);
  const [showFormation, setShowFormation] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showGraphic, setShowGraphic] = useState(false);
  const [players, setPlayers] = useState([]);
  const [statistics, setStatistics] = useState({});
  // const [loading, setLoading] = useState(false);

  const getPlayers = async () => {
    if (!showPlayers) {
      setLoading(true);
      await getAPI(
        `/players?team=${team}&league=${league}&season=${season}`,
        ({ response }) => {
          setPlayers(response);
          if (response.length > 0) {
            setShowPlayers((prev) => !prev);
            setLoading(false);
          }
        },
        apiKey
      );
    }
    if (loading) setLoading(false);
  };

  const getInformation = async (callback, show) => {
    if (!show) {
      setLoading(true);
      await getAPI(
        `/teams/statistics?team=${team}&league=${league}&season=${season}`,
        ({ response }) => {
          if (response.lineups) {
            callback((prev) => !prev);
            setLoading(false);
          }
          setStatistics(response);
        },
        apiKey
      );
    }
    if (loading) setLoading(false);
  };

  return (
    <div className="information_section">
      <button id="playersBtn" onClick={getPlayers}>
        Players
      </button>
      {showPlayers && <PlayersInfo players={players} />}
      <br />
      <button id="formationBtn" onClick={() => getInformation(setShowFormation, showFormation)}>
        Formations
      </button>
      {showFormation && <Lineups lineups={statistics?.lineups} />}
      <br />
      <button id="statsButton" onClick={() => getInformation(setShowStatistics, showStatistics)}>
        Statistics
      </button>
      {showStatistics && <Statistics statistics={statistics?.fixtures} />}
      <br />
      <button id="graficBtn" onClick={() => getInformation(setShowGraphic, showGraphic)}>
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
  apiKey: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired
};
