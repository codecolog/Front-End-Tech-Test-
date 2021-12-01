import React, { createContext, useState, FC, ReactNode } from 'react';
import routesArray from '../routing';

export const RouteContext = createContext<RouteContextType | null>(null);

export const RouteProvider: FC<ReactNode> = ({ children }) => {
  const [routes, setRoutes] = useState<Array<IRoute>>(routesArray);

  const addRoute = (addRoute: IRoute) => {
    const newRoute: IRoute = addRoute;
    setRoutes([...routes, newRoute]);
  };

  const removeRoute = (deleteRoute: IRoute) => {
    const filteredRoutes = routes.filter((route: IRoute) => {
      return route.path !== deleteRoute.path;
    });
    setRoutes(filteredRoutes);
  };

  return (
    <RouteContext.Provider value={{ routes, addRoute, removeRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
