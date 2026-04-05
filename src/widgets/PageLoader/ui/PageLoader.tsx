// Components
import { Loader } from 'shared/ui';
// Styles
import styles from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={styles.PageLoader}>
        <Loader />
    </div>
);
