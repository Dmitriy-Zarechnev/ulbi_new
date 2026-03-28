// Modules
import {Link} from "react-router-dom";
import {FC} from "react";
// Utils
import {classNames} from "shared/lib/utils";
// Types
import { TAppLinkProps} from "./types";
import {APP_LINK_THEME_ENUM} from "../../types";
// Styles
import styles from './AppLink.module.scss'

export const AppLink:FC<TAppLinkProps> = (props) => {
    const {to, children, className, theme = APP_LINK_THEME_ENUM.PRIMARY,  ...restProps} = props;

    return (
        <Link className={classNames(styles.AppLink, {}, [className, styles[theme]])} to={to} {...restProps}>
            {children}
        </Link>
    );
};