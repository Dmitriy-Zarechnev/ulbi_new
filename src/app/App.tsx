// Modules
import { Suspense } from 'react';
// Components
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
// Hooks
import { classNames } from 'shared/lib/utils';
// Utils
import { AppRouter } from './providers/router';

export const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback={null}>
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
