import { ListEmployee } from '../../components/smart/ListEmployee';
import './list.css';

/**
 * List container
 */
export const List = () => {
    return (
        <section className="List">
            <div>
                <h1>List Employee</h1>
                <ListEmployee />
            </div>
        </section>
    );
};
