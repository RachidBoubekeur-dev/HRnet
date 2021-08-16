import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../slice/Employee';
import InputDate from '../../dumb/InputDate';
import Dropdowns from '../../dumb/Dropdowns';
import { Modal } from '../../dumb/Modal';
import './formAddEmployee.css';

/**
 * FormAddEmployee component smart
 */
export const FormAddEmployee = () => {
    const firstName = useRef();
    const lastName = useRef();
    const street = useRef();
    const city = useRef();
    const zipCode = useRef();
    const department = useRef();
    const regex =
        /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/; // eslint-disable-line
    const [validDateBirth, setValidDateBirth] = useState(false);
    const [valueDateBirth, setValueDateBirth] = useState('');
    const [validStartDate, setValidStartDate] = useState(false);
    const [valueStartDate, setValueStartDate] = useState('');
    const [validState, setValidState] = useState(true);
    const [valueState, setValueState] = useState('');
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    /**
     * Validity check of form fields
     */
    const VerifFirstName = () => {
        if (
            firstName.current.value.length >= 2 &&
            firstName.current.value.length <= 30 &&
            regex.test(firstName.current.value)
        ) {
            firstName.current.style.border = '2px solid green';
            return true;
        } else {
            firstName.current.style.border = '2px solid red';
            return false;
        }
    };
    const VerifLastName = () => {
        if (
            lastName.current.value.length >= 2 &&
            lastName.current.value.length <= 30 &&
            regex.test(lastName.current.value)
        ) {
            lastName.current.style.border = '2px solid green';
            return true;
        } else {
            lastName.current.style.border = '2px solid red';
            return false;
        }
    };
    const VerifStreet = () => {
        if (
            street.current.value.length >= 10 &&
            street.current.value.length <= 100
        ) {
            street.current.style.border = '2px solid green';
            return true;
        } else {
            street.current.style.border = '2px solid red';
            return false;
        }
    };
    const VerifCity = () => {
        if (city.current.value.length >= 3 && city.current.value.length <= 50) {
            city.current.style.border = '2px solid green';
            return true;
        } else {
            city.current.style.border = '2px solid red';
            return false;
        }
    };
    const VerifZipCode = () => {
        if (zipCode.current.value >= 1) {
            zipCode.current.style.border = '2px solid green';
            return true;
        } else {
            zipCode.current.style.border = '2px solid red';
            return false;
        }
    };
    const VerifDepartment = () => {
        const arrayDepartement = [
            'Sales',
            'Marketing',
            'Engineering',
            'Human Resources',
            'Legal',
        ];
        const valueExist = arrayDepartement.indexOf(department.current.value);
        if (valueExist !== -1) {
            department.current.style.border = '2px solid green';
            return true;
        } else {
            department.current.style.border = '2px solid red';
            return false;
        }
    };

    /**
     * Validity check of form
     */
    const HandleForm = (e) => {
        e.preventDefault();
        const validFirstName = VerifFirstName();
        const validLastName = VerifLastName();
        const validStreet = VerifStreet();
        const validCity = VerifCity();
        const validZipCode = VerifZipCode();
        const validDepartment = VerifDepartment();
        if (
            validFirstName &&
            validLastName &&
            validStreet &&
            validCity &&
            validZipCode &&
            validDepartment &&
            validDateBirth &&
            validStartDate &&
            validState
        ) {
            const dataForm = {
                FirstName: firstName.current.value,
                LastName: lastName.current.value,
                StartDate: valueStartDate,
                Department: department.current.value,
                DateBirth: valueDateBirth,
                Street: street.current.value,
                City: city.current.value,
                State: valueState,
                ZipCode: zipCode.current.value,
            };
            dispatch(add(dataForm));
            setModal(true);
        }
    };
    return (
        <div>
            <form className="FormAddEmployee" onSubmit={HandleForm}>
                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    ref={firstName}
                    onChange={VerifFirstName}
                    required
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    ref={lastName}
                    onChange={VerifLastName}
                    required
                />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <InputDate
                    id="date-of-birth"
                    setValidDate={setValidDateBirth}
                    setValueDate={setValueDateBirth}
                />

                <label htmlFor="start-date">Start Date</label>
                <InputDate
                    id="start-date"
                    setValidDate={setValidStartDate}
                    setValueDate={setValueStartDate}
                />

                <fieldset>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input
                        id="street"
                        type="text"
                        ref={street}
                        onChange={VerifStreet}
                        required
                    />

                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        type="text"
                        ref={city}
                        onChange={VerifCity}
                        required
                    />

                    <label htmlFor="state">State</label>
                    <Dropdowns
                        setValidState={setValidState}
                        setValueState={setValueState}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input
                        id="zip-code"
                        type="number"
                        ref={zipCode}
                        onChange={VerifZipCode}
                        required
                    />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select
                    name="department"
                    id="department"
                    ref={department}
                    onChange={VerifDepartment}
                    required
                >
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <input type="submit" className="btnSave" value="Save" />
            </form>
            {modal && <Modal setModal={setModal} />}
        </div>
    );
};
