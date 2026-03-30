export enum APP_ROUTES_ENUM {
    MAIN = 'main',
    ABOUT = 'about'
}

export const TRoutePath: Record<APP_ROUTES_ENUM, string> = {
    [APP_ROUTES_ENUM.MAIN]: '/',
    [APP_ROUTES_ENUM.ABOUT]: '/about',
};
