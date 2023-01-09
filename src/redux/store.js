import { configureStore } from '@reduxjs/toolkit';
// import slice
import authSlice from '@/pages/Auth/AuthSlice';

const store = configureStore({
    reducer: {
        // Slice
        auth: authSlice.reducer,
    },
});

export default store;
