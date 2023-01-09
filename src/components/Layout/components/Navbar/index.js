import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button/Button';
// import PreferenceKeys from '~/utils/PreferenceKeys';
// import { AuthContext } from '~/context/AuthProvider';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    // const { isAuth, setIsAuth } = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState(true);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleSignOut = () => {
        // setIsAuth(false);
        // localStorage.removeItem(PreferenceKeys.login);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={cx('navbar')}>
                <div className={cx('container')}>
                    <Link to="/" className={cx('logo')}>
                        Home Access <FontAwesomeIcon icon={faTypo3} onClick={closeMobileMenu} />
                    </Link>
                    <div className={cx('menu-icon')} onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
                    </div>
                    <ul
                        className={cx('nav-menu', {
                            active: click,
                        })}
                    >
                        <li className={cx('nav-item')}>
                            <Link to="/how-to" className={cx('nav-links')} onClick={closeMobileMenu}>
                                How to
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/get-qr" className={cx('nav-links')} onClick={closeMobileMenu}>
                                Get QR
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/tracking" className={cx('nav-links')} onClick={closeMobileMenu}>
                                Tracking
                            </Link>
                        </li>

                        <li className={cx('nav-item')}>
                            {isAuth ? (
                                <Link
                                    to="/"
                                    className={cx('nav-links-mobile')}
                                    onClick={() => {
                                        handleSignOut();
                                        closeMobileMenu();
                                    }}
                                >
                                    Sign out
                                </Link>
                            ) : (
                                <Link to="/sign-up" className={cx('nav-links-mobile')} onClick={closeMobileMenu}>
                                    Sign up
                                </Link>
                            )}
                        </li>
                    </ul>

                    {!isAuth && button && (
                        <Button to="/auth/sign-in" buttonStyle="btn--outline">
                            SIGN IN
                        </Button>
                    )}
                    {isAuth && button && (
                        <Button to="/" buttonStyle="btn--outline" onClick={handleSignOut}>
                            SIGN OUT
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
