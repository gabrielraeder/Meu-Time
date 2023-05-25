import PropTypes from "prop-types";

export default function Table({ array, headers }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {array.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, ind) => (
              <td key={`${ind} - ${value}`}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  array: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};
