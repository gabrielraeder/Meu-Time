import Table from "./Table";
import PropTypes from 'prop-types';

export default function Statistics({ statistics }) {
  const headers = ['Partidas', 'Vitórias', 'Empates', 'Derrotas'];
  const { draws, loses, wins, played } = statistics;
  const data = [{ played: played.total, wins: wins.total, draws: draws.total, losses: loses.total }]
  return (
    <div>
      <Table array={ data } headers={ headers }/>
    </div>
  )
}

Statistics.propTypes = {
  statistics: PropTypes.shape({
    played: PropTypes.shape({
      total: PropTypes.number,
    }),
    wins: PropTypes.shape({
      total: PropTypes.number,
    }),
    draws: PropTypes.shape({
      total: PropTypes.number,
    }),
    loses: PropTypes.shape({
      total: PropTypes.number,
    }),
  }).isRequired,
};