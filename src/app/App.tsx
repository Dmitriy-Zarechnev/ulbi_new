// Modules
import {Suspense} from "react";
// Components
import {AppRouter} from "./providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";
// Hooks
import {useTheme} from "./providers/ThemeProvider";
// Utils
import {classNames} from "shared/lib/utils";
// Styles
import './styles/index.scss'

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <Suspense fallback={null}>
                <NavBar/>
                <div className={'content-page'}>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

