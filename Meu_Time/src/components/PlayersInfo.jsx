import Table from "./Table";
import PropTypes from "prop-types";

export default function playersInfo({ players }) {
  const headers = ["Nome", "Idade", "Nacionalidade"];
  const playersInfo = players.map(({ player: { name, age, nationality } }) => ({
    name,
    age,
    nationality,
  }));
  return (
    <div>
      <Table array={playersInfo} headers={headers} />
    </div>
  );
}

playersInfo.propTypes = {
  players: PropTypes.array.isRequired,
};
