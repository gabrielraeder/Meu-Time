import PropTypes from 'prop-types';

export default function Loading({ cancelRequest }) {
  return (
    <div>
      <div id="loading-screen">
        <div className="loader">Loading...</div>
      </div>
      <div className="cancel_div" onClick={cancelRequest}>
        <button className="cancel_btn" onClick={cancelRequest}>
          Cancel
        </button>
      </div>
    </div>
  );
}

Loading.propTypes = {
  cancelRequest: PropTypes.func.isRequired
};
