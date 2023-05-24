import PropTypes from 'prop-types';
import PlayersInfo from './playersInfo';
import { useEffect, useState } from 'react';
import getAPI from '../utils/getAPI';

export default function Information({ team, league, season, apiKey }) {
  const [showPlayers, setShowPlayers] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      await getAPI(
        `/players?team=${team}&league=${league}&season=${season}`,
        (data) => setPlayers(data.response),
        apiKey,
      );
    };
    getPlayers();
  }, [])
  
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