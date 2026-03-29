// Components
import {LightIcon, DarkIcon} from 'shared/assets'
import {Button} from "shared/ui";
// Hooks
import {useTheme} from "app/providers/ThemeProvider";
// Types
import {THEME_BUTTON_ENUM, THEME_ENUM} from "shared/types";

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={THEME_BUTTON_ENUM.CLEAR}
            onClick={toggleTheme}
            type="button"
        >
            {
                theme === THEME_ENUM.DARK
                ? <DarkIcon width={40} height={40}/>
                : <LightIcon width={40} height={40}/>
            }
        </Button>
    );
};