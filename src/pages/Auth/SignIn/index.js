import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import useForm from './useFormLogIn';
import validate from './validateInfoLogIn';
import styles from './FormSignIn.module.scss';
import { login } from '@/apiServices/auth';

const cx = classNames.bind(styles);

function FormLogIn() {
    const { handleChange, handleSubmit, values, errors } = useForm(validate);

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('form-content-left')}>
                    <img src="images/img-login.svg" alt="Form" className={cx('form-img')} />
                </div>
                <div className={cx('form-content-right')}>
                    <form action="" className={cx('form')} onSubmit={handleSubmit}>
                        <h3 className={cx('form-heading')}>
                            Get started with us today! Login by filling out the information below.
                        </h3>
                        <div className={cx('form-inputs')}>
                            <label htmlFor="username" className={cx('form-label')}>
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                className={cx('form-input')}
                                placeholder="Enter your username"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className={cx('form-input-error')}>{errors.username}</p>}
                        </div>
                        <div className={cx('form-inputs')}>
                            <label htmlFor="password" className={cx('form-label')}>
                                Password
                            </label>
                            <input
                                id="password"
                                type="text"
                                name="password"
                                className={cx('form-input')}
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className={cx('form-input-error')}>{errors.password}</p>}
                            {errors.auth && <p className={cx('form-input-error')}>{errors.auth}</p>}
                        </div>
                        <button className={cx('form-input-btn')} type="submit">
                            Log in
                        </button>
                        <span className={cx('form-input-login')}>
                            Don't have an account yet? Register
                            <Link to="/auth/sign-up"> here</Link>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormLogIn;
