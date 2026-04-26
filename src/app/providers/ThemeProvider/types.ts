// Types
import { THEME_ENUM } from 'shared/types';

export type TThemeContextProps = {
    theme?: THEME_ENUM;
    setTheme?: (theme: THEME_ENUM) => void;
}

export type TUseThemeResult = {
    toggleTheme: () => void;
    theme:THEME_ENUM
}

export type TThemeProviderProps ={
    initialTheme?:THEME_ENUM
}
