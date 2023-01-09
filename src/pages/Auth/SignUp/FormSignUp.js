import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';

function FormSignUp({ submitForm }) {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <div className="form-content-left">
                    <img src="images/img-login.svg" alt="Form image" className="form-img" />
                </div>
                <div className="form-content-right">
                    <form className="form" onSubmit={handleSubmit}>
                        <h3 className="form-heading">
                            Get started with us today! Create your account by filling out the information below.
                        </h3>
                        <div className="form-inputs">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                className="form-input"
                                placeholder="Enter your username"
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="form-input-error">{errors.username}</p>}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="form-input-error">{errors.email}</p>}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="form-input-error">{errors.password}</p>}
                        </div>
                        <div className="form-inputs">
                            <label htmlFor="password2" className="form-label">
                                Confirm password
                            </label>
                            <input
                                id="password2"
                                type="password"
                                name="password2"
                                className="form-input"
                                placeholder="Enter your password"
                                value={values.password2}
                                onChange={handleChange}
                            />
                            {errors.password2 && <p className="form-input-error">{errors.password2}</p>}
                        </div>
                        <button className="form-input-btn" type="submit">
                            Sign up
                        </button>
                        <span className="form-input-login">
                            Already have an account? Login
                            <a href="#"> here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormSignUp;
