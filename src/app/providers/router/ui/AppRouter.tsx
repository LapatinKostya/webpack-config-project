import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={'...loading'}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route path={path} element={element}/>
        ))}
      </Routes>
    </Suspense>
  );
};
