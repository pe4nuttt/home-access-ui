import { createSlice } from '@reduxjs/toolkit';

const accessSlice = createSlice({
    name: 'access',
    initialState: { isCallingModal: false, isConfirmAccessModal: false, isAccessSucessModal: false },
    reducers: {
        setIsCallingModal: (state, action) => {
            state.isCallingModal = action.payload;
        },
        setIsConfirmAccessModal: (state, action) => {
            state.isConfirmAccessModal = action.payload;
        },
        setIsAccessSucessModal: (state, action) => {
            state.isAccessSucessModal = action.payload;
        },
    },
});

export default accessSlice;
