// Modules
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
// Components
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
// Hooks
import {useTheme} from "app/providers/ThemeProvider";
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

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>} />
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

