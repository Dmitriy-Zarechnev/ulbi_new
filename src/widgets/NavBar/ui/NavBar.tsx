// Modules
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
// Components
import { Button, Modal } from 'shared/ui';
// Utils
import { classNames } from 'shared/lib/utils';
// Types
import { TNavBarProps } from './types';
// Styles
import styles from './NavBar.module.scss';
import { BUTTON_THEME_ENUM } from 'shared/types';

export const NavBar = ({ className }: TNavBarProps) => {
    const { t } = useTranslation('nav');
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onToggleModalHandler = useCallback(() => setIsAuthOpen((prev) => !prev), []);

    return (
        <nav className={classNames(styles.NavBar, {}, [className])}>
            <Button
                theme={BUTTON_THEME_ENUM.CLEAR_INVERTED}
                onClick={onToggleModalHandler}
            >
                {t('Войти')}
            </Button>

            <Modal
                isOpen={isAuthOpen}
                onClose={onToggleModalHandler}
            >
                12345
            </Modal>
        </nav>
    );
};
