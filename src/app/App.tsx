// Modules
import {Link} from "react-router-dom";
// Components
import {AppRouter} from "./providers/router";
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

            <Link to={'/'}> Главная</Link>
            <Link to={'/about'}> О нас</Link>

           <AppRouter/>
        </div>
    );
};

