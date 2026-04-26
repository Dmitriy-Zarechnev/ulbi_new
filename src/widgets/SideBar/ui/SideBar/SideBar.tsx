// Modules
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Components
import { classNames } from 'shared/lib/utils';
import { AppLink, Button } from 'shared/ui';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';
import { AboutPageIcon, HomePageIcon } from 'shared/assets';
// Types
import { TSideBarProps } from './types';
import {
    APP_LINK_THEME_ENUM, BUTTON_SIZE_ENUM, BUTTON_THEME_ENUM, TRoutePath,
} from 'shared/types';
// Styles
import styles from './SideBar.module.scss';

export const SideBar = ({ className }:TSideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('nav');

    const onToggleHandler = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(styles.SideBar, { [styles.Collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <div className={styles.NavItems}>
                <AppLink
                    to={TRoutePath.main}
                    theme={APP_LINK_THEME_ENUM.SECONDARY}
                    className={styles.NavItem}
                >
                    <HomePageIcon className={styles.Icon} />
                    <span className={classNames('', { [styles.CollapsedNavLink]: collapsed })}>
                        {t('Главная')}
                    </span>
                </AppLink>

                <AppLink
                    to={TRoutePath.about}
                    theme={APP_LINK_THEME_ENUM.SECONDARY}
                    className={styles.NavItem}
                >
                    <AboutPageIcon className={styles.Icon} />
                    <span className={classNames('', { [styles.CollapsedNavLink]: collapsed })}>
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggleHandler}
                className={styles.CollapsedButton}
                theme={BUTTON_THEME_ENUM.BACKGROUND_INVERTED}
                square
                size={BUTTON_SIZE_ENUM.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={classNames(styles.Switchers, { [styles.CollapsedSwitchers]: collapsed })}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
