import { Suspense, useContext } from 'react';
import { renderRoutes } from 'react-router-config';
import { RouteContext } from '../../context';
import Loader from '../components/loader/Loader';

const Layout = () => {
  const { routes } = useContext(RouteContext) as RouteContextType;

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Suspense fallback={<Loader />}>{renderRoutes(routes)}</Suspense>
    </div>
  );
};

export default Layout;
