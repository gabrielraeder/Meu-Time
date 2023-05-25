import PropTypes from 'prop-types';
import PlayersInfo from './PlayersInfo';
import { useEffect, useState } from 'react';
import getAPI from '../utils/getAPI';

export default function Information({ team, league, season, apiKey }) {
  const [showPlayers, setShowPlayers] = useState(false);
  const [players, setPlayers] = useState([]);
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const getInformation = async () => {
      await getAPI(
        `/players?team=${team}&league=${league}&season=${season}`,
        (data) => setPlayers(data.response),
        apiKey,
      );
      await getAPI(
        `/teams/statistics?team=${team}&league=${league}&season=${season}`,
        (data) => setStatistics(data.response),
        apiKey,
      )
    };
    getInformation();
    setShowPlayers(false)
  }, [team])

  useEffect(() => {
    console.log(statistics);
  }, [statistics])
  
  
  return (
    <div>
      <button onClick={() => setShowPlayers((prev) => !prev)}>Jogadores</button>
      {showPlayers && <PlayersInfo players={ players.map(({ player: { name, age, nationality } }) => ({ name, age, nationality })) } />}
    </div>
  )
}

Information.propTypes = {
  team: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};