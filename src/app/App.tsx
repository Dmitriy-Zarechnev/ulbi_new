// Components
import {AppRouter} from "./providers/router";
import {NavBar} from "widgets/NavBar";
// Hooks
import {useTheme} from "./providers/ThemeProvider";
// Utils
import {classNames} from "shared/lib/utils";
// Styles
import './styles/index.scss'

export const App = () => {
    const {theme , toggleTheme} = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>

           <NavBar/>

           <AppRouter/>
        </div>
    );
};

