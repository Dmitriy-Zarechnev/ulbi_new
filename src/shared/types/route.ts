export enum APP_ROUTES_ENUM {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found',
}

export const TRoutePath: Record<APP_ROUTES_ENUM, string> = {
    [APP_ROUTES_ENUM.MAIN]: '/',
    [APP_ROUTES_ENUM.ABOUT]: '/about',
    [APP_ROUTES_ENUM.NOT_FOUND]: '*',
};
