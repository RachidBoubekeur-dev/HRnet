import './listEmployee.css';

/**
 * ListEmployee component smart
 */
export const ListEmployee = () => {
    return (
        <div className="listEmployee">
            <div className="showSearch">
                <div>
                    <label htmlFor="show">
                        Show
                        <select id="show">
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
                    <tr>
                        <th>First Name <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>Last Name <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>Start Date <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>Department <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>Date of Birth <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>Street <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>City <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>State <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                        <th>Zip Code <p><i className="fas fa-caret-up"></i><i className="fas fa-caret-down"></i></p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="9">No data available in table</th>
                    </tr>
                </tbody>
            </table>
            <div className="showingPreviousOrNext">
                <div>
                    <p>Showing 0 to 0 of 0 entries</p>
                </div>
                <div>
                    <p><span>Previous</span><span>Next</span></p>
                </div>
            </div>
        </div>
    );
};
