// Components
import { Button } from 'shared/ui';
// Types
import { useTranslation } from 'react-i18next';
// Styles
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.NotFoundPage}>
            <div className={styles.ComponentsWrapper}>
                {t('Страница не найдена')}
                <Button type="button" className={styles.HomePageButton}>{t('Вернуться на главную')}</Button>
            </div>
        </div>
    );
};
