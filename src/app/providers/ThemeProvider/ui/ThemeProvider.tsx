// Modules
import React, { FC, useMemo, useState } from 'react';
// Utils
import { THEME_ENUM } from 'shared/types';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME_ENUM
    || THEME_ENUM.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<THEME_ENUM>(defaultTheme);

    const defaultThemeProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultThemeProps}>
            {children}
        </ThemeContext.Provider>
    );
};
