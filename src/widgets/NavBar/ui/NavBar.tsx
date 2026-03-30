// Modules
import { useTranslation } from 'react-i18next';
// Components
import { AppLink } from 'shared/ui';
// Utils
import { classNames } from 'shared/lib/utils';
// Types
import { APP_LINK_THEME_ENUM } from 'shared/types';
import { TNavBarProps } from './types';
// Styles
import styles from './NavBar.module.scss';

export const NavBar = ({ className }: TNavBarProps) => {
    const { t } = useTranslation('nav');

    return (
        <nav className={classNames(styles.NavBar, {}, [className])}>
            <AppLink to="/" theme={APP_LINK_THEME_ENUM.SECONDARY}>
                {' '}
                {t('Главная')}
            </AppLink>
            <AppLink to="/about" theme={APP_LINK_THEME_ENUM.SECONDARY}>{t('О нас')}</AppLink>
        </nav>
    );
};
