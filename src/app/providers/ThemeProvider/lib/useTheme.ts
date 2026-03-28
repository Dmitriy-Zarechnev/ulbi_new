// Modules
import {useContext} from "react";
// Utils
import {LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
// Types
import { TUseThemeResult } from "../types";
import {THEME_ENUM} from "shared/types";

export const useTheme = (): TUseThemeResult => {

    const {theme , setTheme} = useContext(ThemeContext);

    const toggleTheme =() => {
        const newTheme = theme === THEME_ENUM.LIGHT ? THEME_ENUM.DARK : THEME_ENUM.LIGHT

        setTheme( newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, toggleTheme}
}