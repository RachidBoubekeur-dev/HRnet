import Employee from './index';
import { add } from './index';

describe('Given I add an employee', () => {
    const initialState = {
        employee: [],
    };

    const employee = {
        FirstName: 'Rachid',
        LastName: 'Boubekeur',
        StartDate: '01/03/2021',
        Department: 'Human Resources',
        DateBirth: '03/22/2000',
        Street: '10 rue de Charcot',
        City: 'Citron-Normal',
        State: 'CT',
        ZipCode: '13994',
    };

    it('Then the add action is sent', () => {
        expect(add(employee)).toEqual({
                type: 'employee/add',
                payload: employee
        })
    });

    it('Then the state contains the employer data sent by the add action', () => {
        expect(Employee(initialState, add(employee))).toEqual({
            employee: [ employee ],
        });
    });
})