export enum THEME_ENUM {
    LIGHT = 'Light',
    DARK = 'Dark'
}

export type TThemeContextProps = {
    theme?: THEME_ENUM;
    setTheme?: (theme: THEME_ENUM) => void;
}

export type TUseThemeResult = {
    toggleTheme: () => void;
    theme:THEME_ENUM
}