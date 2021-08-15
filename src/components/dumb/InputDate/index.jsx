import PropTypes from 'prop-types';

/**
 * Date component dumb
 */
const InputDate = (props) => {
  return (
    <input id={props.id} type="date" />
  );
};

InputDate.propTypes = {
  id: PropTypes.string.isRequired,
}

export default InputDate;