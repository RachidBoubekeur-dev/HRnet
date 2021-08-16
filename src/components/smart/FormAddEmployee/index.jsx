import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../slice/Employee';
import Input from '../../smart/Input';
import Dropdowns from '../../smart/Dropdowns';
import { Modal } from '../../dumb/Modal';
import './formAddEmployee.css';

/**
 * FormAddEmployee component smart - Form to create a new employee
 */
export const FormAddEmployee = () => {

    const [validFirstName, setValidFirstName] = useState(false);
    const [valueFirstName, setValueFirstName] = useState('');

    const [validLastName, setValidLastName] = useState(false);
    const [valueLastName, setValueLastName] = useState('');

    const [validDateBirth, setValidDateBirth] = useState(false);
    const [valueDateBirth, setValueDateBirth] = useState('');

    const [validStartDate, setValidStartDate] = useState(false);
    const [valueStartDate, setValueStartDate] = useState('');

    const [validStreet, setValidStreet] = useState(false);
    const [valueStreet, setValueStreet] = useState('');

    const [validCity, setValidCity] = useState(false);
    const [valueCity, setValueCity] = useState('');

    const [validState, setValidState] = useState(true);
    const [valueState, setValueState] = useState('');

    const [validZipCode, setValidZipCode] = useState(true);
    const [valueZipCode, setValueZipCode] = useState('');
    
    const [validDepartment, setValidDepartment] = useState(true);
    const [valueDepartment, setValueDepartment] = useState('');

    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    /**
     * Validity check of form
     */
    const HandleForm = (e) => {
        e.preventDefault();
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
                FirstName: valueFirstName,
                LastName: valueLastName,
                StartDate: valueStartDate,
                Department: valueDepartment,
                DateBirth: valueDateBirth,
                Street: valueStreet,
                City: valueCity,
                State: valueState,
                ZipCode: valueZipCode,
            };
            dispatch(add(dataForm));
            setModal(true);
        }
    };
    return (
        <div>
            <form className="FormAddEmployee" onSubmit={HandleForm}>
                <Input
                    type="text"
                    control="text"
                    label="First Name"
                    id="first-name"
                    setValid={setValidFirstName}
                    setValue={setValueFirstName}
                />

                <Input
                    type="text"
                    control="text"
                    label="Last Name"
                    id="last-name"
                    setValid={setValidLastName}
                    setValue={setValueLastName}
                />

                <Input
                    type="date"
                    control="date"
                    label="Date of Birth"
                    id="date-of-birth"
                    setValid={setValidDateBirth}
                    setValue={setValueDateBirth}
                />

                <Input
                    type="date"
                    control="date"
                    label="Start Date"
                    id="start-date"
                    setValid={setValidStartDate}
                    setValue={setValueStartDate}
                />

                <fieldset>
                    <legend>Address</legend>

                    <Input
                        type="text"
                        control="street"
                        label="Street"
                        id="street"
                        setValid={setValidStreet}
                        setValue={setValueStreet}
                    />

                    <Input
                        type="text"
                        control="city"
                        label="City"
                        id="city"
                        setValid={setValidCity}
                        setValue={setValueCity}
                    />

                    <Dropdowns
                        control="state"
                        id="state"
                        label="State"
                        setValid={setValidState}
                        setValue={setValueState}
                    />

                    <Input
                        type="number"
                        control="zipCode"
                        label="Zip Code"
                        id="zip-code"
                        setValid={setValidZipCode}
                        setValue={setValueZipCode}
                    />
                </fieldset>

                <Dropdowns
                    control="department"
                    id="department"
                    label="Department"
                    setValid={setValidDepartment}
                    setValue={setValueDepartment}
                />
                
                <input type="submit" className="btnSave" value="Save" />
            </form>
            {modal && <Modal setModal={setModal} />}
        </div>
    );
};
