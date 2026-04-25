// Modules
import { useState } from 'react';
// Components
import { classNames } from 'shared/lib/utils';
import { Button } from 'shared/ui';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';
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
        <div
            className={classNames(styles.SideBar, { [styles.Collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggleHandler}
                type="button"
            >
                1234
            </Button>
            <div className={styles.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
