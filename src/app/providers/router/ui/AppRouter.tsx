// Modules
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
// Components
import { routeConfig } from 'shared/config';

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />)}
        </Routes>
    </Suspense>
);
