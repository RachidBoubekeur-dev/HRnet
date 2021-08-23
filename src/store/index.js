import { configureStore } from '@reduxjs/toolkit';
import EmployeeSlice from '../slice/Employee';

export const store = configureStore({
    reducer: {
        employee: EmployeeSlice,
    },
});
