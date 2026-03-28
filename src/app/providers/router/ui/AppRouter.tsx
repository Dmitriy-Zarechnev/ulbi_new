// Modules
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
// Components
import {routeConfig} from "shared/config";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element})=>{
                    return <Route key={path} path={path} element={element}/>
                })}
            </Routes>
        </Suspense>
    );
};

