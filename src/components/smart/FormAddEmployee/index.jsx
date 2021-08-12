import './formAddEmployee.css';

/**
 * FormAddEmployee component smart
 */
export const FormAddEmployee = () => {
    return (
        <form className="FormAddEmployee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="date" />

            <fieldset>
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" />

                <label htmlFor="state">State</label>
                <select name="state" id="state">
                    <option>France</option>
                    <option>France</option>
                    <option>France</option>
                    <option>France</option>
                    <option>France</option>
                </select>

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
    );
};
