import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { employeeSelector } from '../../../slice/Employee';
import './listEmployee.css';

/**
 * ListEmployee component smart
 */
export const ListEmployee = () => {
    const state = useSelector(employeeSelector);
    const [show, setShow] = useState(10);
    const refShow = useRef();
    const [start, setStart] = useState(0);
    const employee = state.employee.slice(start, show);

    const InitShow = (value) => {
        setStart(0);
        setShow(value);
    };

    const NextTable = () => {
        if (state.employee.length > show) {
            setStart(start + parseInt(refShow.current.value));
            setShow(show + parseInt(refShow.current.value));
        }
    };

    const PreviousTable = () => {
        if (start !== 0) {
            setStart(start - parseInt(refShow.current.value));
            setShow(show - parseInt(refShow.current.value));
        }
    };
    return (
        <div className="listEmployee">
            <div className="showSearch">
                <div>
                    <label htmlFor="show">
                        Show
                        <select id="show" ref={refShow} onChange={(e) => InitShow(parseInt(e.target.value))}>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        entries
                    </label>
                </div>
                <div>
                    <label htmlFor="search">Search: </label>
                    <input type="search" id="search" />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr role="row">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {state.employee.length > 0 ? (
                        employee.map((employee, index) => (
                            <tr role="row" key={index}>
                                <td>{employee.FirstName}</td>
                                <td>{employee.LastName}</td>
                                <td>{employee.StartDate}</td>
                                <td>{employee.Department}</td>
                                <td>{employee.DateBirth}</td>
                                <td>{employee.Street}</td>
                                <td>{employee.City}</td>
                                <td>{employee.State}</td>
                                <td>{employee.ZipCode}</td>
                            </tr>
                        ))
                    ) : (
                        <tr role="row">
                            <td colSpan="9">No data available in table</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="showingPreviousOrNext">
                <div>
                    {state.employee.length > 0 ? (
                        <p>Showing {start + 1} to {show > state.employee.length ? state.employee.length : show} of {state.employee.length} entries</p>
                    ) : (
                        <p>Showing 0 to 0 of 0 entries</p>
                    )}
                </div>
                <div>
                    <p><span onClick={PreviousTable}>Previous</span><span onClick={NextTable}>Next</span></p>
                </div>
            </div>
        </div>
    );
};
