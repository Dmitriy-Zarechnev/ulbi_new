// Components
import {AppLink} from "shared/ui";
// Utils
import {classNames} from "shared/lib/utils";
// Types
import {TNavBarProps} from "./types";
import {APP_LINK_THEME_ENUM} from "shared/types";
// Styles
import styles from './NavBar.module.scss'


export const NavBar = ({className}: TNavBarProps) => {
    return (
        <nav className={classNames(styles.NavBar, {}, [className])}>
            <div className={styles.Links}>
                <AppLink to={'/'} theme={APP_LINK_THEME_ENUM.SECONDARY}> Главная</AppLink>
                <AppLink to={'/about'} theme={APP_LINK_THEME_ENUM.SECONDARY}> О нас</AppLink>
            </div>
        </nav>
    );
};
