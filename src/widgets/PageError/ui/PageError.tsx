// Hooks
import { useTranslation } from 'react-i18next';
// Types
import { Button } from 'shared/ui';
// Styles
import styles from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const refreshPageHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={styles.PageError}>
            <p>{t('Произошла непредвиденная ошибка')}</p>

            <Button type="button" onClick={refreshPageHandler}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
