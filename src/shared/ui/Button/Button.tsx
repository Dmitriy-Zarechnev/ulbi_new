// Modules
import { FC } from 'react';
// Utils
import { classNames } from 'shared/lib/utils';
// Types
import { TButtonProps } from './types';
// Styles
import styles from './Button.module.scss';

export const Button:FC<TButtonProps> = ({
    className, children, theme, ...rest
}) => (
    <button
        type="button"
        className={classNames(styles.Button, {}, [className, styles[theme]])}
        {...rest}
    >
        {children}
    </button>
);
