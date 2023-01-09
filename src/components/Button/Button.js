import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary', 'btn--success'];

const SIZES = ['btn--medium', 'btn--large'];

const defaultFunction = () => {};

const Button = ({
    to,
    href,
    children,
    className,
    type,
    onClick = defaultFunction,
    buttonStyle,
    buttonSize,
    disabled = false,
    ...passProps
}) => {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on' && typeof key === 'function')) {
                console.log('Delete key');
                delete props[key];
            }
        });
    }

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const classes = cx('btn', checkButtonSize, checkButtonStyle, className, {
        disabled,
    });

    return (
        <Comp className={classes} type={type} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
