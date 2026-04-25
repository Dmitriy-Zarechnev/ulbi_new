// Modules
import { useState } from 'react';
// Components
import { classNames } from 'shared/lib/utils';
import { Button } from 'shared/ui';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
import { LangSwitcher } from '../../../LangSwitcher';
// Types
import { TSideBarProps } from './types';
import { BUTTON_SIZE_ENUM, BUTTON_THEME_ENUM } from 'shared/types';
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
                className={styles.CollapsedButton}
                theme={BUTTON_THEME_ENUM.BACKGROUND_INVERTED}
                square
                size={BUTTON_SIZE_ENUM.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
