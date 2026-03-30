// Modules
import { useState } from 'react';
// Components
import { classNames } from 'shared/lib/utils';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';
// Utils
// Types
import { TSideBarProps } from './types';
// Styles
import styles from './SideBar.module.scss';

export const SideBar = ({ className }:TSideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggleHandler = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(styles.SideBar, { [styles.Collapsed]: collapsed }, [className])}>
            <button onClick={onToggleHandler} type="button">Toj</button>
            <div className={styles.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
