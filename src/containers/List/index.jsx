import { useSelector } from 'react-redux';
import { employeeSelector } from '../../slice/Employee';
import Table from 'hrnet-table';
import './list.css';

/**
 * List container
 */
export const List = () => {
    const state = useSelector(employeeSelector);
    return (
        <section className="List">
            <div>
                <h1>List Employee</h1>
                <Table state={state} />
            </div>
        </section>
    );
};
