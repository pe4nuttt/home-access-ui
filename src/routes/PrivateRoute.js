import { Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';

function PrivateRoute({ children }) {
    // const { isAuth } = useContext(AuthContext);
    // const prevLocation = useLocation();
    const isAuth = false;

    return isAuth ? children : <Navigate replace to="/auth/sign-in" />;
}

export default PrivateRoute;
