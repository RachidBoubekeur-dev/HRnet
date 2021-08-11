import { FormAddEmployee } from '../../components/smart/FormAddEmployee';
import './create.css';

export const Create = () => {
    return (
        <section className="Create">
            <h1>Create Employee</h1>
            <div>
                <FormAddEmployee />
            </div>
        </section>
    );
};
