import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employee: [],
};

const EmployeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        add: (state, action) => {
            state.employee.push({ ...action.payload });
        },
    },
});

export const employeeSelector = ({ employee }) => employee;

export const { add } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
