import { configureStore } from '@reduxjs/toolkit';
// import slice
import authSlice from '@/pages/Auth/authSlice';
import accessSlice from '@/components/Layout/components/AccessControlModals/accessSlice';
import appSlice from './appSlice';

const store = configureStore({
    reducer: {
        // Slice
        auth: authSlice.reducer,
        access: accessSlice.reducer,
        app: appSlice.reducer,
    },
});

export default store;
