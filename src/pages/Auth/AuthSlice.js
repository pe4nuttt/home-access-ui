import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { currentUser: '', token: '' },
    reducers: {
        authSignOut: (state, action) => {
            state.currentUser = '';
            state.token = '';
        },
        authSignIn: (state, action) => {
            state.currentUser = action.payload.username;
            state.token = action.payload.token;
        },
    },
});

export default authSlice;
