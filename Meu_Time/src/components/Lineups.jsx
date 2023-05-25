import Table from "./Table";
import PropTypes from "prop-types";

export default function Lineups({ lineups }) {
  const headers = ["Formação", "Partidas"];
  return (
    <div>
      <Table array={lineups} headers={headers} />
    </div>
  );
}

Lineups.propTypes = {
  lineups: PropTypes.array.isRequired,
};
