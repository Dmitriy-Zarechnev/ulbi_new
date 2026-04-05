// Modules
import { Suspense } from 'react';
// Components
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
// Hooks
import { classNames } from 'shared/lib/utils';
import { useTheme } from './providers/ThemeProvider';
// Utils
import { AppRouter } from './providers/router';
// Styles
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={null}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
