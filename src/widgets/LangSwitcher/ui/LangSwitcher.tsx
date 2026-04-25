// Modules
import { useTranslation } from 'react-i18next';
// Components
import { Button } from 'shared/ui';
// Utils
import { classNames } from 'shared/lib/utils';
// Types
import { BUTTON_THEME_ENUM } from 'shared/types';
import { TLangSwitcherProps } from './types';
// Styles
import styles from './LangSwitcher.module.scss';

export const LangSwitcher = ({ className }:TLangSwitcherProps) => {
    const { t, i18n } = useTranslation('nav');

    const onToggleLangHandler = () => {
        const changeLanguage = i18n.language === 'ru' ? 'en' : 'ru';

        i18n.changeLanguage(changeLanguage);
    };

    return (
        <Button
            theme={BUTTON_THEME_ENUM.CLEAR}
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={onToggleLangHandler}
        >
            {t('Язык')}
        </Button>
    );
};
