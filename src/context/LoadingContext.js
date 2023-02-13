import { createContext, useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider
            value={{
                loading: loading,
                startLoading: () => setLoading(true),
                endLoading: () => setLoading(false),
            }}
        >
            {children}
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                    onClick={() => setLoading(false)}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    return useContext(LoadingContext);
}
