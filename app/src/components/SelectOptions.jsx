import PropTypes from 'prop-types';

export default function SelectOptions({ array, handleChange, fieldName, text }) {
  return (
    <label htmlFor={fieldName}>
      <strong>{text}</strong>
      <select
        className="custom_select"
        name={fieldName}
        id={`${fieldName}_id`}
        onChange={({ target: { value } }) => handleChange(value)}>
        <option value="" selected>
          -- Selecione --
        </option>
        {array.length &&
          array.map(({ name, valueToSave }) => (
            <option key={name} value={valueToSave}>
              {name}
            </option>
          ))}
      </select>
    </label>
  );
}

SelectOptions.propTypes = {
  array: PropTypes.array.isRequired,
  fieldName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
