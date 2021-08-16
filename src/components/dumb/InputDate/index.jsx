import { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Date component dumb
 */
const InputDate = (props) => {
    const date = useRef();

    /**
     * Validity check of form fields date
     */
    const VerifDate = () => {
        if (date.current.value.length === 10) {
            date.current.style.border = '2px solid green';
            props.setValidDate(true);
            const handleDate = date.current.value.split('-');
            props.setValueDate(
                `${handleDate[1]}/${handleDate[2]}/${handleDate[0]}`
            );
        } else {
            date.current.style.border = '2px solid red';
            props.setValidDate(false);
            props.setValueDate('');
        }
    };
    return <input id={props.id} type="date" ref={date} onChange={VerifDate} />;
};

InputDate.propTypes = {
    id: PropTypes.string.isRequired,
    setValidDate: PropTypes.func.isRequired,
    setValueDate: PropTypes.func.isRequired,
};

export default InputDate;
