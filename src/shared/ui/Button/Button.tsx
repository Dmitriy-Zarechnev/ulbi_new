// Modules
import { FC } from 'react';
// Utils
import { classNames } from 'shared/lib/utils';
// Types
import { TButtonProps } from './types';
// Styles
import styles from './Button.module.scss';
import { BUTTON_SIZE_ENUM } from 'shared/types';

export const Button:FC<TButtonProps> = ({
    className, children, theme, size = BUTTON_SIZE_ENUM.M, square, ...rest
}) => {
    const mods = {
        [styles.Square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme], styles[size]])}
            {...rest}
        >
            {children}
        </button>
    );
};
