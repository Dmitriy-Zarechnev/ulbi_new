// Modules
import { RouteProps } from 'react-router-dom';
// Components
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
// Types
import { APP_ROUTES_ENUM, TRoutePath } from 'shared/types';

export const routeConfig: Record<APP_ROUTES_ENUM, RouteProps> = {
    [APP_ROUTES_ENUM.MAIN]: {
        path: TRoutePath.main,
        element: <MainPage />,
    },

    [APP_ROUTES_ENUM.ABOUT]: {
        path: TRoutePath.about,
        element: <AboutPage />,
    },

    [APP_ROUTES_ENUM.NOT_FOUND]: {
        path: TRoutePath['not-found'],
        element: <NotFoundPage />,
    },
};
