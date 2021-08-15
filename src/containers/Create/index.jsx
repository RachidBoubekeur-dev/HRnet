import { FormAddEmployee } from '../../components/smart/FormAddEmployee';
import './create.css';

/**
 * Create container
 */
export const Create = () => {
    return (
        <section className="Create">
            <div>
                <h1>Create Employee</h1>
                <FormAddEmployee />
            </div>
        </section>
    );
};
