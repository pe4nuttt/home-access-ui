import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import { AuthContext } from '../../context/AuthProvider';
// import { getAccount } from '~/apiServices';
// import PreferenceKeys from '~/utils/PreferenceKeys';

function useFormLogIn(validate) {
    const navigate = useNavigate();
    const location = useLocation();

    // const { isAuth, setIsAuth } = useContext(AuthContext);

    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));

        // const fetchAPI = async () => {
        //     const res = await getAccount(values);
        //     if (res.length > 0) {
        //         setIsAuth(true);

        //         localStorage.setItem(PreferenceKeys.login, values.username);

        //         const redirectTo = location.search.replace('?redirectTo=', '');

        //         navigate(redirectTo ? redirectTo : '/');
        //     } else {
        //         setErrors({
        //             ...errors,
        //             auth: "The username or password that you've entered is incorrect.",
        //         });
        //     }
        // };

        if (Object.keys(errors).length === 0) {
            // fetchAPI();
        }
    };

    return { handleChange, handleSubmit, values, errors };
}

export default useFormLogIn;
