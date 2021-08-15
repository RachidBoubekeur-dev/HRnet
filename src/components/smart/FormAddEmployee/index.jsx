import { useState } from 'react';
import InputDate from '../../dumb/InputDate';
import { Dropdowns } from '../../dumb/Dropdowns';
import { Modal } from '../../dumb/Modal';
import './formAddEmployee.css';

/**
 * FormAddEmployee component smart
 */
export const FormAddEmployee = () => {
    const [modal, setModal] = useState(false);
    const HandleForm = (e) => {
        e.preventDefault();
        setModal(true);
    };
    return (
        <div>
            <form className="FormAddEmployee" onSubmit={HandleForm}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <InputDate id="date-of-birth" />

                <label htmlFor="start-date">Start Date</label>
                <InputDate id="start-date" />

                <fieldset>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <Dropdowns />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
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
