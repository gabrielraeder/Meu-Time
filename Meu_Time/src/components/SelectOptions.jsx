import PropTypes from 'prop-types';

export default function SelectOptions({ array, handleChange, fieldName, text }) {
  return (
    <div>
      <br />
      <label htmlFor={ fieldName }>
          { text }
          <select
            name={ fieldName }
            id={ `${fieldName}_id` }
            onChange={ ({ target: { value } }) => handleChange(value) }
          >
            {
              array.length && array.map(({ name, valueToSave }) => (
                <option key={ name } value={ valueToSave }>{ name }</option>
              ))
            }
          </select>
        </label>
        <br />   
    </div>
  )
}

SelectOptions.propTypes = {
  array: PropTypes.array.isRequired,
  fieldName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

