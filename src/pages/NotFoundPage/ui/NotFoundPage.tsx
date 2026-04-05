// Types
import { useTranslation } from 'react-i18next';
// Styles
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.NotFoundPage}>
            {t('Страница не найдена')}
        </div>
    );
};
