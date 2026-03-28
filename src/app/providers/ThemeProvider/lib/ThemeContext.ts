// Modules
import {createContext} from "react";
// Types
import {TThemeContextProps} from "../types";

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeContext = createContext<TThemeContextProps>({});

