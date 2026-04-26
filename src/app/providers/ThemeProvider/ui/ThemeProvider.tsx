// Modules
import React, { FC, useMemo, useState } from 'react';
// Consts
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
// Types
import { THEME_ENUM } from 'shared/types';
import { TThemeProviderProps } from '../types';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME_ENUM
    || THEME_ENUM.LIGHT;

export const ThemeProvider: FC<TThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<THEME_ENUM>(initialTheme || defaultTheme);

    const defaultThemeProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultThemeProps}>
            {children}
        </ThemeContext.Provider>
    );
};
