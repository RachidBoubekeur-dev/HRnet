import { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Input component smart
 */
const Input = (props) => {
    const input = useRef();
    const regex =
        /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/; // eslint-disable-line
    
    /**
     * Validity check of form fields
     */
    const VerifInput = () => {
        switch (props.control) {
            case 'text':
                if (
                    input.current.value.length >= 2 &&
                    input.current.value.length <= 30 &&
                    regex.test(input.current.value)
                ) {
                    input.current.style.border = '2px solid green';
                    props.setValid(true);
                    props.setValue(input.current.value);
                } else {
                    input.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            
            case 'date':
                if (input.current.value.length === 10) {
                    input.current.style.border = '2px solid green';
                    props.setValid(true);
                    const handleDate = input.current.value.split('-');
                    props.setValue(
                        `${handleDate[1]}/${handleDate[2]}/${handleDate[0]}`
                    );
                } else {
                    input.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            
            case 'street':
                if (
                    input.current.value.length >= 10 &&
                    input.current.value.length <= 100
                ) {
                    input.current.style.border = '2px solid green';
                    props.setValid(true);
                    props.setValue(input.current.value);
                } else {
                    input.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            
            case 'city':
                if (input.current.value.length >= 3 && input.current.value.length <= 50) {
                    input.current.style.border = '2px solid green';
                    props.setValid(true);
                    props.setValue(input.current.value);
                } else {
                    input.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            
            case 'zipCode':
                if (input.current.value >= 1) {
                    input.current.style.border = '2px solid green';
                    props.setValid(true);
                    props.setValue(input.current.value);
                } else {
                    input.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} ref={input} onChange={VerifInput} required />
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    control: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    setValid: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default Input;